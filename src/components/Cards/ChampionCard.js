import React from 'react';
import classes from './ChampionCard.module.css'
import ReactTooltip from 'react-tooltip';

import cx from "classnames";

const championCard =(props) => {
	const {portrait, disabled} = props;

	return (
		<div style={{height: props.height}}onClick={!disabled? props.choose : ()=> {}} className={cx(classes.Card, disabled ? classes.CardDisabled : "")}>
			<div className={classes.Name} >{props.name}</div>
			<div style={{backgroundImage: `url(${portrait})`}} className={classes.Portrait}></div>
			<div className={classes.Power} ><strong>{props.powerName}</strong>: {props.power}</div>
				<div>
				<ReactTooltip/>
					<table className={classes.Table}>
						<tbody>
							<tr>
								<td data-place="top" data-tip="Strengh" className={classes.StrenghData}></td>
								<td data-place="top" data-tip="Defense" className={classes.DefenseData}></td>
								<td data-place="top" data-tip="Health" className={classes.HealthData}></td>
								<td data-place="top" data-tip="Level" className={classes.LevelData}></td>
							</tr>
							<tr>
								<td>{props.strengh}</td>
								<td>{props.defense}</td>
								<td>{props.health}</td>
								<td>{props.level}</td>
							</tr>
						</tbody>
					</table>
				</div>
		</div>
		)
}

export default championCard