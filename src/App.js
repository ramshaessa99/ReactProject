import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


//Screens 
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Products from './Products/Products';
import Books from './Books/Books';
import ProductDetail from './Products/Productdetail';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/about" component={About} exact></Route>
                    <Route path="/contact" component={Contact} exact></Route>
                    <Route path="/products" component={Products} exact></Route>
                    <Route path="/books" component={Books} exact></Route>
                    <Route path="/Productdetails/:id" component={ProductDetail} exact>
                        <ProductDetail></ProductDetail>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}





export default App;