const searchLink = document.querySelector('.search-link'),
searchClose = document.querySelector('.header-search__close'),
searchLinkMobile = document.querySelector('.search-link--mobile'),
 searchBlock = document.querySelector('.header-search');


searchLink.addEventListener('click', () => {
  searchBlock.style.display = 'block';
});

searchClose.addEventListener('click', () => {
  searchBlock.style.display = 'none';
});

    searchLinkMobile.addEventListener('click', () => {
  searchBlock.style.display = 'block';
});

    