(function animCart(){
  const cart = document.getElementById('cart');
  
  cart.addEventListener('mouseenter', () => {
    cart.animate([
      { transform: 'rotateZ(0deg)'},
      { transform: 'rotateZ(10deg)'},
      { transform: 'rotateZ(-10deg)'},
      { transform: 'rotateZ(0deg)'}
    ], {
      duration: 400
    });
  });
})();


function animIconBurgerEnter(){
  const elemsBurger = document.querySelectorAll('#iconBurger > div');
  const elemBurger = Array.from(elemsBurger);

  elemBurger.forEach((item) => {
    item.style.width = '100%';
  });
};
  
function animIconBurgerLeave(){
  const elemsBurger = document.querySelectorAll('#iconBurger > div');
  const elemBurger = Array.from(elemsBurger);

  elemBurger[0].style.width = '85%';
  elemBurger[1].style.width = '60%';
  elemBurger[2].style.width = '40%';
}


function openCloseMenuBurger(){
  const background = document.getElementById('backgroundMenu');
  const menuBurger = document.getElementById('menuBurger');
  const middleLineIconBurger = document.querySelector('#iconBurger > div:nth-child(2)');
  const topLineIconBurger = document.querySelector('#iconBurger > div:nth-child(1)');
  const bottomLineIconBurger = document.querySelector('#iconBurger > div:nth-child(3)');

  if(isClickIconBurger === false){
    background.style.transitionDuration = '0.4s';
    background.style.opacity = 1;
    background.style.visibility = 'visible';
    menuBurger.style.transform = 'translateX(-350px)';
    iconBurger.style.transform = 'translateX(-320px)';
    iconBurger.style.paddingLeft = '5px'; // **
    iconBurger.removeEventListener('mouseleave', animIconBurgerLeave);
    middleLineIconBurger.style.visibility = 'hidden';
    middleLineIconBurger.style.opacity = 0;
    topLineIconBurger.style.transform = 'rotateZ(50deg) translate(6px, 5px)';
    bottomLineIconBurger.style.transform = 'rotateZ(-50deg) translate(6px, -5px)';
    document.body.style.overflowY = 'hidden';
    isClickIconBurger = true;

    setTimeout(() => { // ** Fix bug transition open button
      iconBurger.style.paddingLeft = '0';
    },500);

    if(window.innerWidth < 1399.98){
      headRight.style.padding = '45px 45px';
    }

  }else if(isClickIconBurger === true){
    background.style.opacity = 0;
    background.style.visibility = 'hidden';
    menuBurger.style.transform = 'translateX(0)';
    middleLineIconBurger.style.visibility = 'visible';
    middleLineIconBurger.style.opacity = 1;
    iconBurger.style.transform = 'translateX(0)';
    topLineIconBurger.style.transform = 'rotateZ(0deg) translate(0, 0)';
    bottomLineIconBurger.style.transform = 'rotateZ(0deg) translate(0, 0)';
    document.body.style.overflowY = 'scroll';

    iconBurger.addEventListener('mouseenter', animIconBurgerEnter);
    iconBurger.addEventListener('mouseleave', animIconBurgerLeave);
    isClickIconBurger = false;

    setTimeout(() => {
      if(window.innerWidth < 1399.98){
        headRight.style.padding = '20px 20px';
      }
    },200)
  }
};


function redirectSearchBar(){
  const searchBar = document.getElementsByName('search')[0];
  const charToReplace = ['%', '&'];
  let resultSearch = searchBar.value;

  if(resultSearch !== ''){
    for(let i = 0; i < charToReplace.length; i++){
      resultSearch = resultSearch.replaceAll(charToReplace[i], '');
    }

    location.assign("https://www.pce-instruments.com/deutsch/?action=Query&-query.&query.stichwort=" + resultSearch);
  }else{
    searchBar.setCustomValidity('Bitte füllen Sie dieses Feld aus.');
    searchBar.reportValidity(); // Enable error msg
  }
};


(function moveCarousel(){
  const arrowLeft = document.getElementById('arrLeft');
  const arrowRight = document.getElementById('arrRight');
  const contentCard = document.getElementById('contentCard');

  arrowRight.addEventListener('click', () => {
    let currentValue = contentCard.offsetLeft;

    if(currentValue > -860){
      contentCard.style.left = `${currentValue - 250}px`;
      arrowLeft.style.background = "url('icon/arr.png') center/cover";

      setTimeout(() => {
        currentValue = contentCard.offsetLeft;
        if(currentValue < -860){
          arrowRight.style.background = "url('icon/arrDisabled.png') center/cover";
        }
      }, 500);
    }
  });

  arrowLeft.addEventListener('click', () => {
    let currentValue = contentCard.offsetLeft;

    if(currentValue < 860){
      contentCard.style.left = `${currentValue + 250}px`;
      arrowRight.style.background = "url('icon/arr.png') center/cover";

      setTimeout(() => {
        currentValue = contentCard.offsetLeft;

        if(currentValue > 860){
          arrowLeft.style.background = "url('icon/arrDisabled.png') center/cover";
        }
      }, 500);

    }
  });

})();


(function animLineLink(){
  const lineLinks = document.getElementsByClassName('lineLink');
  const links = document.querySelectorAll('.contentLink > a');
  const lineLink = Array.from(lineLinks);
  const link = Array.from(links);

  link.forEach((item, idx) => {
    item.addEventListener('mouseenter', () => {
      lineLink[idx].style.bottom = '0';
      lineLink[idx].style.height = '100%';
      link[idx].style.color = 'white';
    });
  });

  link.forEach((item, idx) => {
    item.addEventListener('mouseleave', () => {
      lineLink[idx].style.height = '3px';
      lineLink[idx].style.bottom = '3px';
      link[idx].style.color = 'black';
    });
  });

})();


// Against spam robots //
(function decodeMail(){
  const links = document.querySelectorAll('.contentLink > a');
  const contentLinks = document.getElementsByClassName('contentLink');
  const link = Array.from(links);
  const contentLink = Array.from(contentLinks);

  contentLink.forEach((elem, idx) => {
    elem.addEventListener('mouseenter', () => {
      const data = link[idx].getAttribute('data-encode');
      let decrypte = window.atob(data);
      decrypte = decrypte.replace('arobas', '@');
      decrypte = decrypte.replace('point', '.');
      link[idx].setAttribute('href', 'mailto:' + decrypte);
    });
    
    elem.addEventListener('mouseleave', () => {
      link[idx].removeAttribute('href');
    });

  });

})();


///////////////\\\\\\\\\\\\\\\

const headRight = document.getElementsByClassName('headRight')[0];

const buttonSearch = document.getElementById('buttonSearch');
const searchBar = document.getElementsByName('search')[0];

const iconBurger = document.getElementById('iconBurger');
let isClickIconBurger = false;


buttonSearch.addEventListener('click', redirectSearchBar);
searchBar.addEventListener('keydown', (e) => {
  if(e.key === 'Enter'){
    redirectSearchBar();
  }
});

searchBar.addEventListener('input', () => {
  if(searchBar.value !== ''){
    searchBar.setCustomValidity('');
  }
});


iconBurger.addEventListener('mouseenter', animIconBurgerEnter);
iconBurger.addEventListener('mouseleave', animIconBurgerLeave);
iconBurger.addEventListener('click', openCloseMenuBurger);

// Responsive headRight (for iconBurger)
window.addEventListener('resize', () => {
  if(isClickIconBurger === false){
    if(window.innerWidth > 1399.98){
      headRight.style.padding = '45px 45px';
    }else if(window.innerWidth < 1399.98){
      headRight.style.padding = '20px 20px';
    }
  }else if(isClickIconBurger === true){
    if(window.innerWidth > 1399.98){
      headRight.style.padding = '45px 45px';
    }else if(window.innerWidth < 1399.98){
      headRight.style.padding = '45px 45px';
    }
  }
});


// Before logo planet (sobre), after chevron (finir rotation hover)

// Internationalization:
// Choix des langues (Pas de drapeau car un pays n'est pas une langue | Visible et très facile à trouver)
// Attention à l'espace supplémentaire en fonction de certaines language (modifier contenu ou taille du texte)
// Option: (Voir pour mémoriser leur langue par défaut via cookie à leur prochain passage || détection automatique de la langue (demander à user si correct))

// https://weglot.com/fr/9-tips-for-designing-a-multi-language-website/
// Exemple: https://www.flickr.com/

// (Menu lang filter blur)




