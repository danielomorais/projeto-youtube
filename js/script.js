document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('toggleSearch');
  const searchBar = document.getElementById('searchBar');

  button.addEventListener('click', (e) => {
    e.stopPropagation(); // impede que o clique seja capturado pelo document imediatamente
    searchBar.classList.toggle('active');
  });

  // Quando clicar fora do searchBar ou do botão
  document.addEventListener('click', (e) => {
    // se o clique não for no searchBar e nem no botão
    if (!searchBar.contains(e.target) && e.target !== button) {
      searchBar.classList.remove('active');
    }
  });
});
