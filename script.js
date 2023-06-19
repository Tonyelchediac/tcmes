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



///////google translate///////////////////////////////////

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false
  }, 'google_translate_element');
  var languageSelect = document.querySelector('.goog-te-combo');
  languageSelect.options[0].textContent = 'select language';
}