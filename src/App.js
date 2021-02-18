import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/home/Home";
import NewStory from "./pages/new-story/NewStory";
import Topics from "./pages/topics/Topics";
import Read from "./pages/read/Read"
import Search from "./pages/search/Search"
import Stats from "./pages/stats"
import Stories from "./pages/stories"
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
import LoginRegister from "./pages/LoginRegister"
const routes = [
  { path: "/", component: Home },
  { path: "/new-story", component: NewStory },
  { path: "/topics", component: Topics },
  { path: "/read/:id", component: Read },
  { path: "/search", component: Search },
  { path: "/stats", component: Stats },
  { path: "/stories", component: Stories },
  { path:"/register", component:Register},
  { path:"/login", component:Login},
  {path:"/login/register", component:LoginRegister}

]

function App() {

  return (
    <Router>
      <NavBar />
      {
        routes.map(({ path, component }) =>
          <Route exact path={path} component={component} />
        )
      }
    </Router>
  );
}

export default App;
