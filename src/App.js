import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { Landing } from "./components/E-Landing/Landing"

function App() {


  return (
    <div className="App">
     <Landing/>
      
    </div>
  );
}

export default App;