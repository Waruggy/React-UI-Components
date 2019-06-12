import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

function HeaderContainer() {
    return ( <
        header className = "header" >
        <
        ImageThumbnail / >
        <
        HeaderContent / >
        <
        /header>
    );
}

export default HeaderContainer;
