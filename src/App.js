import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Shop} path="/shop" />
        <Route component={About} path="/about" />
        <Route component={Cart} path="/cart" />
        <Route component={Payment} path="/payment" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
