document.addEventListener('DOMContentLoaded', function () {
  const navbarCollapse = document.getElementById('navbarMenuMobile');
  const links = navbarCollapse.querySelectorAll('.nav-link, .btn');

  links.forEach(link => {
    link.addEventListener('click', () => {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    });
  });
});



AOS.init({
  duration: 1000,   // duración de la animación
  once: false,      // permite que se repita al volver a aparecer
  mirror: true      // animación también al hacer scroll hacia arriba
});
