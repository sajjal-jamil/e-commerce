import React from 'react';
import './home.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import women1 from '../../assets/women1.jpeg';
import women2 from '../../assets/women2.jpeg';
import women3 from '../../assets/women3.jpeg';
import women4 from '../../assets/women4.jpeg';
import women5 from '../../assets/women5.jpeg';
import men1 from '../../assets/men1.jpeg';
import men2 from '../../assets/men2.jpeg';
import men3 from '../../assets/men3.jpeg';
import kids1 from '../../assets/kids1.jpeg';
import fragnances from '../../assets/fragnances.jpeg';
import footwear from '../../assets/footwear.jpeg';
import accessories from '../../assets/accessories.jpeg';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const products = [
        { id: 1, image: women1 },
        { id: 2, image: women2 },
        { id: 3, image: women3 },
        { id: 4, image: women4 },
        { id: 5, image: men1 },
        { id: 6, image: men2 },
        { id: 7, image: men3 },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className="front-page">
            <header className="hero-section">
                <h1>Welcome to MyShop</h1>
                <p>Your one-stop shop for everything!</p>
            </header>
            <div className='front'>
                <Link to='/women'>
                    <img src={women5} alt="Women's Collection" />
                    <p>Women's Collection</p>
                </Link>
                <br />
                <Link to='/men'>
                    <img src={men1} alt="Men's Collection" />
                    <p>Men's Collection</p>
                </Link>
                <Link to='/kids'>
                    <img src={kids1} alt="Kids's Collection" />
                    <p>Kids's Collection</p>
                </Link>
                <Link to='/fragrances'>
                    <img src={fragnances} alt="Fragrances" />
                    <p>Fragrances</p>
                </Link>
                <Link to='/footwear'>
                    <img src={footwear} alt="Footwear" />
                    <p>Footwear</p>
                </Link>
                <Link to='/accessories'>
                    <img src={accessories} alt="accessories" />
                    <p>ACESSORIES</p>
                </Link>
            </div>
            <section className="featured-products">
                <h2>NEW ARRIVALS</h2>
                <hr />
                <Slider {...settings}>
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="product">
                                <img src={product.image} alt={`Product ${product.id}`} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
        </div>
    );
};

export default HomePage;
