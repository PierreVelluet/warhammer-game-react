import React, {Component} from 'react';
import classes from './ChooseRewardScreen.module.css';
import TreasureCard from '../Cards/TreasureCard';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';


const ChooseRewardScreen = (props) => {



		//set an array's length depending on the champion's player choice
		let numberOfTreasures = 3;
		if (props.generalState.name === 'Eldar captain' && props.generalState.currentMonster.monsterType === 'normal') {numberOfTreasures = 4 }

		//set an array of random numbers, depending on the chosen champion and the type of monster.
		let rngArray = [];
		while(rngArray.length < numberOfTreasures) {
			let number = Math.floor(Math.random() * props.generalState.items[props.generalState.currentMonster.monsterType][props.generalState.currentPlanet].length);
			if (rngArray.indexOf(number) === -1) {
				rngArray.push(number)
			}
		}

		return (

			//map though the array, and return a TreasureCard for each random numbers depending on the type of reward.
			<div className={classes.Reward}>
				{rngArray.map((rng, index)=>{
					return (
						
						<TreasureCard
							text={props.generalState.items[props.generalState.currentMonster.monsterType][props.generalState.currentPlanet][rng].text}
							name={props.generalState.items[props.generalState.currentMonster.monsterType][props.generalState.currentPlanet][rng].name}
							portrait={props.generalState.items[props.generalState.currentMonster.monsterType][props.generalState.currentPlanet][rng].portrait}
							bottomText={props.generalState.items[props.generalState.currentMonster.monsterType][props.generalState.currentPlanet][rng].bottomText}
							effect={props.generalState.items[props.generalState.currentMonster.monsterType][props.generalState.currentPlanet][rng].effect}
							choose={() => props.chooseReward(props.generalState.items[props.generalState.currentMonster.monsterType][props.generalState.currentPlanet][rng])}
							key={index}
						/>
					)
				})}
				<p className={classes.Title}>Choose one reward !</p>
			</div>
		)
	
}

const mapStateToProps = state => {
    return {
		generalState: state.generalReducer,
        rewardState: state.rewardReducer,
    };
};

const mapDispatchToProps = dispatch => {
    return {
		chooseReward: (treasure) => dispatch(actionCreators.chooseRewardThenCheckUpdates(treasure)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseRewardScreen);