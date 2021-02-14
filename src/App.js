import './App.css';
import NavBar from './components/navBar';
import AxiosList from './components/axiosList';
import InputPost from './components/inputPost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <Switch>
      <Route path= '/' exact component= {AxiosList} />
      <Route path= '/update-list' exact component= {InputPost} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
