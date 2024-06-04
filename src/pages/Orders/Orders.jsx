import React, {useContext, useState} from 'react';
import Title from "../../components/Title/Title";
import {useNavigate} from "react-router-dom";
import OrdersSelect from "../../components/OrdersSelect/OrdersSelect";
import OrdersRadio from "../../components/OrdersRadio/OrdersRadio";
import {useForm} from "react-hook-form";
import axios from "../../utils/axios";
import {CustomContext} from "../../utils/Context";

const Orders = () => {

    const {setBasket}=useContext(CustomContext)
    const handleAddOrder = (data)=>{
        const newOrder={
            ...data
        }
        console.log(newOrder)
        axios.post('/orders', newOrder).then(()=>{
            navigate('/')
            reset()
        }).catch((err)=>alert(err.message))
    }

    const navigate = useNavigate()

    const {
        reset,
        handleSubmit,
        register
    }=useForm({mode:'onBlur'})

    const [delivery,setDelivery]=  useState('delivery')
    const [buy,setBuy]=useState('online')
    const [time,setTime]=useState('time1')

    return (
        <div className='orders'>
            <div className="container">
                <div className="orders__content" >
                    <form noValidate onSubmit={handleSubmit(handleAddOrder)}>
                        <button type='button' className='orders__back' onClick={() => navigate('/basket')}>в корзину
                        </button>
                        <Title title='Оформление заказа'/>
                        <div className="orders__contact">
                            <h3 className="orders__contact-title"> 1. Контактная информация</h3>
                            <label htmlFor="" className="orders__contact-label">
                                <input type="text" className="orders__contact-input"
                                       placeholder='Имя' {...register('name')}/>
                                <input type="text" className="orders__contact-input"
                                       placeholder='Телефон' {...register('number')}/>
                            </label>
                        </div>
                        <div className="orders__contact">
                            <h3 className="orders__contact-title">1. Контактная информация</h3>
                            <button type='button' className="orders__contact-btn"
                                    onClick={() => setDelivery('delivery')}>Доставка
                            </button>
                            <button type='button' className="orders__contact-btn"
                                    onClick={() => setDelivery('pick up')}>Самовывоз
                            </button>
                        </div>
                        {
                            delivery === 'delivery' ? <>
                                <h3 className="orders__contact-title">
                                    Адрес доставки
                                </h3>
                                <label htmlFor="" className="orders__contact-label">
                                    <input type="text" className="orders__contact-input"
                                           placeholder='Укажите улицу' {...register('street')}/>
                                    <input type="text" className="orders__contact-input"
                                           placeholder='Номер дома' {...register('home')}/>
                                </label>
                                <label htmlFor="" className="orders__contact-label">
                                    <input type="text" className="orders__contact-input"
                                           placeholder='№ квартиры/офиса' {...register('numberHome')}/>
                                    <input type="text" className="orders__contact-input"
                                           placeholder='Подъезд' {...register('entrance')}/>
                                    <input type="text" className="orders__contact-input"
                                           placeholder='Этаж' {...register('floor')}/>
                                </label>
                                <label htmlFor="" className="orders__contact-label">
                                    <input type="text" className="orders__contact-input"
                                           placeholder='Комментарий' {...register('comment')}/>
                                </label>
                            </> : <>
                                <h3 className="orders__contact-title">
                                    Выберите ресторан
                                </h3>
                                <OrdersSelect/>
                            </>
                        }
                        <div className="orders__contact">
                            <h3 className="orders__contact-title">
                                3. Оплатить
                            </h3>
                            <div className="orders__contact-btns">
                                <button type='button' className='orders__contact-btn'
                                        onClick={() => setBuy('online')}>Оплата онлайн
                                </button>
                                <button type='button' className='orders__contact-btn'
                                        onClick={() => setBuy('card')}>Курьеру картой
                                </button>
                                <button type='button' className='orders__contact-btn'
                                        onClick={() => setBuy('nal')}>Самовывоз
                                </button>
                            </div>
                            {
                                buy === 'online' ?
                                    <input type="text" className="orders__contact-input"
                                           placeholder='online' {...register('online')}/>
                                    : buy === 'card' ?
                                        <input type="text" className="orders__contact-input" placeholder='card number'/>
                                        : <input type="text" className="orders__contact-input"
                                                 placeholder='сдача с' {...register('numberCard')}/>
                            }
                        </div>
                        <div className="orders__contact">
                            <h3 className="orders__contact-title">
                                4. Когда доставить
                            </h3>
                            <div className="orders__contact-btns">
                                <button type='button' className='orders__contact-btn' onClick={() => setTime('time1')}>
                                    В ближайщее время
                                </button>
                                <button className='orders__contact-btn' onClick={() => setTime('time2')}>
                                    Ко времени
                                </button>
                                <input type="number" className="orders__contact-input"
                                       placeholder='Укажите время' {...register('time')}/>
                            </div>
                            {
                                time === 'time1' ?
                                    <input type="number" className="orders__contact-input"
                                           placeholder='Кол-во персон' {...register('person')}/>
                                    : <input type="number" className="orders__contact-input"
                                             placeholder='Кол-во персон' {...register('person')}/>
                            }
                            <h3 className="orders__contact-title">
                                Хотите мы позвоним?
                            </h3>
                            <OrdersRadio/>
                        </div>
                        <div className="orders__contact">
                            <p className="orders__contact-accept">
                                Я согласен на обработку моих перс. данных в соответствии с
                            </p>
                            <button className='orders__contact-btn' type='submit'>
                                Оформить заказ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Orders;