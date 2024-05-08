import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "../../utils/axios";
import ProductList from "../../components/ProductList/ProductList";

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
            <section style={{height:'63vh'}}>
                <ProductList/>
                <h2>Продукт не найден</h2>
            </section>
        )
    }
    return (
        <section className='product'>
            <ProductList/>
            <div className="container">
                {
                    product.title
                }
            </div>
        </section>


    );
};

export default Product;