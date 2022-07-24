import Setup from './assets/setup.jpg'
import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import { useState } from 'react';
import ShowName from './components/ShowName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';

function App() {

  const [name] = useState("Hudson Santos")

  const cars = [
    { id: 1, brand: "Ferrari", km: 0, color: "Vermelha" },
    { id: 2, brand: "KIA", km: 1110, color: "Amarelo" },
    { id: 3, brand: "Aston Martin", km: 30950, color: "Verde" },
  ]

  const [message, setMessage] = useState()

  const handleMessage = msg => { setMessage(msg) }

  const ShowConsoleMessage = () => { console.log("Clicou!") }

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
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
        />
      ))}
      {/* Fragment */}
      <Fragment propFragment="Título 3" />
      {/* Children */}
      <Container>
        <p>Conteúdo do container</p>
      </Container>
      {/* Função nas props */}
      <ExecuteFunction myFunction={ShowConsoleMessage} />
      {/* State lift ou elevação de estado
          Um elemento para exibir o estado e um para alterar
          O estado é elevado para o pai pelo elemento que altera, e o pai passa para o filho que exibe.
      */}
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage} />
    </div>
  );
}

export default App;
