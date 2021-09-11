import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from "./Components/Index";
import Header from './Components/Header';
import Footer from "./Components/Footer";
import { Build } from "./Assets/Styled";
import { Menu } from "./Assets/Data/Menu";

function App() {

  return (

    <Build>
      <Header title="Projects" items={Menu}/>
      <Router>
      <Route to="/" component={Index}>
        <Index />
      </Route>
      </Router>
      <Footer />
    </Build>

  );
}

export default App;