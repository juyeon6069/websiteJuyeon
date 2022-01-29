import React, { Component } from "react";
// import { Route, Routes } from 'react-router-dom';

import Template from "./components/Template";
import Banner from "./components/Banner";

// import Home from "./containers/Home";
// import About from "./containers/About";
// import Contact from "./containers/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <Banner></Banner>
        {/* <Routes>
          <Route path="/" element={App}>
          <Route element={Home} />
          <Route path="about" element={About} />
          <Route path="contact" element={Contact} />
          </Route>
        </Routes>
        {this.props.children} */}
        <Template></Template>
      </div>
    );
  }
}

export default App;

