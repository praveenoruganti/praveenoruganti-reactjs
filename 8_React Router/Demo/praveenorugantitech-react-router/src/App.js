import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
