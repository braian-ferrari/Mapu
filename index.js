if (window.innerWidth > 768) { // Solo en pantallas más grandes
    window.addEventListener('scroll', function() {
      const nav = document.querySelector('nav.navbar');
      if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
      } else {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
      }
    });
  }


  
