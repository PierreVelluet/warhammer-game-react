import React from 'react';
import { connect } from 'react-redux';
import classes from './BossTrailer.module.css';

const bossTrailer = (props) => (
    [
        <div className={classes.BossTrailer}>
            <h1 className={classes.Title}><strong>Special event</strong></h1>
            <p>Something huge is comming. Whatever it is, you should better be somewhere else. Run !</p>
            <div className={classes.Img} style={{backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/342/957/196/sandstorms-wallpaper-preview.jpg')"}}></div>
            <p>You try to avoid this phenomenon, when suddenly ...</p>
            <button onClick={props.continueHandler} style={{width: "20%", margin: '0 auto', display: 'block', marginTop: '50px' }}>Continue ...</button>
        </div>,
    ][0]
);

const mapDispatchToProps = dispatch => {
    return {
        continueHandler: () => dispatch({type: 'CONTINUE'})
    }
};

export default connect(null, mapDispatchToProps)(bossTrailer);