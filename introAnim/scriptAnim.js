if(sessionStorage.getItem('animIntro') === null){
  sessionStorage.setItem('animIntro', 'active');
  animIntro();
}

// Create/remove animIntro with cookie
function animIntro(){
  const background = document.createElement('div');
  const logo = document.createElement('div');

  background.id = 'backgroundEnter';
  logo.id = 'logo';
  document.body.prepend(background);
  background.prepend(logo);

  window.addEventListener('scroll', disabledScroll);

  setTimeout(() => {
    background.style.opacity = 0;
    background.style.visibility = 'hidden';
    background.style.transitionDuration = '1s';
    logo.style.opacity = 0;
    logo.style.visibility = 'hidden';
    logo.style.transitionDuration = '1s';
  }, 1400);

  setTimeout(() => {
    window.removeEventListener('scroll', disabledScroll);
    background.remove();
  }, 2200);

};

function disabledScroll(){
  window.scrollTo(0,0);
}


// console.log(sessionStorage.getItem('animIntro'));



