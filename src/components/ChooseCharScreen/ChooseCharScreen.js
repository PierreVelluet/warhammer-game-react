import React, {Component} from 'react';
import ChampionCard from '../Cards/ChampionCard';
import classes from './ChooseCharScreen.module.css'

class chooseCharScreen extends Component {
	state = {
		champion: [
			{
			name: 'Eldar captain',
			portrait: '"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaP-JrdkZe93nv38CPRPPtK4u7RFPzU_yjxhHmb742NYCoK2_W"',
			powerName: "Treasure hunter",
			power: "you can choose among one extra treasure.",
			level: 1,
			health: 5,
			strengh: 1,
			defense: 8,
			},
			{
			name: 'Apothecary',
			portrait: '"https://steamuserimages-a.akamaihd.net/ugc/309989521282467328/0CDEB65710274E292A4415B417FC692E0C5BF435/"',
			powerName: "Medic",
			power: "double all your medics effectiveness.",
			level: 1,
			health: 5,
			strengh: 1,
			defense: 8,
			},
			{
			name: 'Tau commander',
			portrait: '"https://wh40kart.im/_images/0d20db06ce3437b6d218031098b9aef3.jpg"',
			powerName: "Reconnaissance drone",
			power: " you can choose your fights among one extra ennemy.",
			level: 1,
			health: 5,
			strengh: 1,
			defense: 8,
			},
			{
			name: 'Ork warboss',
			portrait: '"https://i.pinimg.com/originals/0c/7e/42/0c7e42516d24dda0623159684b3cd0dd.png"',
			powerName: "Force of nature",
			power: "start the adventure level 2, hence + 1 strengh & + 1 defense.",
			level: 2,
			health: 5,
			strengh: 2,
			defense: 9,
			},

		]
	}

	choose = () => {

	}

	render() {
		return (
			<div className={classes.Div}>
				<h1 className={classes.Title} >Choose your spaceship captain !</h1>
				{this.state.champion.map((champ, index) => {
					return (
						<ChampionCard
							name={this.state.champion[index].name}
							portrait={this.state.champion[index].portrait}
							power={this.state.champion[index].power}
							powerName={this.state.champion[index].powerName}
							strengh={this.state.champion[index].strengh}
							defense={this.state.champion[index].defense}
							health={this.state.champion[index].health}
							level={this.state.champion[index].level}
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