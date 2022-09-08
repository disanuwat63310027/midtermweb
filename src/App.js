import logo from "./logo.svg";
import "./App.css";
import Content from "./component/Content";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";
import Dashboard from "./component/Dashboard";
import Report from "./component/Report";
import Contact from "./component/Contact";
import Port from "./component/Port";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route component={Content} path="/" exact />
          <Route component={Dashboard} path="/dashboard" />
          <Route component={Report} path="/report" />
          <Route component={Contact} path="/contact" />
          <Route component={Port} path="/port" />
        </Switch>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
