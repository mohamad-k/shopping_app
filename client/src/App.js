import React, { Component } from "react";
import {
  BrowserRouter, 
  Route, 
  Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart';
import About from './components/AboutUs'
import Footer from './components/Footer'



import "./index.css";
import InfoProduct from "./components/InfoProduct";


class App extends Component {
  render() {
    return (
     
        <BrowserRouter>
            <div className="App ">
              <Navbar/>
            
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/product/:id" component={InfoProduct}/>
                   <Route path="/aboutus" component={About}/>
                </Switch>
                <Footer />
                <div className="bFooter"/>
                
             </div>
             
       </BrowserRouter>
      
    );
  }
}

export default App;
