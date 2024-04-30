import React from 'react';
import ProductsFilter from "../../../components/ProductsFilter/ProductsFilter";
import {menuData} from "../../../utils/menuData";
import {useNavigate} from "react-router-dom";

const AllProducts = () => {
    const navigate = useNavigate()


    return (
        <section className='products'>
            <ul className='products__list'>
                {
                    menuData.map((item)=> (
                        <li key={item.en} className='products__item' onClick={()=>navigate(`/catalog/${item.en}`)}>{item.ru}</li>
                    ))
                }
            </ul>
            <ProductsFilter title='Холодные закуски'/>
            <ProductsFilter title='Горячие закуски'/>
            <ProductsFilter title='Мясные блюда'/>
        </section>
    );
};

export default AllProducts;