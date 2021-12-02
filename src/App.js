import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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


function App() {
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
                </Switch>
            </Router>
        </div>
    );}
export default App;