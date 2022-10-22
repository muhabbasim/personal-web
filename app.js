
const burger = document.getElementById('burger');
const nav = document.getElementById('nav-link');
const navLinks = document.querySelectorAll('li');

console.log(navLinks)
// toggle nav
burger.addEventListener('click', burgerBtn);
function burgerBtn(){
  //burger animation
  burger.classList.toggle('toggle');
  // navSlide
  nav.classList.toggle('active-nav');
  if(burger.classList.contains('toggle')){
    document.body.style.overflow = 'auto';
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
    document.body.style.overflowX = 'hidden';
  };
}

// animation links
navLinks.forEach((link, index) => {
  if(link.style.animation){
    link.style.animation = '';
  } else{
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
  }
})

// li event listener

for( var i = 0; i < navLinks.length; i++){
  console.log(navLinks[i]);
  navLinks[i].addEventListener('click', () => {
    console.log('success')
    nav.classList.remove('active-nav');
    document.body.style.overflow = 'auto';
    document.body.style.overflowX = 'hidden';
  });
};








// navLinks.forEach(function(element){
// })
// element.addEventListener('click', removeNav);
// function removeNav() {

//   console.log(12)
//   nav.classList.toggle('unactive-nav');

// }
  



