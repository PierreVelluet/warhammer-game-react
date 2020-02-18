import React from 'react';
import classes from './ChampionCard.module.css'

const championCard =(props) => {
	const portrait = props.portrait;

	return (
		<div style={{height: props.height}}onClick={props.choose} className={classes.Card}>
			<div className={classes.Name} >{props.name}</div>
			<div style={{backgroundImage: `url(${portrait})`}} className={classes.Portrait}></div>
			<div className={classes.Power} ><strong>{props.powerName}</strong>: {props.power}</div>
				{/* <div className={classes.Strengh}></div>
				<p className={classes.StrenghValue}> :{props.strengh}</p>
				<div className={classes.Defense}></div>
				<p style={{display: 'inline-block'}}>{props.defense}</p>
				<div className={classes.Health}></div>
				<p style={{display: 'inline-block'}}>{props.health}</p> */}
				<div className={classes.Defense}><span className={classes.DefenseSpan}> :{props.defense}</span></div>
				<div className={classes.Strengh}><span className={classes.StrenghSpan}> :{props.strengh}</span></div>
				<div className={classes.Health}><span className={classes.HealthSpan}> :{props.health}</span></div>
				<div className={classes.Level}><span className={classes.LevelSpan}>:{props.level}</span></div>
		</div>
		)
}

export default championCard