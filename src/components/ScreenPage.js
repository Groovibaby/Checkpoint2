import React, { useEffect, useState } from 'react';
import '../style.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Image from './Image';

const ScreenPage = (props) => {
    const [short_screenshots, setShort_screenshots] = useState(null);

    useEffect(() => {
        const params = props.match.params;
        axios.get(`https://wild-games.herokuapp.com/api/v1`)
        .then(response => response.data)
        .then(data => {
            setShort_screenshots(data.filter(item => item.id === Number(params.id)).map(item => item.short_screenshots))})
        });
    
    return (
        <>
        <div className="container ButtonsFilter mt-5">
            <Link to="/"><Button variant="dark">Retour</Button></Link>
        </div>
        <div id="list" className="container">
        {short_screenshots && short_screenshots[0].map((item, index) =>
            <Image
                key={index}
                image={item.image}
            />
        )}
        </div>
        </>
    );
}

export default ScreenPage;