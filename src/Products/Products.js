import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products/${params.id}';
    fetch(url).then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  return (
    <div className="productContainer">
      {products.map((product) => (
        <div className="productBox">
        <img src={product.image} alt={product.title} className="productImage" />
        <p className="productTitle">{product.title}</p>
        <span className="productPrice">{product.price}</span>
      </div>                                                     //Product detail will get data from URL. Make product detail page
  ))};
  </div>
  );
      }

export default Products