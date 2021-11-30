import {Component} from 'react';


class Home extends Component {

    constructor(props) {
      super(props);
      this.state = {
        items: [],
        isLoaded: false,
  
      }
    }
  
    componentDidMount() {
      fetch('https://fakestoreapi.com/products/1')
        .then(res => res.json())
        .then(json => console.log(json));
    }
  
  
    render() {
  
      var { isLoaded, items } = this.state;
  
      if (!isLoaded) {
        return <div>Loading...</div>
      }
  
      else {
  
        return (
          <div className="App">
  
            <ul>
              {items.map(item => (
                <li key={item.id}>
                  Title: {item.title} | Description: {item.description}
                </li>
  
  
  
              ))};
  
  
            </ul>
  
          </div>
        );
      }
  
      return (
        <div className="App">
        </div>
      );
    }
  }

  export default Home