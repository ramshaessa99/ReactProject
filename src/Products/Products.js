import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function Products() {


  const params = useParams();
  const [products, setProducts] = useState([])

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products/${params.id}';
    fetch(url).then(res => res.json())
      .then(json => console.log(json))
  }, [params.id])

  return (
    <div className="App">
      <h1 align="center">React-Product</h1>
      {products.map(product => <div><p>{product.title}</p></div>)} //display product price, product name, product image. Once we click on price price, need to redirect to product detail page.
    </div>                                                         //Product detail will get data from URL. Make product detail page
  );
}

export default Products