import './App.css';

import FirstComponent from './components/firstComponent';
import { SecondComponent } from './components/secondComponent';
import { Category, Destructuring } from './components/destructuring';
import { State } from './components/state';
import { createContext } from 'react';
import { Context } from './components/context';

interface UserAppContext {
  user: string
  age: number
  isAdmin: boolean
}

type colors = "vermelho" | "azul" | "verde"

export const AppContext = createContext<UserAppContext | null>(null)

function App() {

  const contextValue: UserAppContext = {
    user: "Hudson",
    age: 23,
    isAdmin: true,
  }

  const name: string = "Hudson"
  const age: number = 23
  const isWorking: boolean = true

  const selectColor = (color: colors): string => {
    return `A cor selecionada é ${color}`
  }

  const userGreeting = (name: string): string => {
    return `Olá ${name}!`
  }

  return (
    <AppContext.Provider value={contextValue}>
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
          category={Category.JS}
        />
        <Destructuring
          title='Segundo post'
          content='Meu conteúdo 2'
          commentsQty={5}
          tags={["js", "ts", "python"]}
          category={Category.P}
        />
        <State />
        <span>{selectColor('azul')}</span>
      </div>
      <Context />
    </AppContext.Provider>
  );
}

export default App;
