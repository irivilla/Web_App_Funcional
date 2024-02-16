const redireccionInicio = sessionStorage.getItem('redireccionInicio');
console.log(sessionStorage)

if (!redireccionInicio) {
  setTimeout(function() {
 sessionStorage.setItem('redireccionInicio', 'true');
    
    window.location.href = 'inicioSesion.html';
  }, 3000);

  window.addEventListener('popstate', function() {
    // Cuando se hace clic en el botón "atrás", limpiar la marca de redirección
    sessionStorage.removeItem('redireccionInicio');
  });
}