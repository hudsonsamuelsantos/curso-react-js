import './App.css';
import UserDetails from './components/UserDetails';

function App() {

  const users = [
    { id: 1, name: "Hudson", age: 23 },
    { id: 2, name: "Samuel", age: 13 },
    { id: 3, name: "Soares", age: 14 },
    { id: 4, name: "Santos", age: 25 }

  ]

  return (
    <div className="App">
      <h1>Seção 3</h1>
      <h2>Desafio:</h2>
      {users.map(car => (
        <UserDetails
          key={car.id}
          name={car.name}
          age={car.age}
        />
      ))}

    </div>
  );
}

export default App;
