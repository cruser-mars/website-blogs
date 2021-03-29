const searchLink = document.querySelector('.search-link'),
 searchBlock = document.querySelector('.header-search'),
searchClose = document.querySelector('.header-search__close'),
 menu = document.querySelector('.menu'),
 burger = document.querySelector('.btn-menu'),
 btnClose = document.querySelector('.menu__close');
//  searchMenuOpen = document.querySelector('.search-link__close');


searchLink.addEventListener('click', () => {
  searchBlock.style.display = 'block';
});

searchClose.addEventListener('click', () => {
  searchBlock.style.display = 'none';
});

burger.addEventListener('click', () => {
menu.classList.add('menu--visible');
});

btnClose.addEventListener('click', () => {
menu.classList.remove('menu--visible');
});

burger.addEventListener('click', () => {
  menu.classList.add('menu--visible');
  });

  searchLink.addEventListener('click', () => {
    menu.classList.remove('menu--visible');
    });

    searchLink.addEventListener('click', () => {
  searchBlock.style.display = 'block';
});

    