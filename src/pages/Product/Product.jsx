import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "../../utils/axios";

const Product = () => {
    const [product,setProduct] = useState({})
    const {id}=useParams()
    useEffect(() => {
        axios(`/products/${id}`)
            .then(({data})=>setProduct(data))
            .catch((err)=>console.log('Ошибка при получении данных!'))
    }, []);

    if(JSON.stringify(product)==='{}'){
        return (
            <h2>Продукт не найден</h2>
        )
    }
    return (
        <section className='product'>
            <div className="container">
                {
                    product.title
                }
            </div>
        </section>


    );
};

export default Product;