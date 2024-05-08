import React from 'react';
import {menuData} from "../../utils/menuData";
import {useNavigate} from "react-router-dom";

const ProductList = () => {
    const navigate = useNavigate()
    return (
        <ul className='products__list'>
            {
                menuData.map((item) => (
                    <li key={item.en} className='products__item'
                        onClick={() => navigate(`/catalog/${item.en}`)}>{item.ru}</li>
                ))
            }
        </ul>
    );
};

export default ProductList;