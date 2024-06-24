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

  arrowLeft.addEventListener('click', () => {
    if(currentPos > 550){
      arrowRight.style.background = "center/cover url('icon/arr.png')";
      contentCard.style.transform += 'translateX(-250px)';
      currentPos -= 250;

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
  const link = Array.from(links);

  link.forEach(elem => {
    elem.addEventListener('mouseenter', (event) => {
      event.preventDefault();

      const data = elem.getAttribute('data-encode');
      let decrypte = window.atob(data);
      decrypte = decrypte.replace('arobas', '@');
      decrypte = decrypte.replace('point', '.');
      elem.setAttribute('href', 'mailto:' + decrypte);
      event.target.href = `mailto:${decrypte}`;
    });

    elem.addEventListener('mouseleave', () => {
      elem.removeAttribute('href');
    });

  });

})();


function displayCheckLang(event){
  const boxIsNotChecked = event.type === 'click' ? !event.target.previousElementSibling.classList.contains('checked') : false;
  const boxChecks = document.getElementsByClassName('boxCheck');
  const boxCheck = Array.from(boxChecks);
  const mainLang = document.getElementById('mainLang');
  
  // Check selected language
  if(boxIsNotChecked){
    boxCheck.forEach(elem => {
      elem.classList.remove('checked');
    });
  
    event.target.previousElementSibling.classList.add('checked');

    // Displays the selected language
    mainLang.textContent = event.target.textContent;
  }

  
  // Detect user's lang
  if(sessionStorage.getItem('user') !== 'true'){
    
    selectLang.forEach(elemLang => {
      if(userLang === elemLang.id){
        boxCheck.forEach(box => {
          box.classList.remove('checked');
        });
  
        elemLang.previousElementSibling.classList.add('checked');
        mainLang.textContent = elemLang.textContent;
      }
    });

  }


}


async function translate(event){
  const boxIsNotChecked = event.type === 'click' ? !event.target.previousElementSibling.classList.contains('checked') : false;
  const sessionNotStored = event.type === 'DOMContentLoaded' ? sessionStorage.getItem('user') !== 'true' : false;
  const lang = document.querySelector('[lang]');
  let response;
  let jsonFile;
  const elemHeader = document.querySelectorAll('[data-trans-main]');
  const elemTab = document.querySelectorAll('[data-trans-tab]');
  const elemBanner = document.querySelector('[data-trans-ban]');
  const elemMess = document.querySelectorAll('[data-trans-mess]');
  const elemMess2 = document.querySelectorAll('[data-trans-mess2]');
  const elemBranche = document.querySelectorAll('[data-trans-branche]');
  const elemUmwelt = document.querySelectorAll('[data-trans-umwelt]');
  const elemDienst = document.querySelectorAll('[data-trans-dienst]');
  const elemPos = document.querySelectorAll('[data-trans-position]');
  const elemEmpfo = document.querySelectorAll('[data-trans-empfo]');
  const elemFoo = document.querySelectorAll('[data-trans-foo]');
  const headMiddle = document.querySelector('.headMiddle');


  // Click (if box not checked) or detect user's lang
  if(boxIsNotChecked || sessionNotStored){

    if(event.target.id === 'de'){
      location.reload();
    }else if(event.target.id === 'fr' || userLang === 'fr' && sessionNotStored){
      response = await fetch("lang/fr.json");
      jsonFile = await response.json();
      lang.setAttribute('lang', 'fr');

      headMiddle.style.margin = '150px 10%';
    }else if(event.target.id === 'en' || userLang === 'en' && sessionNotStored){
      response = await fetch("lang/en.json");
      jsonFile = await response.json();
      lang.setAttribute('lang', 'en');

      headMiddle.style.margin = '80px 10% 150px 10%';
    }

    if(event.target.id === 'fr' || event.target.id === 'en' || sessionNotStored){
      elemHeader.forEach(elem => {
        elem.textContent = jsonFile.header.main[elem.getAttribute('data-trans-main')];
      });
  
      elemTab.forEach(elem => {
        elem.textContent = jsonFile.header.tabs[elem.getAttribute('data-trans-tab')];
      });
  
      elemBanner.textContent = jsonFile.header.banner['h1'];
    
      elemMess.forEach(elem => {
        elem.textContent = jsonFile.body.messtechnik[elem.getAttribute('data-trans-mess')];
      });

      elemMess2.forEach(elem =>{
        elem.textContent = jsonFile.body.messtechnik2[elem.getAttribute('data-trans-mess2')];
      });

      elemBranche.forEach(elem => {
        elem.textContent = jsonFile.body.branche[elem.getAttribute('data-trans-branche')];
      });

      elemUmwelt.forEach(elem => {
        elem.textContent = jsonFile.body.umweltdaten[elem.getAttribute('data-trans-umwelt')];
      });

      elemDienst.forEach(elem => {
        elem.textContent = jsonFile.body.dienst[elem.getAttribute('data-trans-dienst')];
      });

      elemPos.forEach(elem => {
        elem.textContent = jsonFile.body.position[elem.getAttribute('data-trans-position')];
      });

      elemEmpfo.forEach(elem => {
        elem.textContent = jsonFile.body.empfohlene[elem.getAttribute('data-trans-empfo')];
      });

      elemFoo.forEach(elem => {
        elem.textContent = jsonFile.footer[elem.getAttribute('data-trans-foo')];
      }); 
    
    }

    sessionStorage.setItem('user', 'true');

  }
  
}


///////////////\\\\\\\\\\\\\\\

const iconBurger = document.getElementById('iconBurger');
let isMenuOpened = false;

const contentTabs = document.getElementsByClassName('contentTab');
const contentTab = Array.from(contentTabs);
const contentLang = document.getElementById('contentLang');
const menuLang = document.getElementsByClassName('menuLang')[0];
const getLocalLang = window.navigator.language;
const userLang = getLocalLang.split('-')[0];
const selectLang = document.querySelectorAll('#fr, #en');

const buttonSearch = document.getElementById('buttonSearch');
const searchBar = document.getElementsByName('search')[0];

const elemDate = document.getElementById('date');
const currentYear = new Date().getFullYear();


// Open/close menu tab
contentTab.forEach((elem, idx) => {
  const mainTabs = document.getElementsByClassName('mainTab');
  const mainTab = Array.from(mainTabs);

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
  menuLang.style.height = '125px';
});
contentLang.addEventListener('mouseleave', () => {
  menuLang.style.height = '0px';
});


// Lock arrow when mouse hover/out in menu lang
menuLang.addEventListener('mouseenter', () => {
  document.styleSheets[0].cssRules[30].style.transform = 'rotate(0)'; // lang::after  
});

menuLang.addEventListener('mouseleave', () => {
  document.styleSheets[0].cssRules[30].style.transform = 'rotate(-90deg)';
});


// Responsive (for menuBurger)
window.addEventListener('resize', () => {
  if(isMenuOpened === true && window.innerWidth > 767.98){
    openCloseMenuBurger();
  }
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


// Add current date footer (year)
elemDate.textContent = currentYear;


// Internationalization
document.querySelectorAll('.menuLang p').forEach(p => {
  p.addEventListener('click', translate);
  p.addEventListener('click', displayCheckLang);
});


// Detect user's lang
document.addEventListener('DOMContentLoaded', displayCheckLang);
document.addEventListener('DOMContentLoaded', translate);
