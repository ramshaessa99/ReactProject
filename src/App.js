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


function App() {
    const user = useSelector(selectUser);
    return (
        
        <div className="App">
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

    );}
    
    return (
    <div>{user ? <Logout /> : <Login />}</div>
    );
      

  
export default App;