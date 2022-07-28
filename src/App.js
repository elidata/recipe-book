import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home" ;
import Category from './components/Category';
import Pages from './pages/Pages';

function App() {
  return (
    <div className="App">
      <Category />
      <Pages />
    </div>
  );
}

export default App;
