import React, {useEffect, useState} from 'react';
import axios from "../../utils/axios";
import Title from "../../components/Title/Title"
import DeliveryRow from "./DeliveryRow/DeliveryRow";
import ProductList from "../../components/ProductList/ProductList";

const Delivery = () => {
    const [delivery,setDelivery] = useState([])
    useEffect(() => {
        axios('/delivery').then(({data})=>
            setDelivery(data)
        ).catch((err)=>console.log(err))
    }, []);

    return (
        <section className='delivery'>
            <ProductList/>
            <div className="container">
                <Title title='Условия Доставки'/>
                <div className="delivery__content">
                    <div className="delivery__row">
                        {
                            delivery.map((item) => (
                                <div key={item.id} className='delivery__row-item'>
                                    <DeliveryRow item={item}/>
                                </div>
                            ))
                        }
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2924.8114494680676!2d74.5767521!3d42.8557143!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9001ae48a59%3A0x90a5c39db5d06a9d!2z0K3RidC60LXRgNC1INC80LXQtNC90YvQuSDQsdGL0Log0YjQutC-0LvQsCA3NC8xNDg4!5e0!3m2!1sen!2skg!4v1714897931112!5m2!1sen!2skg"
                        width="600" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='delivery__block'>
                    <div className='delivery__block-item'>
                        <div>
                            <h3 className='delivery__block-title'>График работы доставки:</h3>
                            <p className='delivery__block-time'>с 10:00-21:00</p>
                        </div>
                        <div>
                            <h3 className='delivery__block-title'>График работы кафе:</h3>
                            <p className='delivery__block-time'>с 8:00-21:00</p>
                        </div>
                    </div>
                    <div>
                        <h3 className='delivery__block-title'>Минимальный заказ:</h3>
                        <p className='delivery__block-time'>Бесплатная доставка пешим курьером при сумме заказа от 400 ₽
                            Доставка оператором такси от любой суммы заказа - по тарифам
                            перевозчика.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Delivery;