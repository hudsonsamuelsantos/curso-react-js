import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';
import About from './pages/About';
import Home from './pages/Home';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>

      <BrowserRouter>
      <NavBar />
      <SearchForm />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          {/* Rota Dinâmica */}
          <Route path='/products/:id' element={<Products />}/>
          {/* Nested Route */}
          <Route path='/products/:id/info' element={<Info />}/>
          {/* Search */}
          <Route path='/search' element={<Search />}/>
          {/* Redirect */}
          <Route path='/company' element={<Navigate to='/about'/>}/>
          {/* No match route */}
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
