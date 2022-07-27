import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>Formulários no React</h1>
      {/* Criando Form */}
      <MyForm user={{ name: "Hudson", email: "hudson@hudson.com", role: "user" }} />
    </div>
  );
}

export default App;
