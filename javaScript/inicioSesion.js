function showPassword() {
    const ojo = document.getElementById('ojo');
    const ojoCerrado = document.getElementById('ojoCerrado');
    var passwordInput = document.getElementById("password");

    if (ojo.style.display !== 'none') {
        passwordInput.type = "text";
        ojo.style.display = 'none';
        ojoCerrado.style.display = 'inline';
    } else {
        passwordInput.type = "password";
        ojo.style.display = 'inline';
        ojoCerrado.style.display = 'none';
    }
}



document.getElementById('formularioInicioSesion').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita la recarga de la página por defecto

    const inicioForm = [];

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const check = document.getElementById('casillaVerificacion').checked;


    const formData = {
        "email": email,
        "password": password,
        "check": check
    };
    inicioForm.push(formData);
   
    if( validarDatos(email, password)){
        localStorage.setItem('email', email);
        console.log(localStorage);
        console.log("LLEGA A NAVEGAR");
        window.location.href = 'inicio.html';
    }
});


  function validarDatos(email, password) {
    const emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

    if (email === '' ||password === '' ) {
        document.getElementById("emailError").style.display = "block";
        document.getElementById("passwordError").style.display = "block";
    
        return false; 
    } else if (!emailPattern.test(email)) {
        emailError.style.display = "block";
        return false;
    } else{
        emailError.style.display = "none";
        passwordError.style.display = "none";
        return true; 
    }
    
}