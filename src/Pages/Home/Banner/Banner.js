import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.png';
import banner2 from '../../../images/banner/banner2.png';
import banner3 from '../../../images/banner/banner3.png';
import './Banner.css';
const Banner = () => {
    return (
        <>
            <Carousel >
                <Carousel.Item className="banner-overlay">
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>I Was Created </h3>
                        <p>To Create Beautiful Smiles</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="banner-overlay">
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Every Tooth in a mans head </h3>
                        <p>Is More Valuable Than A Diamond.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="banner-overlay">
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>A Smile is The Prettiest Thing</h3>
                        <p>You will Ever Wear</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;