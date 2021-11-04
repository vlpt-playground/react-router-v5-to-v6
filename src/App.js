import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import User from "./pages/User/User";
import Opitonal from "./pages/Optional";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/posts/:id">
        <Post />
      </Route>
      <Route path="/users/:username">
        <User />
      </Route>
      <Route path="/optional/:value?">
        <Opitonal />
      </Route>
    </Switch>
  );
}

export default App;
