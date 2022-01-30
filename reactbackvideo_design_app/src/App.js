import "./App.css";
import NavBar from "./Components/Navbar/Navbar";

import { BrowserRouter as Router, Switch, Route,Routes } from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { About } from "./Components/Pages/About";
import { Blog } from "./Components/Pages/Blog";
import { Contact } from "./Components/Pages/Contact";
import Section from "./Components/Section/Section";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Section/>

        <div className="pages">
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;