import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from "./Components/Index";
import Header from './Components/Header';
import Footing from "./Components/Footing";
import { Menu } from "./Assets/Data/Menu";

function App() {

  return (

    <>
      <Header title="Projects" items={Menu}/>
      <Router>
      <Route to="/" component={Index}>
        <Index />
      </Route>
      </Router>
      <Footing />
    </>

  );
}

export default App;