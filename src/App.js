import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Fragrances from "./pages/Fragrances";
import Makeup from "./pages/Makeup";
import Skincare from "./pages/Skincare";
import Brands from "./pages/Brands";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Fragrances} path="/fragrances" />
        <Route component={Makeup} path="/makeup" />
        <Route component={Skincare} path="/skincare" />
        <Route component={Brands} path="/brands" />
        <Route component={About} path="/about" />
        <Route component={Cart} path="/cart" />
        <Route component={Payment} path="/payment" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
