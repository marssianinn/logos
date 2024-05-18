import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {CustomContext} from "../../utils/Context";

const BasketTotal = () => {
    const navigate = useNavigate()
    const {basket}=useContext(CustomContext)
    return (
        <div className='basketTotal'>
            <h2>Итоговая цена:{basket.reduce((acc, rec) => {
                return acc += rec.count * rec.price
            }, 0)}</h2>
            <button onClick={()=>navigate('/orders')} className='basketTotal__create'>
                оформить заказ
            </button>
        </div>
    );
};

export default BasketTotal;