import React, {Component} from 'react';
import BasicCard from '../Cards/ChampionCard';
import classes from './ChooseCharScreen.module.css'

class chooseCharScreen extends Component {
	state = {
		champion: [
			{
			name: 'Eldar captain',
			portrait: '"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaP-JrdkZe93nv38CPRPPtK4u7RFPzU_yjxhHmb742NYCoK2_W"',
			power: "You can choose among one extra treasure.",
			level: 1,
			health: 5,
			strengh: 10,
			defense: 8,
			},
			{
			name: 'Ork boss',
			portrait: '"https://cdna.artstation.com/p/assets/images/images/015/888/626/large/edouard-boccard-art-bfg-portrait-bloodaxes-01.jpg?1550058286"',
			power: "Double all your potions effectiveness.",
			level: 1,
			health: 1,
			strengh: -10,
			defense: 8,
			},
			{
			name: 'Tau commander',
			portrait: '"https://wh40kart.im/_images/0d20db06ce3437b6d218031098b9aef3.jpg"',
			power: "You can choose to escape from a monster once per level.",
			level: 1,
			health: 5,
			strengh: 1,
			defense: 8,
			},
			{
			name: 'Space marine lord',
			portrait: '"https://vignette.wikia.nocookie.net/warhammer40k/images/f/f9/Gabriel_Angelos_Portrait.jpg/revision/latest?cb=20100615040020"',
			power: "You can reroll your defense dice once per fight.",
			level: 1,
			health: 5,
			strengh: 1,
			defense: 8,
			},

		]
	}

	choose = () => {

	}

	render() {
		return (
			<div className={classes.Div}>
				<h1 className={classes.Title} >Choose your champion for battle !</h1>
				{this.state.champion.map((champ, index) => {
					return (
						<BasicCard
							name={this.state.champion[index].name}
							portrait={this.state.champion[index].portrait}
							power={this.state.champion[index].power}
							level={this.state.champion[index].level}
							health={this.state.champion[index].health}
							choose={() => this.props.choosing(champ)}
							key={index}
						/>
					);
				})}
			</div>
		)
	}

};

export default chooseCharScreen;