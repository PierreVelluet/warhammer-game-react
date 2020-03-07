import React from 'react';
import { connect } from 'react-redux';
import classes from './FloorCheck.module.css';
import * as actionCreators from '../../store/actions/index';

const floorCheck = (props) => (

    //set an array of content, and then render only the chosen one, with []'s notation
    {
        'desert':
        <div className={classes.FloorCheck}>
            <h1 className={classes.Title}><strong>Desert planet</strong></h1>
            <p>You chose to explore this desertic planet in order to find ressources for the <strong>Great {props.generalState.race} Colony</strong>. Everything, however, had not gone as planned. The web developer trainee who coded the new landing module XVZ98 made a huge mistake.</p>
            <div className={classes.Img} style={{backgroundImage: "url('https://66.media.tumblr.com/cac9b3febe0c6589bc17c55eedba4372/tumblr_o7pkcvOsZ11qhuscto1_1280.jpg')"}}></div>
            <p><em>In order to repare your ship, and to fullfill your mission goal, you decide to explore the environment. Be carefull though, those lands looks very hostile...</em></p>
            <button className={classes.Btn} onClick={props.continue}>Continue</button>
        </div>,

        'jungle':
        <div className={classes.FloorCheck}>
            <h1 className={classes.Title}><strong>Jungle planet</strong></h1>
            <p>You somehow managed to land in the middle of a jungle, which seems to cover the entire planet anyway. You decide to explore the area, seeking some ressources, for the <strong>{props.generalState.race} empire</strong>.</p>
            <div className={classes.Img} style={{backgroundImage: "url('https://www.itl.cat/pngfile/big/15-151834_forest-wallpaper-forest-background-fantasy.jpg')"}}></div>
            <p><em>You might find some usefull stocks of wood, medecine plants, or even some rare materials if your lucky enough. Be careful though, forest-formed planet have the reputation of beeing infested by lot of savage creatures, and you already heard some not very reassuring noise, not so far from your position !</em></p>
            <button className={classes.Btn} onClick={props.continue}>Continue</button>
        </div>,

        'iceland':
        <div className={classes.FloorCheck}>
            <h1 className={classes.Title}><strong>Iceland planet</strong></h1>
            <p>You just landed on what seems to be a large, wide, unhabited frozen land. You immediatly feel a violent wind, which froze you to the bone. However, your mission is to find some rare materials, and the data's from the base says that there can be some, hidden in this frozen desert.</p>
            <div className={classes.Img} style={{backgroundImage: "url('https://i.pinimg.com/originals/61/f5/9f/61f59f72387271f6b091b9e0ae9a5e3f.jpg')"}}></div>
            <p><em>Orders beeing orders, you pack your stuff and prepare yourself for the expedition, in a maybe not-so-unhabited planet ...</em></p>
            <button className={classes.Btn} onClick={props.continue}>Continue</button>
        </div>,
    }[props.generalState.area]
);

const mapStateToProps = state => {
    return {
        generalState: state.generalReducer,
    };
};

const mapDispatchToProps = dispatch => {
    return {
		continue: () => dispatch(actionCreators.continueHandler()),
		
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(floorCheck);