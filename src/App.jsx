import React from 'react';
import './App.css';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda de remeras!" />
    </div>
  );
}

export default App;
