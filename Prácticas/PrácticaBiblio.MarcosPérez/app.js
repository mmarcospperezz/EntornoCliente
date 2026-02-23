let historial = JSON.parse(localStorage.getItem('historial')) || [];
let configuracion = JSON.parse(localStorage.getItem('config')) || { 
    maxLibros: 3, 
    diasPrestamo: 14,
    multaDias: 2 
};

let libros = JSON.parse(localStorage.getItem('libros')) || [
    { 
        id: 1, 
        titulo: "El Quijote", 
        autor: "Miguel de Cervantes", 
        portada: "https://m.media-amazon.com/images/I/91CIwR3QU1L._UF1000,1000_QL80_.jpg",
        disponible: true, 
        prestadoA: null, 
        vecesPrestado: 0 
    },
    { 
        id: 2, 
        titulo: "Cumbres Borrascosas", 
        autor: "Emily Brontë", 
        portada: "https://www.alianzaeditorial.es/imagenes/libros/grande/9788491819431-cumbres-borrascosas.jpg",
        disponible: true, 
        prestadoA: null, 
        vecesPrestado: 0 
    }
];

function save() {
    localStorage.setItem('libros', JSON.stringify(libros));
}

function guardarHistorial(libro, usuario, diasRetraso = 0, tiempoPrestamo = 0) {
    historial.push({
        libroId: libro.id,
        libroTitulo: libro.titulo,
        usuarioNombre: usuario.user,
        fechaAccion: new Date().toISOString(),
        diasRetraso: diasRetraso,
        tiempoPrestamo: tiempoPrestamo
    });
    localStorage.setItem('historial', JSON.stringify(historial));
}

function renderCatalogo() {
    const container = document.getElementById('lista-libros');
    container.innerHTML = libros.map(libro => `
        <div class="card">
            <img src="${libro.portada || 'https://via.placeholder.com/300x400?text=Sin+Portada'}" class="book-img">
            <div class="card-content">
                <h3>${libro.titulo}</h3>
                <p style="color: ${libro.disponible ? '#10b981' : '#ef4444'}; font-weight: bold;">
                    ${libro.disponible ? '● Disponible' : '● Prestado'}
                </p>
                <div style="display:flex; gap:5px; margin-top:10px;">
                    <button class="btn-detalle" onclick="verDetalle(${libro.id})">Detalle</button>
                    ${libro.disponible ? `<button onclick="prestarLibro(${libro.id})">Solicitar</button>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function verDetalle(id) {
    const libro = libros.find(l => l.id === id);
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    
    const detalleSec = document.getElementById('pantalla-detalle');
    detalleSec.classList.remove('hidden');
    
    detalleSec.innerHTML = `
        <div class="card-detalle">
            <img src="${libro.portada}" class="img-detalle">
            <div class="info-detalle">
                <h2>${libro.titulo}</h2>
                <p><strong>Autor:</strong> ${libro.autor || 'Anónimo'}</p>
                <p><strong>ID:</strong> ${libro.id}</p>
                <p><strong>Estado:</strong> ${libro.disponible ? ' Disponible en estantería' : ' No disponible'}</p>
                <p><strong>Veces prestado:</strong> ${libro.vecesPrestado}</p>
                <button onclick="showSection('section-catalogo')" style="background:#64748b">Volver al catálogo</button>
            </div>
        </div>
    `;
}

function prestarLibro(id) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));
    const usuarioActual = usuarios.find(u => u.id === usuarioLogueado.id);
    
    if (usuarioActual.penalizado) return alert("Estás penalizado. No puedes pedir libros.");
    
    const misPrestamos = libros.filter(l => l.prestadoA === usuarioActual.id);
    if (misPrestamos.length >= configuracion.maxLibros) return alert("Límite de libros alcanzado.");

    const libro = libros.find(l => l.id === id);
    libro.fechaInicio = new Date().toISOString(); 
    libro.disponible = false;
    libro.prestadoA = usuarioActual.id;
    libro.fechaDevolucion = new Date(Date.now() + configuracion.diasPrestamo * 24 * 60 * 60 * 1000).toLocaleDateString();
    libro.vecesPrestado++;

    save();
    renderCatalogo();
    alert("Libro solicitado con éxito");
}

function devolverLibro(id) {
    const libro = libros.find(l => l.id === id);
    const fechaPrestamo = new Date(libro.fechaInicio);
    const fechaHoy = new Date();
    
    const diasTranscurridos = Math.floor((fechaHoy - fechaPrestamo) / (1000 * 60 * 60 * 24));
    const fechaLimite = new Date(libro.fechaDevolucion);
    let retraso = fechaHoy > fechaLimite ? Math.floor((fechaHoy - fechaLimite) / (1000 * 60 * 60 * 24)) : 0;

    guardarHistorial(libro, {user: usuarioLogueado.user}, retraso, diasTranscurridos);

    libro.disponible = true;
    libro.prestadoA = null;
    libro.fechaInicio = null;
    save();
    renderMisPrestamos();
}

function renderMisPrestamos() {
    const tabla = document.getElementById('tabla-mis-prestamos');
    const misLibros = libros.filter(l => l.prestadoA === usuarioLogueado.id);
    
    tabla.innerHTML = misLibros.map(l => `
        <tr>
            <td>${l.titulo}</td>
            <td>${l.fechaDevolucion}</td>
            <td><button onclick="devolverLibro(${l.id})">Devolver</button></td>
        </tr>
    `).join('');
}

function agregarLibro() {
    const titulo = document.getElementById('add-titulo').value;
    const autor = document.getElementById('add-autor').value;
    const portada = document.getElementById('add-portada').value;
    
    if(!titulo || !autor) return alert("Rellena título y autor");

    libros.push({ 
        id: Date.now(), 
        titulo, 
        autor, 
        portada: portada || "https://via.placeholder.com/300x400?text=Libro",
        disponible: true, 
        prestadoA: null, 
        vecesPrestado: 0 
    });
    
    save();
    renderAdmin();
    document.getElementById('add-titulo').value = "";
    document.getElementById('add-autor').value = "";
    document.getElementById('add-portada').value = "";
}

function eliminarLibro(id) {
    libros = libros.filter(l => l.id !== id);
    save();
    renderAdmin();
}

function togglePenalizacion(userId) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios'));
    const user = usuarios.find(u => u.id === userId);
    user.penalizado = !user.penalizado;
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    renderAdmin();
}

function renderAdmin() {
    document.getElementById('conf-max').value = configuracion.maxLibros;
    document.getElementById('conf-dias').value = configuracion.diasPrestamo;

    const listaL = document.getElementById('admin-lista-libros');
    listaL.innerHTML = libros.map(l => `
        <li style="margin-bottom:10px;">${l.titulo} <button onclick="eliminarLibro(${l.id})" style="background:#ef4444; padding:2px 8px;">Borrar</button></li>
    `).join('');

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const listaU = document.getElementById('admin-lista-usuarios');
    listaU.innerHTML = usuarios.map(u => `
        <div class="user-row" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; background:#f1f5f9; padding:10px; border-radius:8px;">
            <span>${u.user} (${u.role})</span>
            <button onclick="togglePenalizacion(${u.id})" style="background: ${u.penalizado ? '#10b981' : '#f59e0b'}">
                ${u.penalizado ? 'Quitar Penalización' : 'Penalizar'}
            </button>
        </div>
    `).join('');

    calcularEstadisticas();
}

function calcularEstadisticas() {
    const statsDiv = document.getElementById('stats-container');
    if (historial.length === 0) {
        statsDiv.innerHTML = "<p>No hay datos suficientes para generar estadísticas.</p>";
        return;
    }

    const masPrestado = [...libros].sort((a, b) => b.vecesPrestado - a.vecesPrestado)[0];
    const totalDias = historial.reduce((acc, reg) => acc + reg.tiempoPrestamo, 0);
    const tiempoMedio = (totalDias / historial.length).toFixed(1);

    statsDiv.innerHTML = `
        <div class="stats-grid">
            <div class="stat-card">
                <h4>Libro Estrella</h4>
                <p>${masPrestado ? masPrestado.titulo : 'N/A'}</p>
            </div>
            <div class="stat-card">
                <h4>Tiempo Medio</h4>
                <p>${tiempoMedio} días</p>
            </div>
        </div>
    `;
}