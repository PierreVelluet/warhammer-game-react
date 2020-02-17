import React from 'react';
import classes from './ChampionCard.module.css'

const basicCard =(props) => {
	const portrait = props.portrait;

	return (
		<div style={{height: props.height}}onClick={props.choose} className={classes.Card}>
			<p className={classes.Name} >{props.name}</p>
			<div style={{backgroundImage: `url(${portrait})`}} className={classes.Portrait}></div>
			<p className={classes.Power} >{props.power}</p>
			<div className={classes.Stats} >
				<p className={classes.Level}>Level: {props.level}</p>
				<p className={classes.Health}>Health: {props.health}</p>
			</div>
		</div>
		)
}

export default basicCard