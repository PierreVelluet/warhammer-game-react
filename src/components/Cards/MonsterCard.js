import React from 'react';
import classes from './MonsterCard.module.css';

const monsterCard =(props) => {
	const portrait = props.portrait;

	return (
		// <div onClick={props.chooseMonster} className={classes.MonsterArea}>
			<div onClick={props.chooseMonster} className={classes.Card}>
				<div className={classes.Title}>{props.name}</div>
				<img src="C:\Users\Peyo\Desktop\fantasy-card-game-master\src\AllIcons\blank-name-tag-png-7-transparent.png"/>
				<div style={{backgroundImage: `url(${portrait})`}} className={classes.Portrait}></div>
				<div className={classes.Text}>
					{props.text}
				</div>
				<div className={classes.Defense}><span className={classes.DefenseSpan}> :{props.defense}</span></div>
				<div className={classes.Strengh}><span className={classes.StrenghSpan}> :{props.strengh}</span></div>
				<div className={classes.Treasure}><span className={classes.TreasureSpan}> :{props.treasure}</span></div>
				<div className={classes.Experience}><span className={classes.ExperienceSpan}>:{props.experience}</span></div>
				{/* <p className={classes.Permanent}><em>*Level {props.level} monster*</em></p> */}
			{/* </div> */}
		</div>
		)
}

export default monsterCard;