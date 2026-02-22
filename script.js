// Registrar usuario
function registrar() {
    var usuario = document.getElementById("nuevoUsuario").value;
    var password = document.getElementById("nuevaPassword").value;

    if(usuario === "" || password === "") {
        alert("Complete todos los campos");
        return;
    }

    localStorage.setItem("usuario", usuario);
    localStorage.setItem("password", password);

    alert("Usuario registrado correctamente");
    window.location.href = "login.html";
}

// Login
function login() {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    var usuarioGuardado = localStorage.getItem("usuario");
    var passwordGuardado = localStorage.getItem("password");

    if(usuario === usuarioGuardado && password === passwordGuardado) {
        window.location.href = "index.html";
    } else {
        alert("Datos incorrectos");
    }
}

// Logout
function logout() {
    window.location.href = "login.html";
}
