import React from 'react';
import classes from './FloorCheck.module.css';

const floorCheck = (props) => (

    //set an array of content, and then render only the chosen one, with []'s notation
    [

        <div className={classes.FloorCheck}>
            <h1 className={classes.Title}><strong>Technical issues</strong></h1>
            <p>During your mission XVZ89CTX, your spatial ship encountered technical issues, probably due to the web developer trainee who coded the new landing module XVZ98. </p>
            <div className={classes.Img} style={{backgroundImage: "url('https://img3.goodfon.com/wallpaper/nbig/1/9d/art-korabl-planeta-krushenie.jpg')"}}></div>
            <button onClick={props.continue} className={classes.Btn} style={{marginTop: '50px' }}>Continue</button>
        </div>,


        <div className={classes.FloorCheck}>
            <h1 className={classes.Title}><strong>Chapter 1 : the jungle</strong></h1>
            <p>Even with 2 modules damaged and a broken controller, you somehow managed to land on what seems to be a wild, unhabited jungle. Last member alive of your crew, you search survival stuff in your ship's wreck, and decide to explore around. </p>
            <div className={classes.Img} style={{backgroundImage: "url('https://i.pinimg.com/originals/6e/78/90/6e7890b9e5286c0781ef4204814163d3.jpg')"}}></div>
            <p><em>Be carefull, those forest are well known for housing orks ... Explore the deck 5 times to proceed to the next area.</em></p>
            <button className={classes.Btn} onClick={props.continue}>Continue</button>
        </div>,


        <div className={classes.FloorCheck}>
            <h1 className={classes.Title}><strong>Chapter 2 : the ice land</strong></h1>
            <p>You somehow managed to cross the entire jungle and to stay alive. You immediatly fall in front of a wide, long frozen desert.</p>
            <div className={classes.Img} style={{backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/631/427/750/men-winter-ice-nature-landscape-fantasy-art-horse-landscape-wallpaper-preview.jpg')"}}></div>
            <p><em>Again, you need to explore the deck 5 times to proceed to the next area. Be careful, these iceland doesnt look friendly at all !</em></p>
            <button className={classes.Btn} onClick={props.continue}>Continue</button>
        </div>
    ][props.area]
);

export default floorCheck;