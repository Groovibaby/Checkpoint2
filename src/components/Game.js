import React, { useState } from 'react';
import '../style.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Game = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = () => {
        setShow(true);
    }

    return (
        <>
        <Modal size="lg" show={show} onHide={() => handleClose()}>
            <Modal.Header closeButton>
            <Modal.Title>Supprimer le jeu {props.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Êtes-vous sûr de vouloir supprimer ce jeu de la liste ?</Modal.Body>
            <Modal.Footer>
            <Button variant="outline-secondary" onClick={() => handleClose()}>
                Annuler
            </Button >
            <Button variant="outline-danger" onClick={() => {props.deleteGame(props.id);handleClose()}}>
                Supprimer
            </Button >
            </Modal.Footer>
        </Modal>
        <div className="container">
            <div className="Card">
                <div className="InfoUp">
                    <div className="col-md-2 ImgPosition">
                        <img src={props.background_image} className="img-round" alt={props.name}/>
                    </div>
                    
                        <div className="col-md-6">
                            <div>
                                <h3>{props.name} <span className="IdItem">{`(id : ${props.id})`}</span></h3>
                            </div>
                            <div>
                                <p>Rating : {props.rating} | Release date : {props.released}</p>
                            </div>
                        </div>
            
                    <div className="buttons col-md-4">
                        <Link to={`/jeu/screenshots/${props.id}`}>
                            <Button variant="info">
                            See screenshots
                            </Button >
                        </Link>
                        <Button variant="outline-danger" className="buttons" onClick={handleShow}>
                            Supprimer
                        </Button >
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Game;