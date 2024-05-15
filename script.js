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

  if(!isMenuOpened){
    background.style.transitionDuration = '0.4s';
    background.style.opacity = 1;
    background.style.visibility = 'visible';
    menuBurger.style.transform = 'translateX(-350px)';
    iconBurger.style.transform = 'translateX(-340px)';
    iconBurger.style.transitionDelay = "0s";
    iconBurger.style.transitionDuration = "0.8s";
    iconBurger.removeEventListener('mouseleave', animIconBurgerLeave);
    middleLineIconBurger.style.visibility = 'hidden';
    middleLineIconBurger.style.opacity = 0;
    topLineIconBurger.style.transform = 'rotateZ(50deg) translate(6px, 5px)';
    bottomLineIconBurger.style.transform = 'rotateZ(-50deg) translate(6px, -5px)';
    document.body.style.overflowY = 'hidden';
    isMenuOpened = true;
  }else if(isMenuOpened){
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
    isMenuOpened = false;
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
  const defaultPos = Math.round(contentCard.getBoundingClientRect().right);
  let currentPos = Math.round(contentCard.getBoundingClientRect().right);

  // console.log("DEFAULT: " + defaultPos); // Test

  arrowLeft.addEventListener('click', () => {
    if(currentPos > 550){
      arrowRight.style.background = "center/cover url('icon/arr.png')";
      contentCard.style.transform += 'translateX(-250px)';
      currentPos -= 250;
      // console.log("Left: " + currentPos); // Test

      if(currentPos <= 550){
        arrowLeft.style.background = "center/cover url('icon/arrDisabled.png')";
      }
    }
    
  });

  arrowRight.addEventListener('click', () => {
    if(currentPos < defaultPos){
      arrowLeft.style.background = "center/cover url('icon/arr.png')";
      contentCard.style.transform += 'translateX(250px)';
      currentPos += 250;
      // console.log("Right: " + currentPos); // Test

      if(currentPos === defaultPos){
        arrowRight.style.background = "center/cover url('icon/arrDisabled.png')";
      }
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

const background = document.getElementById('backgroundMenu');
const menuBurger = document.getElementById('menuBurger');
const topLineIconBurger = document.querySelector('#iconBurger > div:nth-child(1)');
const middleLineIconBurger = document.querySelector('#iconBurger > div:nth-child(2)');
const bottomLineIconBurger = document.querySelector('#iconBurger > div:nth-child(3)');

const buttonSearch = document.getElementById('buttonSearch');
const searchBar = document.getElementsByName('search')[0];

const iconBurger = document.getElementById('iconBurger');
let isMenuOpened = false;

const contentTabs = document.getElementsByClassName('contentTab');
const contentTab = Array.from(contentTabs);
const mainTabs = document.getElementsByClassName('mainTab');
const mainTab = Array.from(mainTabs);
const contentLang = document.getElementById('contentLang');
const menuLang = document.getElementsByClassName('menuLang')[0];


// Lock arrow when mouse hover/out in menu lang
menuLang.addEventListener('mouseenter', () => {
  document.styleSheets[0].cssRules[30].style.transform = 'rotate(0)'; // lang::after
});

menuLang.addEventListener('mouseleave', () => {
  document.styleSheets[0].cssRules[30].style.transform = 'rotate(-90deg)';
});


// Open/close menu tab
contentTab.forEach((elem, idx) => {
  elem.addEventListener('mouseenter', () => {
    mainTab[idx].style.transitionTimingFunction = 'ease-in-out';
    mainTab[idx].style.transitionDuration = '0.4s';
    mainTab[idx].style.height = `${mainTab[idx].scrollHeight}px`;
  });

  elem.addEventListener('mouseleave', () => {
    mainTab[idx].style.transitionTimingFunction = 'ease-out';
    mainTab[idx].style.transitionDuration = '0.3s';
    mainTab[idx].style.height = '0';
  });
});


// Open/close menu lang
contentLang.addEventListener('mouseenter', () => {
  menuLang.style.height = '120px';
});
contentLang.addEventListener('mouseleave', () => {
  menuLang.style.height = '0px';
});


// Anim icon menu & open/close menu
iconBurger.addEventListener('mouseenter', animIconBurgerEnter);
iconBurger.addEventListener('mouseleave', animIconBurgerLeave);
iconBurger.addEventListener('click', openCloseMenuBurger);


// Do search (button)
buttonSearch.addEventListener('click', redirectSearchBar);


// Do search (input)
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


// Responsive (for menuBurger)
window.addEventListener('resize', () => {
  if(isMenuOpened === true && window.innerWidth > 767.98){
    console.log('> 767.98px');
    openCloseMenuBurger();
  }
});



