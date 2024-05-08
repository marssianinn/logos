import React from 'react';
import {menuData} from "../../utils/menuData";
import {useForm} from "react-hook-form";
import axios from "../../utils/axios";
import {useNavigate} from "react-router-dom";

const AddProduct = () => {

    const navigate = useNavigate()
    const {
        register,
        reset,
        handleSubmit,
        formState:{
            errors
        }
    }= useForm({
        mode:"onBlur"
    })

    const handleAddProduct = (data)=>{
        const newProduct={
            ...data,
            calories:data.protein * 4 + data.fats * 9 + data.carbohydrates * 4
        }
        console.log(newProduct)
        axios.post('/products', newProduct).then(()=>{
            navigate('/')
            reset()
        }).catch((err)=>alert(err.message))
    }

    return (
        <section className='addProduct'>
            <div className="container">
                <div className="addProduct__content">
                    <form noValidate className='form' onSubmit={handleSubmit(handleAddProduct)}>
                        <h2>Добавление продукта</h2>

                        <label className='form__label' htmlFor="">
                            <span className='form__label-title'>Название</span>
                            <input placeholder='Введите название' {...register('title', {
                                required: true
                            })} className='form__field' type="text"/>
                        </label>
                        <label className='form__label' htmlFor="">
                            <span className='form__label-title'>Картинка</span>
                            <input placeholder='Введите ссылку' {...register('image', {
                                required: true
                            })} className='form__field' type="text"/>
                        </label>
                        <label className='form__label' htmlFor="">
                            <span className='form__label-title'>Описание</span>
                            <input placeholder='Введите описание' {...register('description', {
                                required: true
                            })} className='form__field' type="text"/>
                        </label>
                        <div className='form__block'>
                            <label className='form__label' htmlFor="">
                                <span className='form__label-title'>Цена</span>
                                <input {...register('price', {
                                    required: true
                                })} defaultValue={0} className='form__field' type="text"/>
                            </label>
                            <label className='form__label' htmlFor="">
                                <span className='form__label-title'>Вес</span>
                                <input {...register('weight', {
                                    required: true
                                })} defaultValue={0} className='form__field' type="text"/>
                            </label>
                        </div>
                        <div className='form__block'>
                            <label className='form__label' htmlFor="">
                                <span className='form__label-title'>Белки</span>
                                <input {...register('protein', {
                                    required: true
                                })} defaultValue={0} className='form__field' type="text"/>
                            </label>
                            <label className='form__label' htmlFor="">
                                <span className='form__label-title'>Жиры</span>
                                <input {...register('fats', {
                                    required: true
                                })} defaultValue={0} className='form__field' type="text"/>
                            </label>
                            <label className='form__label' htmlFor="">
                                <span className='form__label-title'>Углеводы</span>
                                <input {...register('carbohydrates', {
                                    required: true
                                })} defaultValue={0} className='form__field' type="number"/>
                            </label>
                        </div>

                        <label className='form__label' htmlFor="">
                            <span className='form__label-title'>Категории</span>
                            <select {...register('category', {
                                required: true
                            })} className='form__select' name="" id="">
                                <option value="">Выберите категорию</option>
                                {menuData.map((item) => (
                                    <option key={item.en} value={item.en}>{item.ru}</option>
                                ))}
                            </select>
                        </label>
                        <button className='form__btn' type='submit'>Создать продукт</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddProduct;