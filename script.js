function openMenuLang(){
  if(isClose){
    menuLang.classList.remove('closeMenuLang');
    menuLang.classList.add("openMenuLang");
    isClose = false;
  }
}

function closeMenuLang(){
  menuLang.classList.remove('openMenuLang');
  menuLang.classList.add('closeMenuLang');
  setTimeout(() => {
    isClose = true;
  }, 300);
}

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
  const topLineIconBurger = document.querySelector('#iconBurger > div:nth-child(1)');
  const middleLineIconBurger = document.querySelector('#iconBurger > div:nth-child(2)');
  const bottomLineIconBurger = document.querySelector('#iconBurger > div:nth-child(3)');

  if(isClickIconBurger === false){
    background.style.transitionDuration = '0.4s';
    background.style.opacity = 1;
    background.style.visibility = 'visible';
    menuBurger.style.transform = 'translateX(-350px)';
    iconBurger.style.transform = 'translateX(-340px)';
    iconBurger.removeEventListener('mouseleave', animIconBurgerLeave);
    middleLineIconBurger.style.visibility = 'hidden';
    middleLineIconBurger.style.opacity = 0;
    topLineIconBurger.style.transform = 'rotateZ(50deg) translate(6px, 5px)';
    bottomLineIconBurger.style.transform = 'rotateZ(-50deg) translate(6px, -5px)';
    document.body.style.overflowY = 'hidden';
    isClickIconBurger = true;

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

const contentLang = document.getElementById('contentLang');
const menuLang = document.getElementsByClassName('menuLang')[0];
let isClose = true;


// Lock arrow when mouse hover/out in menu
menuLang.addEventListener('mouseenter', () => {
  document.styleSheets[0].cssRules[28].style.transform = 'rotate(0)';
});

menuLang.addEventListener('mouseleave', () => {
  document.styleSheets[0].cssRules[28].style.transform = 'rotate(-90deg)';
});

// Return msg error
searchBar.addEventListener('keydown', (e) => {
  if(e.key === 'Enter'){
    redirectSearchBar();
  }
});

// Disabled msg error if input not empty
searchBar.addEventListener('input', () => {
  if(searchBar.value !== ''){
    searchBar.setCustomValidity('');
  }
});


// Open/close menu lang
contentLang.addEventListener('mouseenter', openMenuLang);
contentLang.addEventListener('mouseleave', closeMenuLang);

// Anim icon menu & open/close menu
iconBurger.addEventListener('mouseenter', animIconBurgerEnter);
iconBurger.addEventListener('mouseleave', animIconBurgerLeave);
iconBurger.addEventListener('click', openCloseMenuBurger);

// Do search
buttonSearch.addEventListener('click', redirectSearchBar);




// Responsive headRight (for iconBurger)
// window.addEventListener('resize', () => {
//   if(isClickIconBurger === false){
//     if(window.innerWidth > 1399.98){
//       headRight.style.padding = '45px 45px';
//     }else if(window.innerWidth < 1399.98){
//       headRight.style.padding = '20px 20px';
//     }
//   }else if(isClickIconBurger === true){
//     if(window.innerWidth > 1399.98){
//       headRight.style.padding = '45px 45px';
//     }else if(window.innerWidth < 1399.98){
//       headRight.style.padding = '45px 45px';
//     }
//   }
// });


