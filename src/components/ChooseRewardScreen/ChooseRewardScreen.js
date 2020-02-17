import React, {Component} from 'react';
import classes from './ChooseRewardScreen.module.css';
import TreasureCard from '../Cards/TreasureCard';
import colt from '../../AllIcons/Colt.png'



class chooseRewardScreen extends Component {

	state = {
		normal: [
			{
			name: 'Strengh potion',
			portrait: 'https://cdn.clipart.email/94dade9339048f9f95974aa0fcc91c56_secret-potion-open-by-adorabless-on-deviantart_568-661.png',
			text: "A mystic potion.",
			type :'magic',
			bottomText: 'One use only',
			effect: 'Strengh + 2',
			},
			{
			name: 'Health potion',
			portrait: '"https://cdn.clipart.email/5e774751eb1faa91e0ebcad1103bcf4c_level-2-mana-potion-sold-out-by-adorabless-on-deviantart_568-661.png"',
			text: "A healthy potion.",
			type :'magic',
			bottomText: 'One use only',
			effect: 'Hp + 1'
			},
			{
			name: 'Helmet',
			portrait: '"https://tos.neet.tv/images/weapon/icon_item_shield_7.png"',
			text: "A tactical helmet.",
			type: 'defense',
			bottomText: 'Permanent effect',
			effect: 'Defense + 1',
			defense: 1,
			},
			{
			name: 'Iron Shield',
			portrait: '"https://www.freeiconspng.com/uploads/shield-png-2.png"',
			text: "A solid shield.",
			type: 'defense',
			bottomText: 'Permanent effect',
			effect: 'Defense + 2',
			defense: 2,
			},
			{
			name: 'Colt',
			portrait: {colt},
			text: "A good gun.",
			type: 'attack',
			bottomText: 'Permanent effect',
			effect: 'Strengh + 1',
			strengh: 1,
			},
			{
			name: 'Whip',
			portrait: '"https://i.dlpng.com/static/png/62941_preview.png"',
			text: "A simple whip .",
			type: 'attack',
			bottomText: 'Permanent effect',
			effect: 'Strengh + 1',
			strengh: 1,
			},
			{
			name: 'Hunter knife',
			portrait: '"src\AllIcons\HunterKnife.png"',
			text: "A powerfull sword.",
			type: 'attack',
			bottomText: 'Permanent effect',
			effect: 'Strengh + 2',
			strengh: 2,
			},
		],
		super: [
			{
			name: 'Golden sword',
			portrait: '"https://iconbug.com/data/c6/512/47ea3824730d9da3ad66a6e91f0d1981.png"',
			text: "An awesome sword.",
			type: 'attack',
			bottomText: 'Permanent effect',
			effect: 'Strengh + 3',
			strengh: 3,
			},
			{
			name: 'Super potion',
			portrait: '"https://i.ya-webdesign.com/images/mana-potion-icon-png.png"',
			text: "A healthy potion.",
			type :'magic',
			bottomText: 'One use only',
			effect: 'Hp + 1. Strengh + 2.'
			},
			{
			name: 'Golden shield',
			portrait: '"https://www.freepngimg.com/thumb/security_shield/7-2-shield-png-file-thumb.png"',
			text: "An awesome shield.",
			type: 'defense',
			bottomText: 'Permanent effect',
			effect: 'Defense + 3',
			defense: 3,
			},
		]
	};

	shouldComponentUpdate(nextProps, nextState) {
 		return this.state.value !== nextState.value;
	};

	render() {

		let numberOfTreasures = 3;
		if (this.props.name === 'Eldar captain') {numberOfTreasures = 4 }

		let rngArray = [];
		if (this.props.whichReward === 'normal') {
			while(rngArray.length < numberOfTreasures) {
				let number = Math.floor(Math.random() * 6);
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

		const whichReward = this.props.whichReward;

		return (

			<div className={classes.Reward}>
				{rngArray.map((rng, index)=>{
					return (
						<TreasureCard
							onClick={this.props.choose}
							text={this.state[whichReward][rng].text}
							name={this.state[whichReward][rng].name}
							portrait={this.state[whichReward][rng].portrait}
							bottomText={this.state[whichReward][rng].bottomText}
							effect={this.state[whichReward][rng].effect}
							choose={(() => this.props.choose(this.state[whichReward][rng]))}
							key={index}
						/>
					)
				})}
				<p className={classes.Title}>Choose one reward !</p>
			</div>
		)
	}
}

export default chooseRewardScreen;