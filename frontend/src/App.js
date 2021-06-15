
import './App.css';
import Home from './components/Home'
import Main from './components/Main'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
      <Route path="/" component={Main}/>

      </Router>
     
    </div>
  );
}

export default App;
