const searchLink = document.querySelector('.search-link'),
searchLinkMobile = document.querySelector('.search-link--mobile'),
 searchBlock = document.querySelector('.header-search'),
searchClose = document.querySelector('.header-search__close'),
 menu = document.querySelector('.menu'),
 burger = document.querySelector('.btn-menu'),
 btnClose = document.querySelector('.menu__close');


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

  searchLinkMobile.addEventListener('click', () => {
    menu.classList.remove('menu--visible');
    });

    searchLinkMobile.addEventListener('click', () => {
  searchBlock.style.display = 'block';
});

    