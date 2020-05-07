import React from 'react';
import '../style.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Image from './Image';

class ScreenPage extends React.Component {
    state = {
        short_screenshots: null
    }
    componentDidMount() {
        const params = this.props.match.params;
        axios.get(`https://wild-games.herokuapp.com/api/v1`)
        .then(response => response.data)
        .then(data => {
            this.setState({ short_screenshots: data.filter(item => item.id === Number(params.id)).map(item => item.short_screenshots) })
        });
        
    }

    render() {
        const {short_screenshots} = this.state;
        console.log(short_screenshots && short_screenshots[0].map(item => item.image), "map du state");
        
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
        )
    }
}

export default ScreenPage;