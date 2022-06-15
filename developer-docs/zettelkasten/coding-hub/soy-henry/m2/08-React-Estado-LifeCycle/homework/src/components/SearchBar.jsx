import React, { useRef, useState } from "react";
import styles from './SearchBar.module.css';

export default function SearchBar({onSearch}) {

  const [state, setState] = useState("");
  // const ref = useRef(null);
  

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(state);
      setState("");
      // onSearch(ref.current.value);
      // ref.current.value = "";
    }}>
      <input
        // ref = {ref}
        className={styles.int}
        type="text"
        placeholder="Ciudad..."
        value = {state}
        onChange={(e)=>setState(e.target.value)}
      />
      <input className={styles.btn} type="submit" value="Agregar" />
    </form>
  );
}
