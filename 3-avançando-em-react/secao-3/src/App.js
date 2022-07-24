import Setup from './assets/setup.jpg'
import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import { useState } from 'react';
import ShowName from './components/ShowName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';

function App() {

  const [name] = useState("Hudson Santos")

  const cars = [
    { id: 1, brand: "Ferrari", km: 0, color: "Vermelha" },
    { id: 1, brand: "KIA", km: 1110, color: "Amarelo" },
    { id: 1, brand: "Aston Martin", km: 30950, color: "Verde" },
  ]

  return (
    <div className="App">
      <h1>Seção 3</h1>
      {/* Img na pasta públic pode ser acessada assim */}
      <img src="/code.jpg" alt="Códigos" />
      {/* Img em src tem que ser importada */}
      <img src={Setup} alt="Setup" />

      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* Props */}
      <ShowName name={name} />
      {/* Destructuring props */}
      <CarDetails brand="VW" km={10000} color="Azul" />
      {/* Reaproveitando componentes */}
      <CarDetails brand="Fiat" km={0} color="Branco" />

      <CarDetails brand="Ford" km={1000} color="Amarelo" />
      {/* Reaproveitamento feito com loop em array */}
      {cars.map(car => (
        <CarDetails
          brand={car.brand}
          km={car.km}
          color={car.color}
        />
      ))}
      {/* Fragment */}
      <Fragment propFragment="Título 3" />
    </div>
  );
}

export default App;
