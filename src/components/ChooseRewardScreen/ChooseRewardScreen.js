import React, {Component} from 'react';
import classes from './ChooseRewardScreen.module.css';
import TreasureCard from '../Cards/TreasureCard';
import { connect } from 'react-redux';


class chooseRewardScreen extends Component {

	constructor(props) {
		super(props);

		this.state = {
			chosenMonster: this.props.chosenMonster,
			itemsLevel: 'level' + this.props.area.toString(),
		};// end of state
	}// end of constructor


	shouldComponentUpdate(nextProps, nextState) {
 		return this.state.value !== nextState.value;
	};

	render() {

		let numberOfTreasures = 3;
		if (this.props.name === 'Eldar captain') {numberOfTreasures = 4 }
		const whichReward = this.props.whichReward;
		const itemsLevel = this.state.itemsLevel;


		//set an array of random numbers, depending on the chosen champion and the type of treasures.
		let rngArray = [];
		if (this.props.whichReward === 'normal') {
			while(rngArray.length < numberOfTreasures) {
				let number = Math.floor(Math.random() * this.props.state.normal[itemsLevel].length);
				if (rngArray.indexOf(number) === -1) {
					rngArray.push(number)
				}
			}
		}else {
			while(rngArray.length < 3) {
				let number = Math.floor(Math.random() * 3);
				if (rngArray.indexOf(number) === -1) {
					rngArray.push(number)
				}
			}
		}


		

		return (

			//map though the array, and return a TreasureCard for each random numbers depending on the type of reward.
			<div className={classes.Reward}>
				{rngArray.map((rng, index)=>{
					return (
						<TreasureCard
							text={this.props.state[whichReward][itemsLevel][rng].text}
							name={this.props.state[whichReward][itemsLevel][rng].name}
							portrait={this.props.state[whichReward][itemsLevel][rng].portrait}
							bottomText={this.props.state[whichReward][itemsLevel][rng].bottomText}
							effect={this.props.state[whichReward][itemsLevel][rng].effect}
							choose={(() => this.props.choose(this.props.state[whichReward][itemsLevel][rng]))}
							key={index}
						/>
					)
				})}

				<TreasureCard
					effect={ this.state.chosenMonster.gold + ' gold coins'}
					name='Gold coins'
					portrait='/images/GoldStack.png'
					bottomText='To spend at shop'
					text='You become rich !'
					choose={(() => this.props.choose(this.state.chosenMonster.gold))}
				/>
				<p className={classes.Title}>Choose one reward !</p>
			</div>
		)
	}
}

const mapStateToProps = state => {
    return {
        state: state.rewardReducer,
    };
};

export default connect(mapStateToProps)(chooseRewardScreen);