import Setup from './assets/setup.jpg'
import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';

function App() {
  return (
    <div className="App">
      <h1>Seção 3</h1>
      {/*Img na pasta públic pode ser acessada assim */}
      <img src="/code.jpg" alt="Códigos" />
      {/*Img em src tem que ser importada */}
      <img src={Setup} alt="Setup" />

      <ManageData />
      <ListRender />
      <ConditionalRender />
    </div>
  );
}

export default App;
