import React from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Products from "../Products/Products";


// import Products from "../Products";


const Home = () => {
   

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                   
                    <Products
                        headingText="Popular Products"
                       
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
