import Setup from './assets/setup.jpg'
import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import { useState } from 'react';
import ShowName from './components/ShowName';
import CarDetails from './components/CarDetails';

function App() {

  const [name] = useState("Hudson Santos")

  return (
    <div className="App">
      <h1>Seção 3</h1>
      {/*Img na pasta públic pode ser acessada assim */}
      <img src="/code.jpg" alt="Códigos" />
      {/*Img em src tem que ser importada */}
      <img src={Setup} alt="Setup" />

      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* Props */}
      <ShowName name={name} />
      {/* Destructuring props */}
      <CarDetails brand="VW" km={10000} color="Azul" />
    </div>
  );
}

export default App;
