import './App.css';
import Challenge from './components/Challenge';
import Events from './components/Events';
import FirstComponent from './components/FirstComponent';
import MyComponent from './components/MyComponent';
import TemplateExpressions from './components/TemplateExpressions';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <MyComponent />
      <TemplateExpressions />
      <Events />
      <h2>Desafio:</h2>
      <Challenge />
    </div>
  );
}

export default App;