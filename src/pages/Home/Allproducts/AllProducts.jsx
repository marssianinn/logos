import React, {useContext, useEffect} from 'react';
import ProductsFilter from "../../../components/ProductsFilter/ProductsFilter";
import ProductList from "../../../components/ProductList/ProductList";
import {CustomContext} from "../../../utils/Context";

const AllProducts = () => {
const {getAllProducts}=useContext(CustomContext)
    useEffect(() => {
        getAllProducts()
    }, []);

    return (
        <section className='products'>
            <ProductList/>
            <ProductsFilter title='Холодные закуски'/>
            <ProductsFilter title='Горячие закуски'/>
            <ProductsFilter title='Мясные блюда'/>
        </section>
    );
};

export default AllProducts;