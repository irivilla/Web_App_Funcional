

function enviarFormulario() {
    // Obtener los valores de los inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').checked;
  
    // Realizar alguna acción con los valores (en este caso, solo los mostramos en la consola)
    console.log('Email:', email);
    console.log('Contraseña:', password);
  }