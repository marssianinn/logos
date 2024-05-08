import React, {useEffect, useState} from 'react';
import Title from "../../components/Title/Title";
import axios from "../../utils/axios";
import Map from "../Home/Map/Map";
import ProductList from "../../components/ProductList/ProductList";

const Sales = () => {
    const [sales,setSales] = useState([])
    useEffect(() => {
        axios('/sales')
            .then(({data})=>setSales(data))
            .catch((err)=>console.log(err))
    }, []);
    return (
        <>
            <section className='sales'>
                <ProductList/>
            <div className="container">
                <Title title='Акции'/>
                <div className="sales__row">
                    {
                        sales.map(item=>(
                            <div className='sales__card'>
                                <img className='sales__card-img' src={item.image} alt={item.title}/>
                                <div className='sales__card-block'>
                                    <h2 className='sales__card-title'>{item.title}</h2>
                                    <p className='sales__card-desc'>{item.description}</p>
                                    <p className='sales__card-date'>{item.date}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            </section>
            <Map/>
    </>
    );
};

export default Sales;