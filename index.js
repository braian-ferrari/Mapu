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

