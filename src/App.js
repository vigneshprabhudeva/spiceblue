import logo from './logo.svg';
import './App.css';
import Task from './Task'
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";


function App() {
  return (
    <div className="App">

    <BrowserRouter>

    <Task/>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
