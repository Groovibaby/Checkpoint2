import React, { useEffect, useState } from 'react';
import '../style.css';
import axios from 'axios';
import Game from './Game';
import Button from 'react-bootstrap/Button';

class GameList extends React.Component {
    state = {
        games: [],
        show: true
    }
    componentDidMount() {
        axios.get(`https://wild-games.herokuapp.com/api/v1`)
        .then(response => response.data)
        .then(data => {
            this.setState({ games: data })
        });
    }

    deleteGame = (id) => {
        const { games } = this.state;
        const arrayRemainingGames = games.filter(item =>
            item.id !== id);
        this.setState({ games: arrayRemainingGames })
    }

    bestGameFilter = () => {
        const { games } = this.state;
        const arrayBestGames = games.filter(item =>
            item.rating >= 4.5);
        this.setState({ games: arrayBestGames, show: false })
    }
    
    allGames = () => {
        window.location.reload(false);
    }

    render() {
        return (
            <section>
                <div className="container">
                    <h2>List of Wild Games</h2>
                    <div className="ButtonsFilter">
                        <Button variant="outline-success" className={this.state.show ? "" : "hide"} onClick={() => this.bestGameFilter()}>
                            Best Games
                        </Button>
                        <Button variant="outline-success" className={this.state.show ? "hide" : ""} onClick={() => this.allGames()}>
                            All Games
                        </Button>
                    </div>
                </div>
                <div id="list" className="container">
                    {this.state.games.map((item, index) =>
                    <Game
                        key={index}
                        id={item.id}
                        name={item.name}
                        background_image={item.background_image}
                        released={item.released}
                        rating={item.rating}
                        deleteGame={this.deleteGame}
                    />
                    )}
                </div>
            </section>
        );
    }
    
}

export default GameList;