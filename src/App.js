import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home" ;
import Category from './components/Category';
import Search from './components/Search';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
