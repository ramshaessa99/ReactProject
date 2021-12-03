import React, { useState } from 'react'
import { useParams } from 'react-router'; //hook we are using is useParams 
import React, { useEffect, useState } from 'react';
import './Page/pStyle.css'



const ProductDetail = () => {
    const params = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const url = 'https://fakestoreapi.com/products/${params.id}';
        fetch(url).then(res => res.json())
            .then(json => setProducts(json));
    }, [params.id]);

    return (
        <div>
            <div className="pdBox">
                <img src={product.image} alt={product.title} classname="productImage" />
                <h5>{product.name}</h5>
                <div>$ {product.description}</div>
            </div>
        </div>
    );
};

export default ProductDetail;