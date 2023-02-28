import React, { useState } from "react";
import { data } from "../assets/db/data";
import { Form, FormControl, Button } from "react-bootstrap";

function Buscador() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    const results = data.filter((item) => {
      const title = item.title ? item.title.toLowerCase() : '';
      const description = item.description ? item.description.toLowerCase() : '';
      return (
        title.includes(searchTerm.toLowerCase()) ||
        description.includes(searchTerm.toLowerCase())
      );
    });
    
    setSearchResults(results);
  };

  return (
    <>
      <Form onSubmit={handleSearch} id="search-form" className="barra">
        <FormControl
          type="text"
          name="search-term"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar..."
        />
        <br></br><br></br>
        <Button variant="primary" type="submit">
          Buscar productos
        </Button>
      </Form>
      <div id="search-results">
        {searchResults.length === 0 ? (
          <p>No se encontraron resultados para esta búsqueda.</p>
        ) : (
          <ul>
            {searchResults.map((result) => (
             <li key={result.id}>
             <img src={result.image} alt={result.name} className="card-item"/>
             <h3>{result.name}</h3>
           </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Buscador;

