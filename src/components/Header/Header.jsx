import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";

;

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    
    const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);



    return (
        <>
            <header
                className={`main-header ${scrolled ? "sticky-header" : ""}`}
            >
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/about")}>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>
                        PRODUCTS
                    </div>
                    <div className="right">
                        
                        <AiOutlineHeart />
                        <span
                            className="cart-icon"
                            
                        >
                            <CgShoppingCart />
                            <span>0</span>
                        </span>
                    </div>
                </div>
            </header>
           
        
        </>
    );
};

export default Header;
