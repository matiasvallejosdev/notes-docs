import React from 'react';


export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
  <div>
    <input type="text" placeholder="city..."/>
    <button onClick={() => onSearch("Algo")}>Agregar</button>
  </div>
  )
};