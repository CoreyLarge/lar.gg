import logo from './logo.svg';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import {Home} from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <Route path="" component={Home}/>
    </BrowserRouter>
  );
}

export default App;
