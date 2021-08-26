import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Route path="/" exact component = {Home}/>
      <Route path="/about" exact component = {About}/>
    </Router>
  );
}

export default App;
