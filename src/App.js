import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Start from "./components/start/Start";
import ShowQuestions from "./components/questions/ShowQuestions";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route extact path="/start/">
            <Start />
          </Route>
          <Route exact path="/quiz/:id" component={ShowQuestions} />
          <Redirect exact from="/" to="/start" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
