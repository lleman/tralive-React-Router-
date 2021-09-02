import React, { useState } from "react";
import axios from "axios";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Events from "./components/Events";
import Blog from "./components/Blog"
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
