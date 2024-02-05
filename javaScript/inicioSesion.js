let hayError = false

function enviarFormulario() {
    // Obtener los valores de los inputs

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const storage= localStorage.setItem('email', email);
    // Realizar alguna acción con los valores (en este caso, solo los mostramos en la consola)
    console.log('Email:', email);
    console.log('Contraseña:', password);

    if(email === "" ){
        hayError = true;

    }
  }