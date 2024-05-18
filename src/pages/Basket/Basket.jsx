import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import Title from "../../components/Title/Title";
import {CustomContext} from "../../utils/Context";
import ProductList from "../../components/ProductList/ProductList";
import BasketTotal from "../../components/BasketTotal/BasketTotal";

const Basket = () => {
    const {basket,plusOneBasket,minusOneBasket,delBasket}=useContext(CustomContext)
    return (
        <>
            <ProductList/>
            <section className='basket'>

                <div className="container">
                    <Link to='/catalog'>
                        к выбору блюда
                    </Link>
                    <div className="basket__top">
                        <Title title='Корзина'></Title>
                        <p className='basket__count'>(В корзине {basket.length} товара)</p>
                    </div>
                    <ul className='basket__list'>
                        {basket.map((item) => (
                            <li key={item.id} className='basket__item'>{item.title}

                                <div className="basket__item-right">
                                    <div className='basket__item-count'>
                                        <button onClick={() => minusOneBasket(item.id)} type='button'
                                                className='basket__item-minus'>-
                                        </button>
                                        <span className='basket__item-count-num'>{item.count}</span>
                                        <button onClick={() => plusOneBasket(item.id)} type='button'
                                                className='basket__item-plus'>+
                                        </button>
                                    </div>

                                    <p className='basket__item-price'>{item.price * item.count}</p>
                                    <button type='button' onClick={() => delBasket(item.id)}
                                            className='basket__item-del'>X
                                    </button>
                                </div>
                            </li>


                        ))}
                    </ul>

                </div>
                <BasketTotal/>
            </section>
        </>

    );
};

export default Basket;