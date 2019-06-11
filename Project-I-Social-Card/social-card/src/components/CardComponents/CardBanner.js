import React from 'react';
import './Card.css';
import CardContent from './cardContent';

function CardBanner() {
    return ( <
        a className = "card-banner"
        href = "https://www.reactjs.org" >
        <
        img className = "react-image"
        src = "https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"
        alt = "react logo" >
        <
        /img> <
        CardContent / >
        <
        /a>
    );
}

export default CardBanner;
