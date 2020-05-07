import React from 'react';
import '../style.css';

const Image = (props) => {
    return (
        <div className="col-12 ScreenShots">
            <img src={props.image} className="ScreenSchot"/>
        </div>
    )
}

export default Image;