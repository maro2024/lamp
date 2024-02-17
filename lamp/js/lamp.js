/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navclose = document.getElementById('nav-close')

      /*=============== MENU SHOW ===============*/
      /*=============== VALIDATE IF CONST EXSITS ===============*/
      if(navToggle){
        navToggle.addEventListener('click', ()=>{
            navMenu.classList.add('show-menu')
        })
      }
/*=============== MENU HIDDEN ===============*/
/*=============== VALIDATE IF CONST EXSITS ===============*/
if(navclose){
    navclose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add("bg-header")
                       : header.classList.remove("bg-header")
}
window.addEventListener('scroll' , scrollHeader)

/*=============== SWIPER POPULAR ===============*/
const popularswiper = new Swiper('.popular__content', {
    // Optional parameters
    slidesPerView:'auto',
    centeredSlides: true,
    loop: true,


    

  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        768:{
            centeredSlides:false,
        }
    }
  
    
  });
/*=============== CHOOSE FAQ ===============*/
const faqItems = document.querySelectorAll('.choose__faq-item')

// 1. Select each item
faqItems.forEach((item) =>{
    const faqHeader = item.querySelector('.choose__faq-header')

    // 2. Select each button click
    faqHeader.addEventListener('click' , () => {

        
     // 7. Select the current faq-open class
     const openItem = document.querySelector( '.faq-open')
     // 5. Call the toggleItem function
     toggleItem(item)
     // 8. Remove the faq-open class from other items
     if(openItem && openItem != item){
         toggleItem(openItem)
     }

    })
});

// 3. Create function to display the content
 const toggleItem = (item) => {
    const faqcontent = item.querySelector('.choose__faq-content')

    // 6. If the same item contains the faq-open class, remove
    if(item.classList.contains('faq-open')){
        faqcontent.removeAttribute('style')
        item.classList.remove('faq-open')
    } else{
// 4. Add max-height to the content and add the faq-open class
    faqcontent.style.height = faqcontent.scrollHeight + 'px'
    item.classList.add('faq-open')
    }

    

 }

/*=============== SHOW SCROLL UP ===============*/ 
/*
const scrollup = document.getElementById('scroll-up');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY || window.pageYOffset;
  scrollup.classList.toggle('show-scroll', scrollPosition >= 350);
});
*/
const getScrollPosition = () => {
    return window.scrollY || window.pageYOffset;
  };
  
  const scrollup = (scrollPosition) => {
    const scrollButton = document.getElementById('scroll-up');
    scrollPosition >= 350 ? scrollButton.classList.add('show-scroll') : scrollButton.classList.remove('show-scroll');
  };
  
  window.addEventListener('scroll', () => {
    const scrollPosition = getScrollPosition();
    scrollup(scrollPosition);
  });
  
  
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrolly = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
      sectionTop= current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

    if(scrolly > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }
  })
}

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Get previously selected theme and icon from localStorage
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Functions to get current theme and icon states
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// Apply previously selected theme and icon if available
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Handle theme toggle on button click
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // Store updated theme and icon states in localStorage
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon()); // Fixed typo in key name
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  Delay: 400,
  
  //reset: true// animation repat
})
sr.reveal(`.home__content , .popular__container , .products__container , .footer__container` )
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.choose__image , .join__bg `, {origin: 'left'})
sr.reveal(`.choose__content`, {origin: 'right'})
sr.reveal(`.features__image`, {origin: 'left'})
sr.reveal(`.features__content`, {origin: 'right'})


