import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Screens 
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
                    <Route path="/about" component={About} exact></Route>
                    <Route path="/contact" component={Contact} exact></Route>
                    <Route path="/" component={Products} exact></Route>
                    <Route path="/books" component={Books} exact></Route>
                    <Route path="/Productdetails/:id" component={ProductDetail} exact>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}





export default App;