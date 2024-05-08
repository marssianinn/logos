import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "../../utils/axios";
import ProductList from "../../components/ProductList/ProductList";
import {FiChevronLeft} from "react-icons/fi";
import {BsCart3} from "react-icons/bs";

const Product = () => {
    const navigate = useNavigate()
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
                <div className="product__content">
                    <div className='returnBtn' onClick={()=>navigate(-1)}>
                        <span className='product__svg'>
                            <FiChevronLeft/>
                        </span>
                        Вернуться назад
                    </div>
                    <div className="product__info">
                        <img className='product__img' src={product.image} alt={product.title}/>
                        <div className='product__right'>
                            <h2 className='product__right-title'>{product.title}</h2>
                            <p className='product__right-desc'>{product.description}</p>
                            <div className='product__right-block'>
                                <p>Белки:{product.protein}</p>
                                <p>Жиры:{product.fats}</p>
                                <p>Углеводы:{product.carbohydrates}</p>
                                <p>Ккал:{product.calories}</p>
                                <p>Вес:{product.weight}</p>
                            </div>

                            <button className='products__card-btn'>
                                В корзину
                                <BsCart3 size={20}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default Product;