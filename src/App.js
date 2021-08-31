import "./App.scss";
import Header from "./Components/Header";
import { Home } from "./Components/Home";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Work from "./Components/Work";
import Blogs from "./Components/Blogs"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <Home />
                </div>
              );
            }}
          ></Route>
          <Route
            exact
            path="/about"
            render={() => {
              return <About />;
            }}
          ></Route>
          <Route
            exact
            path="/work"
            render={() => {
              return <Work />;
            }}
          ></Route>
          <Route
            exact
            path="/skills"
            render={() => {
              return <Skills />;
            }}
          ></Route>
          <Route
            exact
            path="/blogs"
            render={() => {
              return (
                <div>
                  <Blogs />
                </div>
              );
            }}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
