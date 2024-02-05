const redireccionInicio = sessionStorage.getItem('redireccionInicio');

if (!redireccionInicio) {
  setTimeout(function() {
    // Marcar la redirección como realizada en la sesión actual
    sessionStorage.setItem('redireccionInicio', 'true');
    
    // Redireccionar:
    window.location.href = 'inicioSesion.html';
  }, 3000);

  window.addEventListener('popstate', function() {
    // Cuando se hace clic en el botón "atrás", limpiar la marca de redirección
    sessionStorage.removeItem('redireccionInicio');
  });
}