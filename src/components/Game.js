import React from 'react';
import '../style.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    render() {
        return (
            <>
            <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Supprimer le jeu {this.props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Êtes-vous sûr de vouloir supprimer ce jeu de la liste ?</Modal.Body>
                <Modal.Footer>
                <Button variant="outline-secondary" onClick={this.handleClose}>
                    Annuler
                </Button >
                <Button variant="outline-danger" onClick={() => {this.props.deleteGame(this.props.id);this.handleClose()}}>
                    Supprimer
                </Button >
                </Modal.Footer>
            </Modal>
            <div className="container">
                <div className="Card">
                    <div className="InfoUp">
                        <div className="col-md-2 ImgPosition">
                            <img src={this.props.background_image} className="img-round" alt={this.props.name}/>
                        </div>
                        
                            <div className="col-md-6">
                                <div>
                                    <h3>{this.props.name} <span className="IdItem">{`(id : ${this.props.id})`}</span></h3>
                                </div>
                                <div>
                                    <p>Rating : {this.props.rating} | Release date : {this.props.released}</p>
                                </div>
                            </div>
             
                        <div className="buttons col-md-4">
                            <Link to={`/jeu/screenshots/${this.props.id}`}>
                                <Button variant="info">
                                See screenshots
                                </Button >
                            </Link>
                            <Button variant="outline-danger" className="buttons" onClick={this.handleShow}>
                                Supprimer
                            </Button >
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Game;