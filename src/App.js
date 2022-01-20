import "./styles.css";
import TopBar from "./Components/TopBar.js";
import SideMenu from "./Components/SideMenu.js";
import MainPage from "./Components/MainPage.js";
import AddPaper from "./Components/AddPaper.js";
import Home from "./Components/Home.js";
import Notes from "./Components/Notes.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/papers">
              <SideMenu />
              <MainPage />
            </Route>
            <Route path="/add">
              <SideMenu />
              <AddPaper />
            </Route>
            <Route path="/notes/:id">
              <SideMenu />
              <Notes />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
