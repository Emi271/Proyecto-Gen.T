import React from "react";

function buscador() {
  return (
    <form id="search-form">
      <input type="text" name="search-term" placeholder="Buscar..." />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default buscador;

const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const searchTerm = searchForm.elements['search-term'].value;
  search(searchTerm);
});

function displayResults(results) {
  const searchResults = document.getElementById('search-results');

  // Limpiar los resultados anteriores
  searchResults.innerHTML = '';

  // Mostrar los nuevos resultados
  if (results.length === 0) {
    searchResults.innerHTML = 'No se encontraron resultados para esta búsqueda.';
  } else {
    const resultList = document.createElement('ul');

    for (const result of results) {
      const listItem = document.createElement('li');
      listItem.textContent = result.title;
      resultList.appendChild(listItem);
    }

    searchResults.appendChild(resultList);
  }
}
