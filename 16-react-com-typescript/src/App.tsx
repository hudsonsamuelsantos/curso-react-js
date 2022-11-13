import './App.css';

import FirstComponent from './components/firstComponent';
import { SecondComponent } from './components/secondComponent';
import { Destructuring } from './components/destructuring';
import { State } from './components/state';

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
      <SecondComponent name="Segundo" />
      <Destructuring
        title='Primeiro post'
        content='Meu conteúdo'
        commentsQty={10}
        tags={["js", "ts"]}
      />
      <Destructuring
        title='Segundo post'
        content='Meu conteúdo 2'
        commentsQty={5}
        tags={["js", "ts", "python"]}
      />
      <State />
    </div>
  );
}

export default App;
