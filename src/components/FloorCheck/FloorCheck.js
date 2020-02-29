import React from 'react';
import { connect } from 'react-redux';
import classes from './FloorCheck.module.css';
import * as actionCreators from '../../store/actions/index';

const floorCheck = (props) => (

    //set an array of content, and then render only the chosen one, with []'s notation
    {
        area0:
        <div className={classes.FloorCheck}>
            <h1 className={classes.Title}><strong>Technical issues</strong></h1>
            <p>During your mission XVZ89CTX, your spatial ship encountered technical issues, probably due to the web developer trainee who coded the new landing module XVZ98. </p>
            <div className={classes.Img} style={{backgroundImage: "url('https://img3.goodfon.com/wallpaper/nbig/1/9d/art-korabl-planeta-krushenie.jpg')"}}></div>
            <button onClick={props.continue} className={classes.Btn} style={{marginTop: '50px' }}>Continue</button>
        </div>,

        area1:
        <div className={classes.FloorCheck}>
            <h1 className={classes.Title}><strong>Chapter 1 : the desert</strong></h1>
            <p>Even with 2 modules damaged and a broken controller, you somehow managed to land on what seems to be a wild, unhabited desert. Last member alive of your crew, you search survival stuff in your ship's wreck, and decide to explore around. </p>
            <div className={classes.Img} style={{backgroundImage: "url('https://66.media.tumblr.com/cac9b3febe0c6589bc17c55eedba4372/tumblr_o7pkcvOsZ11qhuscto1_1280.jpg')"}}></div>
            <p><em>Be carefull, those lands are well known for housing orks ... Explore the deck 3 times to proceed to the next area.</em></p>
            <button className={classes.Btn} onClick={props.continue}>Continue</button>
        </div>,

        area2:
        <div className={classes.FloorCheck}>
            <h1 className={classes.Title}><strong>Chapter 2 : the jungle</strong></h1>
            <p>You somehow managed to cross the entire desert and to stay alive. You immediatly fall in front of a wide, dense jungle.</p>
            <div className={classes.Img} style={{backgroundImage: "url('https://www.itl.cat/pngfile/big/15-151834_forest-wallpaper-forest-background-fantasy.jpg')"}}></div>
            <p><em>Again, you need to explore the deck 3 times to proceed to the next area. Be careful, this forest doesnt look friendly at all !</em></p>
            <button className={classes.Btn} onClick={props.continue}>Continue</button>
        </div>,

        area3:
        <div className={classes.FloorCheck}>
            <h1 className={classes.Title}><strong>Chapter 3 : the iceland</strong></h1>
            <p>You somehow managed to cross the entire jungle and to stay alive. You immediatly fall in front of an unfinishable frozen land.</p>
            <div className={classes.Img} style={{backgroundImage: "url('https://i.pinimg.com/originals/61/f5/9f/61f59f72387271f6b091b9e0ae9a5e3f.jpg')"}}></div>
            <p><em>Again, you need to explore the deck 3 times to proceed to the next area. Be those lands might not be as unhabited as you could think at a first look !</em></p>
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