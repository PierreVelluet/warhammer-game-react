import React, {Component} from 'react';
import classes from './ChooseRewardScreen.module.css';
import TreasureCard from '../Cards/TreasureCard';



class chooseRewardScreen extends Component {

	state = {
		normal: [
			{
			name: 'Dope syringe',
			portrait: '/images/MagicItems/Syringe.png',
			text: "A mystic substance.",
			type :'magic',
			bottomText: 'One use only',
			effect: 'Strengh + 3',
			tooltip: 'Dope syringe : Strengh + 3.'
			},
			{
			name: 'Painkillers',
			portrait: '/images/MagicItems/Pills.png',
			text: "A healthy pill.",
			type :'magic',
			bottomText: 'One use only',
			effect: 'Hp + 2',
			tooltip: 'Painkillers : Hp + 2.'
			},
			{
			name: 'Helmet',
			portrait: '/images/DefenseItems/Helmet.png',
			text: "A tactical helmet.",
			type: 'defense',
			bottomText: 'Permanent effect',
			effect: 'Defense + 1',
			defense: 1,
			tooltip: 'Helmet : Defense +1.'
			},
			{
			name: 'Iron fist',
			portrait: '/images/DefenseItems/Fist.png',
			text: "A solid glove.",
			type: 'defense',
			bottomText: 'Permanent effect',
			effect: 'Defense + 1',
			defense: 1,
			tooltip: 'Iron fist : Defense + 1.'
			},
			{
			name: 'Bullet-proof vest',
			portrait: '/images/DefenseItems/Vest.png',
			text: "Fear bullets no more.",
			type: 'defense',
			bottomText: 'Permanent effect',
			effect: 'Defense + 2',
			defense: 2,
			tooltip: 'Bullet-proof vest : Defense + 2.'
			},
			{
			name: 'Bolter',
			portrait: '/images/StrenghItems/Bolter.png' ,
			text: "A good gun.",
			type: 'attack',
			bottomText: 'Permanent effect',
			effect: 'Strengh + 1',
			strengh: 1,
			tooltip: 'Bolter : Strengh + 1.'
			},
			{
			name: 'Eldary laser',
			portrait: '/images/StrenghItems/EldaryLaser.png' ,
			text: "A good laser.",
			type: 'attack',
			bottomText: 'Permanent effect',
			effect: 'Strengh + 1',
			strengh: 1,
			tooltip: 'Eldary laser : Strengh + 1.'
			},
			{
			name: 'Plasma gun',
			portrait: '/images/StrenghItems/PlasmaGun.png' ,
			text: "A good laser.",
			type: 'attack',
			bottomText: 'Permanent effect',
			effect: 'Strengh + 2',
			strengh: 2,
			tooltip: 'Plasma gun : Strengh + 2.'
			},
			{
			name: 'Axe',
			portrait: '/images/StrenghItems/Axe.png',
			text: "A strong weapon.",
			type: 'attack',
			bottomText: 'Permanent effect',
			effect: 'Strengh + 1',
			strengh: 1,
			tooltip: 'Axe : Strengh + 1.'
			},
			{
			name: 'Sword',
			portrait: '/images/StrenghItems/Sword.png',
			text: "A simple sword.",
			type: 'attack',
			bottomText: 'Permanent effect',
			effect: 'Strengh + 1',
			strengh: 1,
			tooltip: 'Sword : Strengh + 1.'
			},
			{
			name: 'Chainsword',
			portrait: '/images/StrenghItems/Chainsword.png',
			text: "A powerfull sword.",
			type: 'attack',
			bottomText: 'Permanent effect',
			effect: 'Strengh + 2',
			strengh: 2,
			tooltip: 'Chainsword : Strengh + 2.'
			},
			
		],
		super: [
			{
			name: 'Heavy gauntlet',
			portrait: '/images/StrenghItems/HeavyGauntlet.png',
			text: "An awesome sword.",
			type: 'attack',
			bottomText: 'Permanent effect',
			effect: 'Strengh + 3',
			strengh: 3,
			tooltip: 'Heavy gauntlet : Strengh + 3.'
			},
			{
			name: 'Bi-pills',
			portrait: '/images/MagicItems/BiPills.png',
			text: "A healthy potion.",
			type :'magic',
			bottomText: 'One use only',
			effect: 'Hp + 2. Strengh + 3.',
			tooltip: 'Bi-pills : Hp + 2 & Strengh + 3. (this turn only)'
			},
			{
			name: 'Heroic shield',
			portrait: '/images/DefenseItems/HeroicShield.png',
			text: "An awesome shield.",
			type: 'defense',
			bottomText: 'Permanent effect',
			effect: 'Defense + 3',
			defense: 3,
			tooltip: 'Heroic shield : Defense + 3.'
			},
		]
	};

	shouldComponentUpdate(nextProps, nextState) {
 		return this.state.value !== nextState.value;
	};

	render() {

		let numberOfTreasures = 3;
		if (this.props.name === 'Eldar captain') {numberOfTreasures = 4 }


		//set an array of random numbers, depending on the chosen champion and the type of treasures.
		let rngArray = [];
		if (this.props.whichReward === 'normal') {
			while(rngArray.length < numberOfTreasures) {
				let number = Math.floor(Math.random() * this.state.normal.length);
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

			//map though the array, and return a TreasureCard for each random numbers depending on the type of reward.
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