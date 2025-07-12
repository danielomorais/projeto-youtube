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

  function handleSideMenuVisibility() {
    if (mediaQuery.matches) {
      sideMenu.classList.add('hidden');
    } else {
      sideMenu.classList.remove('hidden');
    }
  };

  handleSideMenuVisibility();

  mediaQuery.addEventListener('change', handleSideMenuVisibility);

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

  const subbutton = document.getElementById('subscribeButton');

  subbutton.addEventListener('click', () => {
    if (subbutton.classList.contains('subscribed')) {
      subbutton.textContent = 'Inscrever-se';
      subbutton.classList.remove('subscribed');
    } else {
      subbutton.textContent = 'Inscrito 🔔';
      subbutton.classList.add('subscribed');
    }
  });

  const menbutton = document.getElementById('member');

  menbutton.addEventListener('click', () => {
    if (menbutton.classList.contains('subscribed')) {
      menbutton.textContent = 'Seja membro';
      menbutton.classList.remove('subscribed');
    } else {
      menbutton.textContent = 'Virou Sócio ⭐';
      menbutton.classList.add('subscribed');
    }
  });
});