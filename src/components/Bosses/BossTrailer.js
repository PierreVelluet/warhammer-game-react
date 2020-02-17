import React from 'react';
import classes from './BossTrailer.module.css';

const bossTrailer = (props) => (
    [
        <div className={classes.BossTrailer}>
            <h1 className={classes.Title}><strong>Special event</strong></h1>
            <p>Something is moving in the bushees. Now that you are aware of the dangerousness of this jungle, you take it seriously.</p>
            <div className={classes.Img} style={{backgroundImage: "url('https://i.pinimg.com/originals/b8/cb/bd/b8cbbda2ca1be6a11391559752937172.jpg')"}}></div>
            <p>You try to avoid this phenomenon, when suddenly ...</p>
            <button onClick={props.setUpBossFight} style={{width: "20%", margin: '0 auto', display: 'block', marginTop: '50px' }}>Continue ...</button>
        </div>,
    ][0]
);

export default bossTrailer;