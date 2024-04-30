import React, {useContext} from 'react';
import {Swiper,SwiperSlide} from "swiper/react"
import {Autoplay} from "swiper/modules";
import 'swiper/css'
import 'swiper/css/pagination'
import Title from "../Title/Title";
import {CustomContext} from "../../utils/Context";
import Card from "../Card/Card";
const ProductsFilter = ({title}) => {
    const {products}=useContext(CustomContext)

    return (
        <div className='products__filter'>
            <Title title={title}/>
            <div className='products__filter-sliders'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay:3000
                    }}
                    speed={2000}
                    modules={[Autoplay]}
                    className='mySwiper'
                >
                    {
                        products.map((item)=>{

                            return(
                            <SwiperSlide key={item.id}>
                                <Card item={item}/>
                            </SwiperSlide>
                        )})
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default ProductsFilter;