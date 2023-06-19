const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuItems = menu.querySelectorAll('li');

let isMenuOpen = false;

burger.addEventListener('click', () => {
  if (!isMenuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
});

function openMenu() {
  menu.classList.add('open');
  document.body.classList.add('menu-open');
  isMenuOpen = true;
}

function closeMenu() {
  menu.classList.remove('open');
  document.body.classList.remove('menu-open');
  isMenuOpen = false;
}

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    closeMenu();
  });
});

////google translate/////////////////////////////////////////////

  function googleTranslateElementInit() {
    new google.translate.TranslateElement({ 
      pageLanguage: 'en',    // Specify the default language of your website
      layout: google.translate.TranslateElement.InlineLayout.HOTIZONTAL
    }, 'google_translate_element');
  }