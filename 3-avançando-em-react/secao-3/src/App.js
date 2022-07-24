import Setup from './assets/setup.jpg'
import './App.css';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>Seção 3</h1>
      {/*Img na pasta públic pode ser acessada assim */}
      <img src="/code.jpg" alt="Códigos" />
      {/*Img em src tem que ser importada */}
      <img src={Setup} alt="Setup" />

      <ManageData />
    </div>
  );
}

export default App;
