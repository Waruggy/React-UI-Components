import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';

function HeaderContent() {
    return ( <
        div className = "header-text" >
        <
        HeaderTitle / >
        <
        p className = "header-content" > Let 's learn React by building simple interfaces with components. Don'
        t
        try to overthink it, just keep it simple and have fun.Once you feel comfortable using components you are well on your way to mastering React! < /p> < /
        div >
    );
}

export default HeaderContent;
