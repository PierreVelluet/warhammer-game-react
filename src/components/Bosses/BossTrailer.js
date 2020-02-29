import React from 'react';
import { connect } from 'react-redux';
import classes from './BossTrailer.module.css';
import * as actionCreators from '../../store/actions/index';

const bossTrailer = (props) => (
    
    {
        area1:
        <div className={classes.BossTrailer}>
            <h1 className={classes.Title}><strong>Special event</strong></h1>
            <p>Something huge is comming. Whatever it is, you should better be somewhere else. Run !</p>
            <div className={classes.Img} style={{backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/342/957/196/sandstorms-wallpaper-preview.jpg')"}}></div>
            <p>You try to avoid this phenomenon, when suddenly ...</p>
            <button onClick={props.continueHandler} className={classes.Btn}>Continue ...</button>
        </div>,

        area2:
        <div className={classes.BossTrailer}>
            <h1 className={classes.Title}><strong>Special event</strong></h1>
            <p>You just saw something moving between the trees...</p>
            <div className={classes.Img} style={{backgroundImage: "url('https://i.pinimg.com/originals/00/14/89/001489f6072f6cd17179f6c8b2d92b6f.jpg')"}}></div>
            <p>You try to turn around, when suddenly ...</p>
            <button onClick={props.continueHandler} className={classes.Btn}>Continue ...</button>
        </div>,

        area3:
        <div className={classes.BossTrailer}>
            <h1 className={classes.Title}><strong>Special event</strong></h1>
            <p>This snow tempest doesnt looks natural ... Run !</p>
            <div className={classes.Img} style={{backgroundImage: "url('https://www.itl.cat/pngfile/big/12-128569_snow-storm-hd-wallpapers-snow-blizzard-wallpaper-hd.jpg')"}}></div>
            <p>You try to escape from the phenomenon, when suddenly ...</p>
            <button onClick={props.continueHandler} className={classes.Btn}>Continue ...</button>
        </div>,

    }[props.generalState.area]
);

const mapStateToProps = state => {
    return {
        generalState: state.generalReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        continueHandler: () => dispatch(actionCreators.continueHandler())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(bossTrailer);