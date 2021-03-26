// import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import Food1Page from "./pages/Food1Page";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import MainContent from "./pages/MainContent";
import axios from "axios";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Switch>
        <Route path="/search" component={SearchPage} />
        <Route path="/food1" component={Food1Page} />
        <Route path="/" component={HomePage} />
      </Switch>
      <MainContent />
    </div>
  );
}

export default App;
