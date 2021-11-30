import React from 'react'
import { useParams } from 'react-router'; //hook we are using is useParams 
import { Link } from 'react-router-dom'


const ProductDetail = (props) => {
    const params = useParams();
    let content = null

    return <div>Product Information: {JSON.stringify(params)}
        <div className="p-3">
            <h3 className="font-bold text-x1 mb-3">
                <Link to={'/Products/${props.product.id}'}>
                    {props.product.name}
                </Link>
            </h3>

            <div className="font-bold-mb-3">
                $ {props.product.price}
            </div>

            <div className="mb-3">
                {props.product.description}
            </div>

            <Link
                to={'/products/${props.product.id}'}
                className="bg-blue-500 text-white p-2 flex justify-center w-full"
            >View
            </Link>
        </div>
    </div>; };
export default ProductDetail