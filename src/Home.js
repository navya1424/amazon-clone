import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt=""/>
                <div className="home__row">
                    <Product
                    id = "12345678"
                    title="YOYOW Smart Multipurpose Foldable Laptop Table with Cup Holder, Study Table, Bed Table, Breakfast Table, Foldable and Portable/Ergonomic & Rounded Edges/Non-Slip (kity Pink)"
                    price={331}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV5QJYBaP4WlTjGOJWD6K2yD1cli0fFCbIugMwKZYULtNH4r1ZI2VBrL0I0A&usqp=CAc" 
                    rating={3}/>
                    <Product 

                    id = "56789012"
                    title = "realme Fashion Watch 1.4 Large HD Color Display, Full Touch Screen, SpO2, Continuous Heart Rate Monitor, Black, Free Size (RMA161)"
                    price={3296}
                    image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUxUKGliWLJ8WaWaTKlZufOioA9YgubpnCdB_A9Eqm7uQgRz9ymCYdqfzpYo4&usqp=CAc"
                    rating={4}
                    />
                   
                </div>
                <div className="home__row">
                <Product 
                id = "34125673"
                title="All-new Echo (4th Gen) | Premium sound powered by Dolby and Alexa (Black)"
                price={7999}
                image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBKRvzlQC9jkbmQDrDbnMpxE-c_TF4sRHX-A&usqp=CAU"
                rating={4}/>
                <Product
                id = "23459871"
                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQipVQxCvLrbk3mWqlxCxbj6rpe7-C5SoyV-aRyfS3GlP-JLjpCFP3FbHZz2jBpwVN2XENlj1kI&usqp=CAc"
                rating = {3}
                price = {98900}
                title = "New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Silver (4th Generation)" />
                <Product
                id = "98706543"
                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ahTjxrNhbDg-REb1NurmFPua5A5L2dVdz7U5_Svrinuj7oZ_NnRJZBBYIPzK89VRV-lWaxI&usqp=CAc"
                price = {1999}
                title = "Bajaj GX-1 Mixer Grinder, 500W, 3 Jars"
                rating = {4} />
                </div>
                <div className="home__row">
                <Product
                 id = "64532098"
                 image = "https://rukminim1.flixcart.com/image/416/416/kae95e80/television/f/6/y/realme-tv-32-original-imafrz79pweqeafh.jpeg?q=70"
                 price = {13999}
                 title = "realme 80 cm (32 inch) HD Ready LED Smart Android TV  (TV 32)"
                 rating = {5} />
        
                </div>
            </div>
            
        </div>
    )
}

export default Home
