import React, { useState } from "react";

export default function SearchBar({onSearch}) {
 const [city, setCity] = useState('');
 
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange = {e => setCityy(e.target.value)}
        vvalue={city}
      />
      <input type="submit" valu e="Agregar" />
    </form>
  );
}
