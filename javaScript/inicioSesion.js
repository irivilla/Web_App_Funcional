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




function enviarFormulario() {
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
        window.location.href = 'inicio.html';
    }
  }


  function validarDatos(email, password) {
    if (email === '' ||password === '' ) {
        document.getElementById("emailError").style.display = "block";
        document.getElementById("passwordError").style.display = "block";
    
        return false; 
    }else{
        emailError.style.display = "none";
        passwordError.style.display = "none";
        return true; 
    }
    
}