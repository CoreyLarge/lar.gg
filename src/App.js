import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import {Home} from "./components/home";
import {Contact} from "./components/contact";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/contact" exact component={Contact}/>
    </BrowserRouter>
  );
}

export default App;
