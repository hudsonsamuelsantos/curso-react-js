import './App.css';
import CarDetails from './components/CarDetails';

function App() {

  const cars = [
    { id: 1, name: "Gol", brand: "VW", km: 0 },
    { id: 2, name: "Fox", brand: "VW", km: 23230 },
    { id: 3, name: "Uno", brand: "Fiat", km: 0 },
  ]

  return (
    <div className="App">
      <h1>Desafio 5</h1>
      <h2>Carros:</h2>
      {cars.map(car => (
        <CarDetails
          car={car}
        />
      ))}
    </div>
  );
}

export default App;
