import logo from './logo.svg';
import './App.css';
import Task from './Task'
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <div id="header"><h1>INTERVIEW TASK</h1></div>

    <BrowserRouter>

    <Task/>
    </BrowserRouter>

    <div class="footer">
  <p>sample footer</p>
</div>
      
    </div>
  );
}

export default App;
