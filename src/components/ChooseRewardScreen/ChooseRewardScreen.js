import React, {Component} from 'react';
import classes from './ChooseRewardScreen.module.css';
import TreasureCard from '../Cards/TreasureCard';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';


class chooseRewardScreen extends Component {


	render() {

		//set an array's length depending on the champion's player choice
		let numberOfTreasures = 3;
		if (this.props.generalState.name === 'Eldar captain' && this.props.generalState.currentMonster.monsterType === 'normal') {numberOfTreasures = 4 }

		//set an array of random numbers, depending on the chosen champion and the type of monster.
		let rngArray = [];
		while(rngArray.length < numberOfTreasures) {
			let number = Math.floor(Math.random() * this.props.rewardState[this.props.generalState.currentMonster.monsterType][this.props.generalState.area].length);
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
							text={this.props.rewardState[this.props.generalState.currentMonster.monsterType][this.props.generalState.area][rng].text}
							name={this.props.rewardState[this.props.generalState.currentMonster.monsterType][this.props.generalState.area][rng].name}
							portrait={this.props.rewardState[this.props.generalState.currentMonster.monsterType][this.props.generalState.area][rng].portrait}
							bottomText={this.props.rewardState[this.props.generalState.currentMonster.monsterType][this.props.generalState.area][rng].bottomText}
							effect={this.props.rewardState[this.props.generalState.currentMonster.monsterType][this.props.generalState.area][rng].effect}
							choose={() => this.props.chooseReward(this.props.rewardState[this.props.generalState.currentMonster.monsterType][this.props.generalState.area][rng])}
							key={index}
						/>
					)
				})}
				{/*add a special card for the "gold" reward, depending on the gold property of chosen monster */}
				<TreasureCard
					effect={ this.props.generalState.currentMonster.gold + ' gold coins'}
					name='Gold coins'
					portrait='/images/GoldStack.png'
					bottomText='To spend at shop'
					text='You become rich !'
					choose={(() => this.props.chooseReward(this.props.generalState.currentMonster.gold))}
				/>
				<p className={classes.Title}>Choose one reward !</p>
			</div>
		)
	
	}
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

export default connect(mapStateToProps, mapDispatchToProps)(chooseRewardScreen);