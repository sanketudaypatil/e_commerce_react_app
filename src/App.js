import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

import SingleProduct from "./components/SingleProduct/SingleProduct";




function App() {
    return (
        <BrowserRouter>
            
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                   
                
                </Routes>
                
                <Footer />
            
        </BrowserRouter>
    );
}

export default App;
