import React from 'react';
import classes from './MonsterCard.module.css';

const monsterCard =(props) => {
	const portrait = props.portrait;

	return (
		// <div onClick={props.chooseMonster} className={classes.MonsterArea}>
			<div onClick={props.chooseMonster} className={classes.Card} style ={{backgroundImage: 'url(' + props.background[props.area] + ')', backgroundSize: 'cover'}}>
				<div className={classes.Title}>{props.name}</div>
				<img src="C:\Users\Peyo\Desktop\fantasy-card-game-master\src\AllIcons\blank-name-tag-png-7-transparent.png"/>
				<div style={{backgroundImage: `url(${portrait})`}} className={classes.Portrait}></div>
				<div className={classes.Text}>
					{props.text}
				</div>
				<div>
					<table className={classes.Table}>
						<tr>
							<td className={classes.StrenghData}></td>
							<td className={classes.DefenseData}></td>
							<td className={classes.TreasureData}></td>
							<td className={classes.ExperienceData}></td>
						</tr>
						<tr>
							<td>{props.strengh}</td>
							<td>{props.defense}</td>
							<td>{props.treasure}</td>
							<td>{props.experience}</td>
						</tr>
					</table>
				</div>
		</div>
		)
}

export default monsterCard;