let historial = JSON.parse(localStorage.getItem('historial')) || [];

function guardarHistorial(libro, usuario, diasRetraso = 0, tiempoPrestamo = 0) {
    historial.push({
        libroId: libro.id,
        libroTitulo: libro.titulo,
        usuarioId: usuario.id,
        usuarioNombre: usuario.user,
        fechaAccion: new Date().toISOString(),
        diasRetraso: diasRetraso,
        tiempoPrestamo: tiempoPrestamo // Días que tuvo el libro
    });
    localStorage.setItem('historial', JSON.stringify(historial));
}

let configuracion = JSON.parse(localStorage.getItem('config')) || { 
    maxLibros: 3, 
    diasPrestamo: 14,
    multaDias: 2 // Días de penalización por cada día de retraso
};

// Datos iniciales
let libros = JSON.parse(localStorage.getItem('libros')) || [
    { id: 1, titulo: "El Quijote", disponible: true, prestadoA: null, vecesPrestado: 0 },
    { id: 2, titulo: "JavaScript Moderno", disponible: true, prestadoA: null, vecesPrestado: 0 }
];

function save() {
    localStorage.setItem('libros', JSON.stringify(libros));
}

// --- CATALOGO ---
function renderCatalogo() {
    const container = document.getElementById('lista-libros');
    container.innerHTML = libros.map(libro => `
        <div class="card">
            <p>${libro.titulo} - ${libro.disponible ? '✅ Disponible' : '❌ Prestado'}</p>
            ${libro.disponible ? `<button onclick="prestarLibro(${libro.id})">Solicitar</button>` : ''}
        </div>
    `).join('');
}

// --- PRÉSTAMOS ---
function prestarLibro(id) {
    const usuarioActual = JSON.parse(localStorage.getItem('usuarios')).find(u => u.id === usuarioLogueado.id);
    
    // Validaciones
    if (usuarioActual.penalizado) return alert("Estás penalizado. No puedes pedir libros.");
    
    const misPrestamos = libros.filter(l => l.prestadoA === usuarioActual.id);
    if (misPrestamos.length >= configuracion.maxLibros) return alert("Límite de libros alcanzado.");

    const libro = libros.find(l => l.id === id);
    libro.disponible = false;
    libro.prestadoA = usuarioActual.id;
    libro.fechaDevolucion = new Date(Date.now() + configuracion.diasPrestamo * 24 * 60 * 60 * 1000).toLocaleDateString();
    libro.vecesPrestado++;

    save();
    renderCatalogo();
}

function devolverLibro(id) {
    const libro = libros.find(l => l.id === id);
    const fechaPrestamo = new Date(libro.fechaInicio); // Necesitaremos guardar esto al prestar
    const fechaHoy = new Date();
    
    // Calcular días que tuvo el libro
    const diferenciaMilisegundos = fechaHoy - fechaPrestamo;
    const diasTranscurridos = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

    // Calcular si hubo retraso (comparando con la fecha de devolución prevista)
    const fechaLimite = new Date(libro.fechaDevolucion);
    let retraso = 0;
    if (fechaHoy > fechaLimite) {
        retraso = Math.floor((fechaHoy - fechaLimite) / (1000 * 60 * 60 * 24));
    }

    // Registrar en historial antes de limpiar el libro
    guardarHistorial(libro, {id: libro.prestadoA}, retraso, diasTranscurridos);

    // Resetear libro
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

// --- ADMIN ---
function renderAdmin() {
    const stats = document.getElementById('stats-container');
    const masPrestado = [...libros].sort((a,b) => b.vecesPrestado - a.vecesPrestado)[0];
    
    stats.innerHTML = `
        <p>Libro más popular: ${masPrestado ? masPrestado.titulo : 'N/A'}</p>
        <p>Configuración actual: Max ${configuracion.maxLibros} libros / ${configuracion.diasPrestamo} días</p>
    `;
}

function agregarLibro() {
    const titulo = document.getElementById('add-titulo').value;
    if(!titulo) return;
    libros.push({ id: Date.now(), titulo, disponible: true, prestadoA: null, vecesPrestado: 0 });
    save();
    alert("Libro añadido");
}

function actualizarConfig() {
    configuracion.maxLibros = parseInt(document.getElementById('conf-max').value);
    configuracion.diasPrestamo = parseInt(document.getElementById('conf-dias').value);
    localStorage.setItem('config', JSON.stringify(configuracion));
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
    // 1. Cargar valores de config en inputs
    document.getElementById('conf-max').value = configuracion.maxLibros;
    document.getElementById('conf-dias').value = configuracion.diasPrestamo;

    // 2. Renderizar lista de libros con opción de borrar
    const listaL = document.getElementById('admin-lista-libros');
    listaL.innerHTML = libros.map(l => `
        <li>${l.titulo} <button onclick="eliminarLibro(${l.id})">❌</button></li>
    `).join('');

    // 3. Renderizar usuarios y estado de penalización
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));
    const listaU = document.getElementById('admin-lista-usuarios');
    listaU.innerHTML = usuarios.map(u => `
        <div class="user-row">
            <span>${u.user} (${u.role})</span>
            <button onclick="togglePenalizacion(${u.id})">
                ${u.penalizado ? 'Quitar Penalización' : 'Penalizar'}
            </button>
        </div>
    `).join('');

    // 4. Estadísticas
   function calcularEstadisticas() {
    const statsDiv = document.getElementById('stats-container');
    
    if (historial.length === 0) {
        statsDiv.innerHTML = "<p>No hay datos suficientes para generar estadísticas.</p>";
        return;
    }

    // 1. Libro más prestado (usando el contador vecesPrestado de los libros)
    const masPrestado = [...libros].sort((a, b) => b.vecesPrestado - a.vecesPrestado)[0];

    // 2. Usuarios con más retrasos
    const retrasosPorUsuario = {};
    historial.forEach(reg => {
        if (reg.diasRetraso > 0) {
            retrasosPorUsuario[reg.usuarioNombre] = (retrasosPorUsuario[reg.usuarioNombre] || 0) + 1;
        }
    });
    const topInfractor = Object.entries(retrasosPorUsuario).sort((a,b) => b[1] - a[1])[0];

    // 3. Tiempo medio de devolución
    const totalDias = historial.reduce((acc, reg) => acc + reg.tiempoPrestamo, 0);
    const tiempoMedio = (totalDias / historial.length).toFixed(1);

    statsDiv.innerHTML = `
        <div class="stats-grid">
            <div class="stat-card">
                <h4>🏆 Libro Estrella</h4>
                <p>${masPrestado.titulo} (${masPrestado.vecesPrestado} veces)</p>
            </div>
            <div class="stat-card">
                <h4>⚠️ Mayor Infractor</h4>
                <p>${topInfractor ? `${topInfractor[0]} (${topInfractor[1]} retrasos)` : 'Nadie, ¡todos cumplen!'}</p>
            </div>
            <div class="stat-card">
                <h4>⏱️ Tiempo Medio Préstamo</h4>
                <p>${tiempoMedio} días</p>
            </div>
        </div>
    `;
}
}