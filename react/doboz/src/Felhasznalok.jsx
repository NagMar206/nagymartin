import React from "react";
import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';




const Products = (props) => {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapiserver.reactbd.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className="container-fluid bg-light-gray"> 
            <article className="row justify-content-center ">
                <h1 className="text-center display-4 mt-5 mb-5 bg-light-red">Termékek</h1>
                <div className="row">
                        {Products.map(product => (

                            <div className="col-md-4">
                                <div className=" bg-light-red br3 pa3 ma2 grow bw2 shadow-5" key={product.id}>
                                    <h2 className="text-center">{product.title}</h2>
                                    <p>Régi érték: {product.isNew}</p>
                                    <p>Új érték: {product.price}</p>
                                    <p>Leírás: {product.description}</p>
                                    <p>Kategória: {product.category}</p>
                                    <img src={product.image}></img>
                                    <p>Értékelés: {product.rating}</p>
                                </div>
                            </div>
                            
                        ))}
                </div>
            </article>
        </div>
    );
}

export default Products;