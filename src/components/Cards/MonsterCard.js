import React from 'react';
import classes from './MonsterCard.module.css';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux';

const monsterCard =(props) => {
	const portrait = props.portrait;

	const style = {	backgroundImage: 'url(' + props.areaState[props.globalState.area].monsterBackground + ')',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',}

	return (
		
			<div onClick={props.chooseMonster} className={classes.Card} style ={style}>
				<div className={classes.Title}>{props.name}</div>
				<img alt="" src="C:\Users\Peyo\Desktop\fantasy-card-game-master\src\AllIcons\blank-name-tag-png-7-transparent.png"/>
				<div style={{backgroundImage: `url(${portrait})`}} className={classes.Portrait}></div>
				<div className={classes.Text}>
					{props.text}
				</div>
				<div>
					<table className={classes.Table}>
						<tbody>
							<tr>
								<td data-tip="Strengh" className={classes.StrenghData}><ReactTooltip/></td>
								<td data-tip="Defense" className={classes.DefenseData}></td>
								<td data-tip="Treasure" className={classes.TreasureData}></td>
								<td data-tip="Gold" className={classes.GoldData}></td>
								<td data-tip="Experience" className={classes.ExperienceData}></td>
							</tr>
							<tr>
								<td>{props.strengh}</td>
								<td>{props.defense}</td>
								<td>{props.treasure}</td>
								<td>{props.gold}</td>
								<td>{props.experience}</td>
							</tr>
						</tbody>
					</table>
				</div>
		</div>
		)
}

const mapStateToProps = state => {
    return {
		globalState: state.generalReducer,
		areaState: state.areaReducer
    };
};

export default connect(mapStateToProps)(monsterCard);