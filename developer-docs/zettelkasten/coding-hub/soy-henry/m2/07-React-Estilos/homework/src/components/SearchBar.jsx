import React from 'react';
//importo estilos
import estilos from './search.module.css'
export default function SearchBar(props) {
  // acá va tu código
  return ( 
    <div className= {estilos.contenedor}>
      <input type="text" placeholder="city..." />
      <button onClick={props.onSearch} className={estilos.btn}>Search</button>
    </div>
    )
};