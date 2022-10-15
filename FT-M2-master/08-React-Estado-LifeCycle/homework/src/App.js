import React from 'react';
import './App.css';
import Nav from '.components/Nav'
import Cards from '.components/Cards'



export default function App() {
  const [cities, setCities] = React.useState();

  const ciudadEjemplo = {
    min: 32,
    max: 35,
    img: "03n",
    id: 2172797,
    wind: 3.6,
    temp: 300.15,
    name: "Cairns",
    weather: "Clouds",
    clouds: 40,
    latitud: -16.92,
    longitud: 145.77
  }


  function onSearch(ciudad){
    setCities(oldCities => [...oldCities, ciudadEjemplo]);
  }

  return (
    <div className="App">
      <Nav />
      <Cards />


    </div>
  );
}
