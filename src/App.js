import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react';

//Screens 
import About from './About/About';
import Contact from './Page/Contact/Contact';
import Products from './Page/Products/Products';
import Books from '.Page//Books/Books';
import ProductDetail from './Page/Products/Productdetail';
import ContactSignup from './Page/Contact/ContactSignup';
import ContactSuccess from './Page/Contact/ContactSuccess';
import useContact from './Page/Contact/useContact';
import validateInfo from './Page/Contact/validateInfo';
import { useSelector } from 'react-redux';
import { selectUser } from './Page/features/userSlice';
import Main from './ShoppingCart/Main';
import Basket from './ShoppingCart/Basket';
import Header from './ShoppingCart/Header';
import data from './ShoppingCart/data';
import Header from './ShoppingCart/Header';
import Main from './ShoppingCart/Main';
import Basket from './ShoppingCart/Basket';
import { useState } from 'react';

function App() {
    const user = useSelector(selectUser);
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id != product.id));

        } else {
            setCartItems(
                cartItems.map((X) =>
                    X.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };
    return (

        <div className="App">
            <Header></Header>
            <div className="row">
                <Main onAdd={onAdd} products={products}></Main>
                <Basket onAdd={onAdd}
                    onRemove={onRemove}
                    cartItems={cartItems}></Basket>
            </div>
            <Router>
                <Switch>
                    <Route path="./Page/about" component={About} exact></Route>
                    <Route path="./Page/contact" component={Contact} exact></Route>
                    <Route path="/" component={Products} exact></Route>
                    <Route path="./Page/books" component={Books} exact></Route>
                    <Route path="./Page/Productdetails/:id" component={ProductDetail} exact>
                    </Route>
                    <Route path="./Page/ContactSignup/:id" component={ContactSignup} exact>
                    </Route>
                    <Route path="./Page/ContactSuccess/:id" component={ContactSuccess} exact>
                    </Route>
                    <Route path="./Page/useContact/:id" component={useContact} exact>
                    </Route>
                    <Route path="./Page/validateInfo/:id" component={validateInfo} exact>
                    </Route>
                    <Route path="./Page/Login/:id" component={useContact} exact>
                    </Route>
                </Switch>
            </Router>
        </div>

    );
}

return (
    <div>{user ? <Logout /> : <Login />}</div>
);
export default App;