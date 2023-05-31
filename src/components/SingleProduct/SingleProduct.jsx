import {  useState } from "react";

import { Link, useParams } from "react-router-dom";

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import Products from "../Products/Products";



const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    

    const productsData = [{
        id:1 ,
        title:"boAt Rockerz 450 DC edition | Wireless Headphone with 40mm Dynamic Driver",
        price:"1999",
        details: "There is no better justice to your playlist & binging than Rockerz 450 boAt | DC edition. If low battery is your enemy, the 15HRS non-stop playback is here to rightfully combat that. Feel the power rising up in your veins as you indulge in your playlist with its 40mm dynamic drivers. Make adaptiveness your superpower just like the adaptive headband of Rockerz 450. Get ready to rule with #DCYou."
        ,
        img:"https://i.ibb.co/cDd7sdm/headphone-prod-1.webp",

    }, {
        id:2,
        title:"Rockerz 550 Over Ear Bluetooth Headphone",
        price:"1799",
        details:"boAt Rockerz 550 is an over-ear wireless headset that has been ergonomically designed to meet the needs of music lovers. The headphones come equipped with the latest Bluetooth v5.0 for instant wireless connectivity. Its powerful 500mAh battery provides playtime of up to 20 hours for an extended audio bliss. Its 50mm dynamic drivers help supply immersive musical experience to the user with immersive sound. The user can utilize the headset via dual connectivity in the form of Bluetooth and AUX.",
        img:"https://i.ibb.co/gwJdBD3/headphone-prod-2.webp"
    }
    , {
        id:3,
        title:"boAt Rockerz 518 Wireless Headphone",
        price:"1599",
        details:"Now just stop worrying about Wires hanging from here and there. Pair with any Bluetooth device, connect and play. Dead Batteries can kill your vibe. boAt Rockerz 518 is designed to play Up to 20 hours. Don't just be loud, be loud and clear. We assure you have not heard such powerful bass and vocal clarity from a wireless comfortable headphone with Extra Comfort Ear cups. The boAt Super Bass Rockerz 518 Wireless Headphones will make your listening experience personal and for real. So, just plug it in and Plug into Nirvana.",
        img:"https://i.ibb.co/jb6QxKs/headphone-prod-3.webp"
    }
    , {
        id:4,
        title:"Rockerz 400",
        price:"1299",
        details:"Lets put an end to your worries about wires hanging and getting tangled with BoAt Rockerz 400 and connect with any Bluetooth device, connect and play. Dead batteries can kill your vibe. boAt Rockerz bluetooth headphones are designed to play Up to 8 hours. It has a High Definition Sound. Dont just be loud, be loud and clear. We guarantee you have not heard such powerful bass and vocal clarity from a wireless headphone. The boAt Super Bass Rockerz 400 wireless headphones will make your listening experience personal and for real. Plug it in and Plug into Nirvana.",
        img:"https://i.ibb.co/j8ZkjJM/headphone-prod-4.webp"
    }
    , {
        id:5,
        title:"Trebel Rockerz 550 Wireless Bluetooth Headphones",
        price:"1999",
        details:"Ladies, the time hath come to reach the wall of fame. Make your hustle shine like a diamond with TRebel Rockerz 550 — an audio partner that’s made to suit your vibe. Let your hustle never stop with its 20 hours of powerful playback and never settle for less with the sheer audio power of 50mm Dynamic Drivers. Block the voices that don’t matter with its physical noise isolation. With a 500mAh battery, TRebel Rockerz 550 will be your cheerleader through thick & thin. There’s no point in waiting — match your mood with the best wireless headphones for women.",
        img:"https://i.ibb.co/FhL0txp/headphone-prod-6.webp"
    }
    , {
        id:6,
        title:"boAt Wave Neo | 1.69 HD Display, Upto 7 Days Battery Life, IP68 Sweat",
        price:"1799",
        details:"Introducing a #NeoWay to live smart and stylish – the all-new Watch Wave Neo. Check everything that you need in a smartwatch and then get some more. Packed with a 1.69 inches screen, 550 nits brightness & 2.5D Curved Display – Watch Wave Neo will make your world better & brighter.",
        img:"https://i.ibb.co/1bXbyRH/watch-prod-1.webp"
    }
    , {
        id:7,
        title:"boAt Iris | Round Dial Smart Watch with 1.39 AMOLED Display, Multiple Watch Faces",
        price:"4499",
        details:"Shoutout to all who see the glass half full. It is time to switch over to the bright side. Watch Iris will get you through the week with a 7-day battery backup. Thrive through your success with all the important notifications on your smartwatch. The timeless look comes with multiple watch faces and strap options to go with all versions of your style. Nail every sport you play with 8 active sports modes tracking your performance. Don’t worry about sweat and water, it is IP68. Being healthy is an imperative when your watch has a heart rate monitor, oxygen level monitor, sedentary reminder tracking your health 24x7. Pump up your style!",
        img:"https://i.ibb.co/kDcCXJS/watch-prod-2.webp"
    }, {
        id:8,
        title:"boAt Vertex | Smartwatch with Fitness Trackers, 1.69 HD Display, Sleep Tracking, 100+ Watch Faces",
        price:"2299",
        details:"When you can be at the apex of your health, why compromise? Meet Watch Vertex, our all-new smartwatch that’s built to improve your lifestyle and push you closer towards your fitness goals. Its large 1.69 inch full capacitive touch display allows you to control everything. Fitness features, including heart rate & SpO2 tracker, health ecosystem, sleep tracker, and more, ensure you get the support you need on your fitness journey. Enjoy going on hikes? Vertex is the perfect travel partner with its extra long battery of up to 10 days. Hustle your journey to the top with Vertex.",
        img:"https://i.ibb.co/FhL0txp/headphone-prod-6.webp"
    }, {
        id:9,
        title:"boAt Stone 500 - Portable Bluetooth Speaker",
        price:"1999",
        details:"Become the life of every party with Stone 500. Experience 10W RMS stereo sound and groove with your gang on your favourite tunes. Double the thump with its TWS functionality that lets you connect & play 2 Stone 500 together. The dynamic RGB lights will add to the vibe of your party as you get transported to a club setting. Its universal connectivity with multiple connectivity modes —Bluetooth v5.0, AUX, USB and FM mode. With a Type-C charging interface & instant voice assistant, this wireless speaker will make your life easier as you enjoy the sound of your choice. With Stone 500, it is time to #BeTheLimelight.",
        img:"https://i.ibb.co/419BJZc/speaker-prod-1.webp"
    }
]
const oneCard = productsData[id-1]



    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1;
            return prevState - 1;
        });
    };
    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    };

   

   

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img
                            src={
                                oneCard.img
                            } alt=""
                        />
                    </div>
                    <div className="right">
                        <span className="name">{oneCard.title}</span>
                        <span className="price">&#8377;{oneCard.price}</span>
                        <span className="desc">{oneCard.description}</span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            
                            <button
                                className="add-to-cart-button"
                                onClick={() => {
                                    
                                    setQuantity(1);
                                }}
                                >
                                
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                            <Link to="/cart">
                            <button
                                className="add-to-cart-button car"
                                >
                                <FaCartPlus size={20} />
                                Cart
                            </button>
                            </Link>
                           
                        </div>
                        

                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Category:{" "}
                                <span>
                                    {
                                        oneCard.title
                                    }
                                </span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <Products/>

            </div>
        </div>
    );
};

export default SingleProduct;
