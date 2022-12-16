import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MovieDetail from "./pages/MovieDetail";
import TvDetail from "./pages/TvDetail";
import TvPage from "./pages/TvPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/tv" component={TvPage}></Route>
        <Route exact path="/movie/:id" component={MovieDetail}></Route>
        <Route exact path="/tv/:id" component={TvDetail}></Route>
      </Switch>
    </Router>
  );
}

export default App;
