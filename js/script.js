document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('toggleSearch');
  const searchBar = document.getElementById('searchBar');
  const icon = button.querySelector('img');

  const mediaQuery = window.matchMedia('(max-width: 657px)');

  function closeSearchBar() {
    searchBar.classList.remove('active');
    icon.src = './assets/icons/lupa.svg';
    icon.alt = 'Abrir busca';
    button.classList.remove('close-btn');
    button.classList.add('search-btn');
  }

  function openSearchBar() {
    searchBar.classList.add('active');
    icon.src = './assets/icons/close.svg';
    icon.alt = 'Fechar busca';
    button.classList.remove('search-btn');
    button.classList.add('close-btn');
  }

  button.addEventListener('click', (e) => {
    e.stopPropagation();

    if (mediaQuery.matches) {
      if (searchBar.classList.contains('active')) {
        closeSearchBar();
      } else {
        openSearchBar();
      }
    }
  });

  searchBar.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  document.addEventListener('click', (e) => {
    if (mediaQuery.matches && searchBar.classList.contains('active')) {

      if (!button.contains(e.target) && !searchBar.contains(e.target)) {
        closeSearchBar();
      }
    }
  });

  const toggleButton = document.querySelector('.left > img');
  const sideMenu = document.querySelector('nav');

  toggleButton.addEventListener('click', () => {
    sideMenu.classList.toggle('hidden');
  });

  const items = document.querySelectorAll('.item');

  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('selected')); 
      item.classList.add('selected'); 
    });
  });
});