document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('toggleSearch');
  const searchBar = document.getElementById('searchBar');
  const icon = button.querySelector('img');

  const mediaQuery = window.matchMedia('(max-width: 657px)');

  button.addEventListener('click', (e) => {
    e.stopPropagation();

    if (mediaQuery.matches) {
      searchBar.classList.toggle('active');

      if (searchBar.classList.contains('active')) {
        icon.src = './assets/icons/close.svg';
        icon.alt = 'Fechar busca';

        button.classList.remove('search-btn');
        button.classList.add('close-btn');
      } else {
        icon.src = './assets/icons/lupa.svg';
        icon.alt = 'Abrir busca';

        button.classList.remove('close-btn');
        button.classList.add('search-btn');
      }
    }
  });
});
