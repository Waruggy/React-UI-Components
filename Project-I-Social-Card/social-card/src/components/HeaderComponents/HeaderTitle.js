import React from 'react';
import './Header.css';
import moment from "moment";

function HeaderTitle() {
    let date = moment().format("MMM Do");
    return ( <
        div className = "titles" >
        <
        h1 className = "h1" > Lambda School < /h1> <
        h2 className = "h2" > @LambdaSchool & middot; {
            date
        } < /h2> <
        /div>
    );
}

export default HeaderTitle;
