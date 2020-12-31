import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import NewYear from './components/NewYear'

function App() {
  return (
    <div className="App">
      <Router basename="new-year-2021">
        <Route path="/" component = {NewYear} ></Route>
      </Router>
    </div>
  );
}

export default App;
