/* ============================================
   MENU HAMBURGER : ouvre/ferme le menu mobile
   ============================================ */

// On récupère les éléments dont on a besoin
const boutonHamburger = document.querySelector('.menu-hamburger');
const navLinks = document.querySelector('.nav-links');

// Au clic sur le hamburger, on ajoute/enlève la classe "ouvert"
boutonHamburger.addEventListener('click', function() {
  navLinks.classList.toggle('ouvert');
});


/* ============================================
   DARK MODE / LIGHT MODE
   ============================================ */

const boutonTheme = document.querySelector('.toggle-theme');

// Au chargement de la page : on vérifie si un thème est déjà
// enregistré dans localStorage, et on l'applique
const themeSauvegarde = localStorage.getItem('theme');

if (themeSauvegarde === 'dark') {
  document.body.setAttribute('data-theme', 'dark');
}

// Au clic sur le bouton thème, on bascule entre clair et sombre
boutonTheme.addEventListener('click', function() {

  // Si le thème actuel est déjà "dark", on repasse en clair
  if (document.body.getAttribute('data-theme') === 'dark') {
    document.body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    // Sinon on passe en sombre
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }

});