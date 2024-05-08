import React from 'react';
import ProductsFilter from "../../../components/ProductsFilter/ProductsFilter";
import ProductList from "../../../components/ProductList/ProductList";

const AllProducts = () => {



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