import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15

  const redTitle = false

  const [name] = useState("Hudson")

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Parágrafo do App.js</p>
      {/* Sintaxe de estilização Inline */}
      <p style={{ color: "yellow", padding: "10px", borderTop: "solid 4px red" }}>
        Parágrafo estilizado com CSS inline
      </p>
      {/* CSS Dinâmico */}
      <h2 style={n > 10 ? { color: "green" } : { color: "yellow" }}>CSS Dinâmico</h2>
      <h2 style={n < 10 ? { color: "green" } : { color: "yellow" }}>CSS Dinâmico</h2>
      <h2 style={name === "Hudson" ? { color: "red", backgroundColor: "black" } : null}>Teste nome</h2>
      {/* Classe dinâmica, uma boa abordagem */}
      <h2 className={redTitle ? "red-title" : "title"}>Título com classe dinâmica</h2>
      {/* CSS Modules, abordagem mais "profissional" com CSS scoped que não "vaza" para outros componentes */}
      <Title />
      <p>Testando</p>
    </div>
  );
}

export default App;
