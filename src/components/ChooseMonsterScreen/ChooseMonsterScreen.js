import React, {Component} from 'react';
import MonsterCard from '../Cards/MonsterCard';
import classes from './ChooseMonsterScreen.module.css';

class chooseMonsterScreen extends Component{

	constructor(props) {
		super(props);

		this.state ={
			monster: {
				area1: [
					{
					name: 'Gretchin',
					portrait: '"https://i.pinimg.com/736x/66/4b/63/664b63471ddb229de325e1a0ebec98b7.jpg"',
					text: "10 Xp, 0 treasure",
					level: 1,
					experience: 10,
					treasure: 0,
					strengh: 4,
					defense: 4,
					},
					{
					name: 'Golbin',
					portrait: '"https://i.pinimg.com/originals/81/7e/5b/817e5bac7aec46a8eddd2b2f160e1e33.jpg"',
					text: "10 Xp, 0 treasure",
					level: 2,
					experience: 10,
					treasure: 0,
					strengh: 4,
					defense: 4,
					},
					{
					name: 'Driver ork',
					portrait: '"https://i.imgur.com/bsy7yNY.jpg"',
					text: "10 Xp, 0 treasure",
					level: 3,
					experience: 10,
					treasure: 0,
					strengh: 5,
					defense: 5,
					},
					{
					name: 'Commando ork',
					portrait: '"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSA_Gjxzdc_yxPu3sxjzZoFrrGjzO25PyCN2GbeS9HMlBbs_guF"',
					text: "20 Xp, 1 treasure",
					level: 4,
					experience: 20,
					treasure: 1,
					strengh: 5,
					defense: 5,
					},
					{
					name: 'Bionic ork',
					portrait: '"https://i.pinimg.com/originals/4e/e9/6a/4ee96ac75d576c6868b4c2e8f380d6e0.jpg"',
					text: "20 Xp, 1 treasure",
					level: 5,
					experience: 20,
					treasure: 1,
					strengh: 6,
					defense: 4,
					},
					{
					name: 'Gunzer ork',
					portrait: 'https://steamuserimages-a.akamaihd.net/ugc/540755081255224268/98AE4176FDAA3C74F4EAF693DB60A9C637E7FC66/',
					text: "20 Xp, 1 treasure",
					level: 6,
					experience: 20,
					treasure: 1,
					strengh: 6,
					defense: 4,
					},
					{
					name: 'Mecano ork',
					portrait: '"https://vignette.wikia.nocookie.net/d__/images/1/1c/Dow2_ork_kommando_nob_portrait.png/revision/latest/top-crop/width/300/height/300?cb=20100822170115&path-prefix=dow"',
					text: "30 Xp, 1 treasure",
					level: 7,
					experience: 30,
					treasure: 1,
					strengh: 4,
					defense: 6,
					},
					{
					name: 'Black ork',
					portrait: '"https://i.pinimg.com/originals/8c/c1/28/8cc12838110cc1ede640d6f21de0c320.jpg"',
					text: "30 Xp, 1 treasure",
					level: 8,
					experience: 30,
					treasure: 1,
					strengh: 4,
					defense: 6,
					},
					{
					name: 'Mad ork',
					portrait: 'https://wh40kart.im/_images/3f0106998b52a41c7984f2e627a62d42.jpg',
					text: "30 Xp, 1 treasure",
					level: 9,
					experience: 30,
					treasure: 1,
					strengh: 6,
					defense: 6,
					},
					{
					name: 'Commander ork',
					portrait: '"https://vignette.wikia.nocookie.net/d__/images/f/fd/Dow2_ork_weirdboy_portrait.png/revision/latest?cb=20100822172106&path-prefix=dow"',
					text: "50 Xp, 1 treasure",
					level: 10,
					experience: 50,
					treasure: 1,
					strengh: 7,
					defense: 7,
					},
				],
				area2: {}
			},

			boss: {
				area1: [
					{
						name: 'Warboss ork',
						portrait: '"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4e9174e7-6c59-43ec-a440-8e66a449d264/d8t29vd-ae5360b3-72c0-4f31-bf06-56adc9311228.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRlOTE3NGU3LTZjNTktNDNlYy1hNDQwLThlNjZhNDQ5ZDI2NFwvZDh0Mjl2ZC1hZTUzNjBiMy03MmMwLTRmMzEtYmYwNi01NmFkYzkzMTEyMjguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1w1MBV0d1OKFKmycpuTgOsciaV6TlWQzY9r_hUsmsic"',
						text: "1 boss treasure",
						level: 12,
						experience: 50,
						treasure: 1,
						strengh: 8,
						defense: 8,
					},
					{
						name: '"Medic" ork',
						portrait: '"https://wh40kart.im/_images/7dcbf5eb9297c1541a49176c26da1b53.jpg"',
						text: "1 boss treasure",
						level: 12,
						experience: 50,
						treasure: 1,
						strengh: 8,
						defense: 8,
					},
					{
						name: 'Fleet captain ork',
						portrait: '"https://cdna.artstation.com/p/assets/images/images/015/888/626/large/edouard-boccard-art-bfg-portrait-bloodaxes-01.jpg?1550058286"',
						text: "1 boss treasure",
						level: 12,
						experience: 50,
						treasure: 1,
						strengh: 8,
						defense: 8,
					},
					]
				
			},
			chosenMonster : null,
			area: 'area' + this.props.area.toString(),
			monsterType: this.props.monsterType,
		}
	}

	chooseMonster = (data) => {

		this.setState({chosenMonster: data}, () => {this.toGiveToParent()})
	
	}

	toGiveToParent = () => {
		const info = this.state.chosenMonster;
		this.props.dataFromMonster(info)
	}

	
	render() {
		//set a range of random numbers, based on the type of monster
		let rngArray = [];
		if (this.state.monsterType === 'monster') {
			while(rngArray.length < 3) {
				let number = Math.floor(Math.random() * 10);
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
			//Map the array of numbers and create a monsterCard for each of the element, based on monster type (normal or boss)
				this.state.chosenMonster === null ?
					<div className={classes.MonsterCards}>
						{rngArray.map((rng, index)=> {
							return (
									<MonsterCard 
										name={this.state[this.state.monsterType][this.state.area][rng].name}
										portrait={this.state[this.state.monsterType][this.state.area][rng].portrait}
										text={this.state[this.state.monsterType][this.state.area][rng].text}
										level={this.state[this.state.monsterType][this.state.area][rng].level}
										strengh={this.state[this.state.monsterType][this.state.area][rng].strengh}
										defense={this.state[this.state.monsterType][this.state.area][rng].defense}
										treasure={this.state[this.state.monsterType][this.state.area][rng].treasure}
										experience={this.state[this.state.monsterType][this.state.area][rng].experience}
										chooseMonster={()=>this.chooseMonster(this.state[this.state.monsterType][this.state.area][rng])}
										key={index}
									/>
							)
						})}
						<p className={classes.Title}>Choose your fight wisely</p>
					</div>:
							
				//when monster is clicked, display the chosen one
					<div style={{marginTop: '200px', marginLeft: '20px', float:'left'}}>
						<MonsterCard 
							name={this.state.chosenMonster.name}
							portrait={this.state.chosenMonster.portrait}
							text={this.state.chosenMonster.text}
							level={this.state.chosenMonster.level}
							strengh={this.state.chosenMonster.strengh}
							defense={this.state.chosenMonster.defense}
							treasure={this.state.chosenMonster.treasure}
							experience={this.state.chosenMonster.experience}
						/>
					</div>
		);
	}
};

export default chooseMonsterScreen;