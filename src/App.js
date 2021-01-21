import './App.css';
import { Route, Switch } from "react-router-dom";

import { Game, QuestionManager } from './views/index'
import NavBar from './components/nav-bar'
function App() {

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Game} />
        <Route path="/question-manager" exact component={QuestionManager} />
      </Switch>
    </div>

  );
}

export default App;