const usuariosPredefinidos = [
    { id: 1, user: 'admin', pass: '1234', role: 'admin', penalizado: false },
    { id: 2, user: 'user1', pass: '1234', role: 'user', penalizado: false }
];

if (!localStorage.getItem('usuarios')) {
    localStorage.setItem('usuarios', JSON.stringify(usuariosPredefinidos));
}

let usuarioLogueado = JSON.parse(sessionStorage.getItem('sesionActive')) || null;

function login() {
    const user = document.getElementById('login-user').value;
    const pass = document.getElementById('login-pass').value;
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));
    const found = usuarios.find(u => u.user === user && u.pass === pass);

    if (found) {
        usuarioLogueado = found; 
        sessionStorage.setItem('sesionActive', JSON.stringify(found));
        checkUI(); 
    } else {
        alert("Usuario o contraseña no válidos");
    }
}

function logout() {
    sessionStorage.removeItem('sesionActive');
    location.reload();
}

function checkUI() {
    if (usuarioLogueado) {
        document.getElementById('section-login').classList.add('hidden');
        document.getElementById('navbar').classList.remove('hidden');
        document.getElementById('welcome-msg').innerText = `Hola, ${usuarioLogueado.user}`;
        
        if (usuarioLogueado.role === 'admin') {
            document.getElementById('btn-admin').classList.remove('hidden');
        }
        showSection('section-catalogo');
    }
}

function showSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    if(id === 'section-catalogo') renderCatalogo();
    if(id === 'section-mis-prestamos') renderMisPrestamos();
    if(id === 'section-admin') renderAdmin();
}

window.onload = checkUI;