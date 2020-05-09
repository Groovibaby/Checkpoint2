import React, { useEffect, useState } from 'react';
import '../style.css';
import axios from 'axios';
import Game from './Game';
import Button from 'react-bootstrap/Button';

const GameList = () => {
    const [games, setGames] = useState([]);
    const [show, setShow] = useState(true);

    useEffect(() => {
        axios.get(`https://wild-games.herokuapp.com/api/v1`)
        .then(response => response.data)
        .then(data => setGames(data))
        }, []);

    const deleteGame = (id) => {
        const arrayRemainingGames = games.filter(item =>
            item.id !== id);
        setGames(arrayRemainingGames);
    }

    const bestGameFilter = () => {
        const arrayBestGames = games.filter(item =>
            item.rating >= 4.5);
        setGames(arrayBestGames);
        setShow(false);
    }
    
    const allGames = () => {
        window.location.reload(false);
    }

    return (
        <section>
            <div className="container">
                <h2>List of Wild Games</h2>
                <div className="ButtonsFilter">
                    <Button variant="outline-success" className={show ? "" : "hide"} onClick={() => bestGameFilter()}>
                        Best Games
                    </Button>
                    <Button variant="outline-success" className={show ? "hide" : ""} onClick={() => allGames()}>
                        All Games
                    </Button>
                </div>
            </div>
            <div id="list" className="container">
                {games.map((item, index) =>
                <Game
                    key={index}
                    id={item.id}
                    name={item.name}
                    background_image={item.background_image}
                    released={item.released}
                    rating={item.rating}
                    deleteGame={deleteGame}
                />
                )}
            </div>
        </section>
    );
}

export default GameList;