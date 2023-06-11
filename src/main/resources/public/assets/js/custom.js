(function () {

    // Código dentro de la función
    window.addEventListener('DOMContentLoaded', function () {
        fetch('/navbar.html')
            .then(response => response.text())
            .then(data => {
                const navbarDiv = document.getElementById('navbarContend');
                navbarDiv.innerHTML = data;
      
            })
            .catch(error => {
                console.error('Error al cargar la cabecera:', error);
            });
    });
})();