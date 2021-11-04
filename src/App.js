import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import User from "./pages/User/User";
import Optional from "./pages/Optional";
import UserMain from "./pages/User/UserMain";
import About from "./pages/User/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:id" element={<Post />} />
      <Route path="/users/:username/*" element={<User />}>
        <Route path="" element={<UserMain />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="/optional/:value" element={<Optional />} />
      <Route path="/optional" element={<Optional />} />
    </Routes>
  );
}

export default App;
