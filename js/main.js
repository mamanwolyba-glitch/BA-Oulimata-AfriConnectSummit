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
/* ============================================
   NAVBAR DYNAMIQUE : change d'apparence au scroll
   ============================================ */

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {

  // Si on a défilé de plus de 80px, on ajoute une classe
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

});


/* ============================================
   BOUTON RETOUR EN HAUT
   ============================================ */

const boutonRetourHaut = document.querySelector('#retour-haut');

window.addEventListener('scroll', function() {

  // On affiche le bouton seulement après 300px de scroll
  if (window.scrollY > 300) {
    boutonRetourHaut.style.display = 'flex';
  } else {
    boutonRetourHaut.style.display = 'none';
  }

});

// Au clic sur le bouton, on remonte en haut avec une animation fluide
boutonRetourHaut.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
/* ============================================
   ANNÉE DYNAMIQUE DANS LE FOOTER
   ============================================ */

const spanAnnee = document.querySelector('#annee');
spanAnnee.textContent = new Date().getFullYear();


/* ============================================
   VALIDATION DU FORMULAIRE (page contact)
   ============================================ */

const formulaire = document.querySelector('#form-inscription');

// On vérifie que le formulaire existe sur cette page avant de continuer
// (utile car ce script est chargé sur les 4 pages, mais le formulaire
// n'existe que sur contact.html)
if (formulaire) {

  formulaire.addEventListener('submit', function(evenement) {

    evenement.preventDefault(); // empêche l'envoi et le rechargement de page

    let formulaireValide = true; // on suppose que tout est bon au départ

    // ----- Nom complet -----
    const nomComplet = document.querySelector('#nom-complet');
    const erreurNom = document.querySelector('#erreur-nom');

    if (nomComplet.value.trim() === '') {
      erreurNom.textContent = 'Le nom complet est requis.';
      nomComplet.style.borderColor = 'red';
      formulaireValide = false;
    } else {
      erreurNom.textContent = '';
      nomComplet.style.borderColor = 'green';
    }

    // ----- Email (vérifié avec une expression régulière) -----
    const email = document.querySelector('#email');
    const erreurEmail = document.querySelector('#erreur-email');
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email.value)) {
      erreurEmail.textContent = 'Veuillez entrer un email valide.';
      email.style.borderColor = 'red';
      formulaireValide = false;
    } else {
      erreurEmail.textContent = '';
      email.style.borderColor = 'green';
    }

    // ----- Téléphone (minimum 8 chiffres) -----
    const telephone = document.querySelector('#telephone');
    const erreurTelephone = document.querySelector('#erreur-telephone');
    const chiffresUniquement = telephone.value.replace(/\D/g, ''); // enlève tout sauf les chiffres

    if (chiffresUniquement.length < 8) {
      erreurTelephone.textContent = 'Le téléphone doit contenir au moins 8 chiffres.';
      telephone.style.borderColor = 'red';
      formulaireValide = false;
    } else {
      erreurTelephone.textContent = '';
      telephone.style.borderColor = 'green';
    }

    // ----- Type de participation -----
    const typeParticipation = document.querySelector('#type-participation');
    const erreurType = document.querySelector('#erreur-type');

    if (typeParticipation.value === '') {
      erreurType.textContent = 'Veuillez choisir un type de participation.';
      typeParticipation.style.borderColor = 'red';
      formulaireValide = false;
    } else {
      erreurType.textContent = '';
      typeParticipation.style.borderColor = 'green';
    }

    // ----- Pays -----
    const pays = document.querySelector('#pays');
    const erreurPays = document.querySelector('#erreur-pays');

    if (pays.value === '') {
      erreurPays.textContent = 'Veuillez choisir un pays.';
      pays.style.borderColor = 'red';
      formulaireValide = false;
    } else {
      erreurPays.textContent = '';
      pays.style.borderColor = 'green';
    }

    // ----- Message (minimum 20 caractères) -----
    const message = document.querySelector('#message');
    const erreurMessage = document.querySelector('#erreur-message');

    if (message.value.trim().length < 20) {
      erreurMessage.textContent = 'Le message doit contenir au moins 20 caractères.';
      message.style.borderColor = 'red';
      formulaireValide = false;
    } else {
      erreurMessage.textContent = '';
      message.style.borderColor = 'green';
    }

    // ----- Si tout est valide : on affiche le succès et on réinitialise -----
    if (formulaireValide) {
      const messageSucces = document.querySelector('#message-succes');
      messageSucces.classList.remove('cache');

      formulaire.reset(); // vide tous les champs

      // On enlève les bordures vertes après reset
      const champs = formulaire.querySelectorAll('input, select, textarea');
      champs.forEach(function(champ) {
        champ.style.borderColor = '';
      });

      // On cache le message de succès après 4 secondes
      setTimeout(function() {
        messageSucces.classList.add('cache');
      }, 4000);
    }

  });

}
/* ============================================
   ONGLETS DU PROGRAMME (page programme.html)
   ============================================ */

const ongletsBoutons = document.querySelectorAll('.onglet-btn');
const joursContenu = document.querySelectorAll('.jour-content');

ongletsBoutons.forEach(function(bouton) {

  bouton.addEventListener('click', function() {

    // On récupère le jour correspondant au bouton cliqué (ex: "jour2")
    const jourCible = bouton.getAttribute('data-jour');

    // 1. On enlève "active" de tous les boutons, puis on l'ajoute au bon
    ongletsBoutons.forEach(function(b) {
      b.classList.remove('active');
    });
    bouton.classList.add('active');

    // 2. On cache tous les contenus, puis on affiche seulement le bon
    joursContenu.forEach(function(contenu) {
      contenu.classList.remove('active');
    });
    document.querySelector('#' + jourCible).classList.add('active');

  });

});


/* ============================================
   FILTRAGE DES INTERVENANTS (page intervenants.html)
   ============================================ */

const filtreBoutons = document.querySelectorAll('.filtre-btn');
const cartesIntervenants = document.querySelectorAll('.carte-intervenant');

filtreBoutons.forEach(function(bouton) {

  bouton.addEventListener('click', function() {

    // On récupère la catégorie du bouton cliqué (ex: "ia-tech" ou "tous")
    const categorieChoisie = bouton.getAttribute('data-filtre');

    // On met à jour le bouton actif visuellement
    filtreBoutons.forEach(function(b) {
      b.classList.remove('active');
    });
    bouton.classList.add('active');

    // Pour chaque carte, on regarde si elle correspond au filtre
    cartesIntervenants.forEach(function(carte) {

      const categorieCarte = carte.getAttribute('data-categorie');

      if (categorieChoisie === 'tous' || categorieCarte === categorieChoisie) {
        carte.style.display = 'block'; // on affiche la carte
      } else {
        carte.style.display = 'none'; // on la cache
      }

    });

  });

});
/* ============================================
   ANIMATIONS AU SCROLL (IntersectionObserver)
   ============================================ */

// On sélectionne tous les éléments qu'on veut animer à l'apparition
const elementsAAnimer = document.querySelectorAll(
  '.argument, .carte-intervenant, .carte-thematique, .stat'
);

// L'observateur : il "regarde" si un élément entre dans l'écran
const observateur = new IntersectionObserver(function(entrees) {

  entrees.forEach(function(entree) {

    // isIntersecting = true quand l'élément devient visible à l'écran
    if (entree.isIntersecting) {
      entree.target.classList.add('visible');
    }

  });

}, {
  threshold: 0.2 // se déclenche quand 20% de l'élément est visible
});

// On demande à l'observateur de surveiller chaque élément
elementsAAnimer.forEach(function(element) {
  observateur.observe(element);
});
/* ============================================
   COMPTEURS ANIMÉS (chiffres clés sur l'accueil)
   ============================================ */

const compteurs = document.querySelectorAll('.compteur');

// Fonction qui fait monter un chiffre de 0 jusqu'à sa valeur cible
function animerCompteur(compteur) {

  const cible = parseInt(compteur.getAttribute('data-cible')); // ex: 1200
  let valeurActuelle = 0;
  const increment = cible / 60; // on divise en 60 petites étapes

  const intervalle = setInterval(function() {

    valeurActuelle += increment;

    if (valeurActuelle >= cible) {
      compteur.textContent = cible; // on arrête pile sur la valeur finale
      clearInterval(intervalle);     // on stoppe la boucle
    } else {
      compteur.textContent = Math.floor(valeurActuelle);
    }

  }, 20); // toutes les 20 millisecondes

}

// On réutilise IntersectionObserver pour ne lancer l'animation
// que lorsque les compteurs deviennent visibles à l'écran
const observateurCompteurs = new IntersectionObserver(function(entrees) {

  entrees.forEach(function(entree) {

    if (entree.isIntersecting) {
      animerCompteur(entree.target);
      observateurCompteurs.unobserve(entree.target); // on n'anime qu'une seule fois
    }

  });

}, { threshold: 0.5 });

compteurs.forEach(function(compteur) {
  observateurCompteurs.observe(compteur);
});