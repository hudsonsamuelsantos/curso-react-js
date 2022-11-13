import './App.css';

import FirstComponent from './components/firstComponent';

function App() {

  const name: string = "Hudson"
  const age: number = 23
  const isWorking: boolean = true

  const userGreeting = (name: string): string => {
    return `Olá ${name}!`
  }

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando...</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
    </div>
  );
}

export default App;
