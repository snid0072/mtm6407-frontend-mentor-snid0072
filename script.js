// nav
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', (e) => {
    
    e.stopPropagation();
    dropdowns.forEach(d => {
      if (d !== dropdown) {
        d.classList.remove('active');
      }
    });

    dropdown.classList.toggle('active');
  });
});

document.addEventListener('click', () => {
  dropdowns.forEach(dropdown => {
    dropdown.classList.remove('active');
  });
});
//mobile nav
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

// mobile menu stuff
openMenu.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  overlay.classList.add('active');
});
closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
});