import React from 'react';
import classes from './GameOver.module.css';

const gameOver = (props) => (
    <div className={classes.GameOver}>
        <h1><strong>YOU LOST</strong></h1>
        <div className={classes.Dead}></div>
        <button onClick={props.tryAgain} style={{marginTop: '50px'}}>Try again</button>
    </div>
);

export default gameOver;