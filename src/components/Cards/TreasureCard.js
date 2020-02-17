import React from 'react';
import classes from './TreasureCard.module.css'

const treasureCard =(props) => {
	const portrait = props.portrait;



	return (
		<div onClick={props.choose} className={classes.Card}>
			<p className={classes.Title}>{props.name}</p>
			<div style={{backgroundImage: `url(${portrait})`}} className={classes.Portrait}></div>
			<div className={classes.Text}>
				<p><em>{props.text}</em></p>
				<p><em>{props.effect}</em></p>
			</div>
			<p className={classes.BottomText}><em>*{props.bottomText}*</em></p>

		</div>
		)
}

export default treasureCard;