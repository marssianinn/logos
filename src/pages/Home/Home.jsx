import React from 'react';
import Begin from "./Begin/Begin";
import About from "./About/About";
import AllProducts from "./Allproducts/AllProducts";
import Map from "./Map/Map";

const Home = () => {
    return (
        <main>
            <Begin/>
            <AllProducts/>
            <About/>
            <Map/>
        </main>
    );
};

export default Home;