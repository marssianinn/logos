import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from './pages/Home/Home'
import Register from "./pages/Register/Register";
import './styles/style.scss'
import Login from "./pages/Login/Login";
import Layout from "./Layout/Layout";
import Catalog from "./pages/Catalog/Catalog";
import Sales from "./pages/Sales/Sales";
import Delivery from "./pages/Delivery/Delivery";
import Product from "./pages/Product/Product";
import AddProduct from "./pages/AddProduct/AddProduct";
import Basket from "./pages/Basket/Basket";

const App = () => {



    return (

        <>
            <Routes>
                <Route path='' element={<Layout/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/sales' element={<Sales/>}/>
                    <Route path='/delivery' element={<Delivery/>}/>
                    <Route path='/basket' element={<Basket/>}/>
                    <Route path='/catalog/:category' element={<Catalog/>}/>
                    <Route path='/product/:id' element={<Product/>}/>
                    <Route path='/product/add' element={<AddProduct/>}/>
                </Route>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </>
    );
};

export default App;