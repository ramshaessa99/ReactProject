import React from "react";

 class ProductsClass extends React.Component {
  constructor(props) { //initial method (first method we call is constuctor. Constuctor is always called first)
    super(props); //syntax
    this.state = { products: [] }; //initialize value of state. Telling the state that this is initial value.

  }

  componentDidMount() {
    //api call
    this.getProductData()
  }

  getProductData() {
    //api call
    fetch('https://fakestoreapi.com/products').then(resp => resp.json())
      .then(resp => this.setState({ products: resp })) //Updating the initial value to an updated value (only product data is being updated)
  }

  //Make different functions. For instance, make function called function upda
  render() {
    return (
      <div>
        <h1 align='center'>React App</h1>
        {this.state.products.map(product => <div key={product.id}>{product.id}.{product.title}</div>)}
      </div>
    );
  }
}

export default ProductsClass