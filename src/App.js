import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Fragrances from "./pages/Fragrances";
import Makeup from "./pages/Makeup";
import Skincare from "./pages/Skincare";

import Brands from "./pages/Brands";
import About from "./pages/About";
import Cart from "./pages/Cart";

import Chanel from "./pages/brandspaces/chanel";
import Guerlain from "./pages/brandspaces/guerlain";
import Bioeffect from "./pages/brandspaces/bioeffect";
import Lancome from "./pages/brandspaces/lancome";
import Helena from "./pages/brandspaces/helena";
import Biotherm from "./pages/brandspaces/biotherm";
import Elizabeth from "./pages/brandspaces/elizabeth";

import Payment from "./pages/Payment";
import NavBar from "./components/NavBar";
import SingleProduct from "./pages/SingleProduct";
import Footer from "./components/Footer";
import sanityClient from "./client";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "cosmetics"]{
        title,
        slug,
        defaultProductVariant{
          "imageUrl": images[0].asset->url,
          price
        },
        tags
      }`
      )
      .then((product) => {
        product.map((i) => (i.amount = 0));
        setCartItems(product);
      })
      .catch(console.error);
  }, []);

  function editCartItems(name, modifier) {
    const nextItems = cartItems.map((item) => {
      if (item.slug.current === name) {
        item.amount += modifier;
      }
      return item;
    });
    setCartItems(nextItems);
  }
  let notificationsCount;
  let totalPrice;
  if (cartItems.length > 1) {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.amount;
    notificationsCount = cartItems.reduce(reducer, 0);
    totalPrice = 45 * notificationsCount;
  }

  return (
    <BrowserRouter>
      {console.log(notificationsCount)}
      <NavBar notificationsCount={notificationsCount}></NavBar>
      <Switch>
        <Route path="/" exact>
          <Home editCartItems={editCartItems} />
        </Route>
        <Route path="/fragrances">
          <Fragrances editCartItems={editCartItems} />
        </Route>
        <Route path="/makeup">
          <Makeup editCartItems={editCartItems} />
        </Route>
        <Route path="/skincare">
          <Skincare editCartItems={editCartItems} />
        </Route>
        <Route path="/product/:slug">
          <SingleProduct editCartItems={editCartItems} />
        </Route>
        <Route component={Brands} path="/brands" />
        <Route component={About} path="/about" />
        <Route component={Cart} path="/cart">
          <Cart
            editCartItems={editCartItems}
            cartItems={cartItems}
            notificationsCount={notificationsCount}
          />
        </Route>

        <Route path="/chanel">
          <Chanel editCartItems={editCartItems} />
        </Route>
        <Route path="/guerlain">
          <Guerlain editCartItems={editCartItems} />
        </Route>
        <Route path="/bioeffect">
          <Bioeffect editCartItems={editCartItems} />
        </Route>
        <Route path="/lancome">
          <Lancome editCartItems={editCartItems} />
        </Route>
        <Route path="/helena">
          <Helena editCartItems={editCartItems} />
        </Route>
        <Route path="/biotherm">
          <Biotherm editCartItems={editCartItems} />
        </Route>
        <Route path="/elizabeth">
          <Elizabeth editCartItems={editCartItems} />
        </Route>

        <Route component={Payment} path="/payment" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
