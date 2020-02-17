import React from 'react';
import classes from './GameOver.module.css';

const gameOver = (props) => (
    <div className={classes.GameOver}>
        <h1 style={{marginTop: '60px'}}><strong>YOU LOST</strong></h1>
    </div>
);

export default gameOver;