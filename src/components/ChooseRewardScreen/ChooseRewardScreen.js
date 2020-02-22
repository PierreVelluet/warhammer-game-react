import React, {Component} from 'react';
import classes from './ChooseRewardScreen.module.css';
import TreasureCard from '../Cards/TreasureCard';



class chooseRewardScreen extends Component {

	constructor(props) {
		super(props);

		this.state = {
			normal: {
				level1: [
					{
					name: 'Dope syringe',
					portrait: '/images/MagicItems/Syringe.png',
					text: "A mystic substance.",
					type :'specialCards',
					bottomText: 'One use only',
					effect: 'Strengh + 3',
					tooltip: 'Dope syringe : Strengh + 3.'
					},
					{
					name: 'Painkillers',
					portrait: '/images/MagicItems/Pills.png',
					text: "A healthy pill.",
					type :'specialCards',
					bottomText: 'One use only',
					effect: 'Hp + 2',
					tooltip: 'Painkillers : Hp + 2.'
					},
					{
					name: 'Helmet',
					portrait: '/images/DefenseItems/Helmet.png',
					text: "A tactical helmet.",
					type: 'defenseCards',
					bottomText: 'Permanent effect',
					effect: 'Defense + 1',
					defense: 1,
					tooltip: 'Helmet : Defense +1.'
					},
					{
					name: 'Iron fist',
					portrait: '/images/DefenseItems/Fist.png',
					text: "A solid glove.",
					type: 'defenseCards',
					bottomText: 'Permanent effect',
					effect: 'Defense + 1',
					defense: 1,
					tooltip: 'Iron fist : Defense + 1.'
					},
					
					{
					name: 'Bolter',
					portrait: '/images/StrenghItems/Bolter.png' ,
					text: "A good gun.",
					type: 'attackCards',
					bottomText: 'Permanent effect',
					effect: 'Strengh + 1',
					strengh: 1,
					tooltip: 'Bolter : Strengh + 1.'
					},
					{
					name: 'Eldary laser',
					portrait: '/images/StrenghItems/EldaryLaser.png' ,
					text: "A good laser.",
					type: 'attackCards',
					bottomText: 'Permanent effect',
					effect: 'Strengh + 1',
					strengh: 1,
					tooltip: 'Eldary laser : Strengh + 1.'
					},
					{
					name: 'Sword',
					portrait: '/images/StrenghItems/Sword.png',
					text: "A simple sword.",
					type: 'attackCards',
					bottomText: 'Permanent effect',
					effect: 'Strengh + 1',
					strengh: 1,
					tooltip: 'Sword : Strengh + 1.'
					},
				],
				level2: [
					{
					name: 'Frag grenade',
					portrait: '/images/FragGrenade.png',
					text: "Bang !",
					type :'specialCards',
					bottomText: 'One use only',
					effect: 'Strengh + 5',
					tooltip: 'Frag grenade : Strengh + 5.'
					},
					{
					name: 'Vital kit',
					portrait: '/images/VitalKit.png',
					text: "Not junkie.",
					type :'specialCards',
					bottomText: 'One use only',
					effect: 'Hp + 3',
					tooltip: 'Vital kit : Hp + 3.'
					},
					{
					name: 'Commando vest',
					portrait: '/images/CommandoVest.png',
					text: "A tactical vest.",
					type: 'defenseCards',
					bottomText: 'Permanent effect',
					effect: 'Defense + 2',
					defense: 2,
					tooltip: 'Helmet : Defense +2.'
					},
					{
					name: 'Helmet 2.0',
					portrait: '/images/Helmet2.0.png',
					text: "A solid helmet.",
					type: 'defenseCards',
					bottomText: 'Permanent effect',
					effect: 'Defense + 2',
					defense: 2,
					tooltip: 'Iron fist : Defense + 2.'
					},
					{
					name: 'Laser pistol',
					portrait: '/images/LaserPistol.png' ,
					text: "A good pistol.",
					type: 'attackCards',
					bottomText: 'Permanent effect',
					effect: 'Strengh + 2',
					strengh: 2,
					tooltip: 'Bolter : Strengh + 2.'
					},
					{
					name: 'Crusader gun',
					portrait: '/images/CrusaderGun.png' ,
					text: "Crusading...",
					type: 'attackCards',
					bottomText: 'Permanent effect',
					effect: 'Strengh + 2',
					strengh: 2,
					tooltip: 'Eldary laser : Strengh + 2.'
					},
					{
					name: 'Hammer',
					portrait: '/images/Hammer.png',
					text: "A solid hammer.",
					type: 'attackCards',
					bottomText: 'Permanent effect',
					effect: 'Strengh + 2',
					strengh: 2,
					tooltip: 'Sword : Strengh + 2.'
					},
				],
					
			},
			super: {
				level1: [
					{
					name: 'Heavy gauntlet',
					portrait: '/images/StrenghItems/HeavyGauntlet.png',
					text: "An awesome sword.",
					type: 'attackCards',
					bottomText: 'Permanent effect',
					effect: 'Strengh + 2',
					strengh: 2,
					tooltip: 'Heavy gauntlet : Strengh + 2.',
					},
					{
					name: 'Bi-pills',
					portrait: '/images/MagicItems/BiPills.png',
					text: "Not so healthy.",
					type :'specialCards',
					bottomText: 'One use only',
					effect: 'Hp + 2. Strengh + 3.',
					tooltip: 'Bi-pills : Hp + 2 & Strengh + 3. (this turn only)',
					},
					{
					name: 'Heroic shield',
					portrait: '/images/DefenseItems/HeroicShield.png',
					text: "An awesome shield.",
					type: 'defenseCards',
					bottomText: 'Permanent effect',
					effect: 'Defense + 2',
					defense: 2,
					tooltip: 'Heroic shield : Defense + 2.',
					},
				],
				level2: [
					{
					name: 'Sniper rifle',
					portrait: '/images/SniperRifle.png',
					text: "Never miss.",
					type: 'attackCards',
					bottomText: 'Permanent effect',
					effect: 'Strengh + 3',
					strengh: 3,
					tooltip: 'Sniper rifle : Strengh + 3.',
					},
					{
					name: 'Disco grenade',
					portrait: '/images/DiscoGrenade.png',
					text: "Pshit then boom.",
					type :'specialCards',
					bottomText: 'One use only',
					effect: 'Strengh + 8.',
					tooltip: 'Disco grenade : Strengh + 8.',
					},
					{
					name: 'Force field',
					portrait: '/images/ForceField.png',
					text: "Can't go through.",
					type: 'defenseCards',
					bottomText: 'Permanent effect',
					effect: 'Defense + 3',
					defense: 3,
					tooltip: 'Force field : Defense + 3.',
					},
				],
					
			},
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
				let number = Math.floor(Math.random() * this.state.normal[itemsLevel].length);
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
							text={this.state[whichReward][itemsLevel][rng].text}
							name={this.state[whichReward][itemsLevel][rng].name}
							portrait={this.state[whichReward][itemsLevel][rng].portrait}
							bottomText={this.state[whichReward][itemsLevel][rng].bottomText}
							effect={this.state[whichReward][itemsLevel][rng].effect}
							choose={(() => this.props.choose(this.state[whichReward][itemsLevel][rng]))}
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

export default chooseRewardScreen;