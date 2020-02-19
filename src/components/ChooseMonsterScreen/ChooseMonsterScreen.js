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
					text: "No special rules",
					level: 1,
					experience: 10,
					treasure: 0,
					strengh: 4,
					defense: 4,
					gold: 1,
					},
					{
					name: 'Golbin',
					portrait: '"https://i.pinimg.com/originals/81/7e/5b/817e5bac7aec46a8eddd2b2f160e1e33.jpg"',
					text: "No special rules",
					level: 2,
					experience: 10,
					treasure: 0,
					strengh: 4,
					defense: 4,
					gold: 1,
					},
					{
					name: 'Driver ork',
					portrait: '"https://i.imgur.com/bsy7yNY.jpg"',
					text: "No special rules",
					level: 3,
					experience: 10,
					treasure: 0,
					strengh: 5,
					defense: 5,
					gold: 2,
					},
					{
					name: 'Commando ork',
					portrait: '"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSA_Gjxzdc_yxPu3sxjzZoFrrGjzO25PyCN2GbeS9HMlBbs_guF"',
					text: "No special rules",
					level: 4,
					experience: 20,
					treasure: 1,
					strengh: 5,
					defense: 5,
					gold: 2,
					},
					{
					name: 'Bionic ork',
					portrait: '"https://i.pinimg.com/originals/4e/e9/6a/4ee96ac75d576c6868b4c2e8f380d6e0.jpg"',
					text: "No special rules",
					level: 5,
					experience: 20,
					treasure: 1,
					strengh: 6,
					defense: 4,
					gold: 3,
					},
					{
					name: 'Gunzer ork',
					portrait: 'https://steamuserimages-a.akamaihd.net/ugc/540755081255224268/98AE4176FDAA3C74F4EAF693DB60A9C637E7FC66/',
					text: "No special rules",
					level: 6,
					experience: 20,
					treasure: 1,
					strengh: 6,
					defense: 4,
					gold: 3,
					},
					{
					name: 'Mecano ork',
					portrait: '"https://vignette.wikia.nocookie.net/d__/images/1/1c/Dow2_ork_kommando_nob_portrait.png/revision/latest/top-crop/width/300/height/300?cb=20100822170115&path-prefix=dow"',
					text: "No special rules",
					level: 7,
					experience: 30,
					treasure: 1,
					strengh: 4,
					defense: 6,
					gold: 4,
					},
					{
					name: 'Black ork',
					portrait: '"https://i.pinimg.com/originals/8c/c1/28/8cc12838110cc1ede640d6f21de0c320.jpg"',
					text: "No special rules",
					level: 8,
					experience: 30,
					treasure: 1,
					strengh: 4,
					defense: 6,
					gold: 4,
					},
					{
					name: 'Mad ork',
					portrait: 'https://wh40kart.im/_images/3f0106998b52a41c7984f2e627a62d42.jpg',
					text: "No special rules",
					level: 9,
					experience: 30,
					treasure: 1,
					strengh: 6,
					defense: 6,
					gold: 5,
					},
					{
					name: 'Commander ork',
					portrait: '"https://vignette.wikia.nocookie.net/d__/images/f/fd/Dow2_ork_weirdboy_portrait.png/revision/latest?cb=20100822172106&path-prefix=dow"',
					text: "No special rules",
					level: 10,
					experience: 50,
					treasure: 1,
					strengh: 7,
					defense: 7,
					gold: 5,
					},
				],
				area2: [
					
					{
					name: 'Termagant',
					portrait: '"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8fd9b056-0201-4c9a-9ab0-d98df3fec333/d78025b-c52adf2a-fccb-4dcd-824e-d19a64b42ff2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhmZDliMDU2LTAyMDEtNGM5YS05YWIwLWQ5OGRmM2ZlYzMzM1wvZDc4MDI1Yi1jNTJhZGYyYS1mY2NiLTRkY2QtODI0ZS1kMTlhNjRiNDJmZjIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MfHEhWo3kxbIm2xBmHAp_NYP_CFZzc5m6-PwXnK0ovA"',
					text: "No special rules",
					level: 3,
					experience: 10,
					treasure: 0,
					strengh: 8,
					defense: 8,
					gold: 2,
					},
					{
					name: 'Hormagant',
					portrait: 'https://i.pinimg.com/originals/e2/ec/cf/e2eccf5ab538fdccd90556e5a9629c9d.jpg',
					text: "No special rules",
					level: 6,
					experience: 20,
					treasure: 1,
					strengh: 8,
					defense: 8,
					gold: 2,
					},
					{
					name: 'Genestealer',
					portrait: '"https://vignette.wikia.nocookie.net/dark-heresy-rp/images/4/41/Genestealer_attack.jpg/revision/latest/scale-to-width-down/340?cb=20140617041035"',
					text: "No special rules",
					level: 1,
					experience: 10,
					treasure: 0,
					strengh: 9,
					defense: 9,
					gold: 4,
					},
					{
					name: 'Warrior',
					portrait: '"https://wh40k.lexicanum.com/mediawiki/images/thumb/2/26/TyranidWarriorArt6th.jpg/280px-TyranidWarriorArt6th.jpg"',
					text: "No special rules",
					level: 2,
					experience: 10,
					treasure: 0,
					strengh: 9,
					defense: 9,
					gold: 4,
					},
					{
					name: 'SwarmLord',
					portrait: '"https://vignette.wikia.nocookie.net/warhammer40k/images/d/d0/Swarmlord.png/revision/latest/scale-to-width-down/340?cb=20160103170035"',
					text: "No special rules",
					level: 4,
					experience: 20,
					treasure: 1,
					strengh:10,
					defense:10,
					gold: 6,
					},
					{
					name: 'BroodLord',
					portrait: '"https://i.pinimg.com/originals/7f/1d/b5/7f1db5d78fb1964b7dfd92569b92bd74.jpg"',
					text: "No special rules",
					level: 5,
					experience: 20,
					treasure: 1,
					strengh: 10,
					defense: 10,
					gold: 6,
					},
					{
					name: 'Neurothrope',
					portrait: '"https://www.frontlinegaming.org/wp-content/uploads/2018/04/Tyranid-9.jpg"',
					text: "No special rules",
					level: 7,
					experience: 30,
					treasure: 1,
					strengh: 11,
					defense: 11,
					gold: 8,
					},
					{
					name: 'Old one eye',
					portrait: '',
					text: "No special rules",
					level: 8,
					experience: 30,
					treasure: 1,
					strengh: 11,
					defense: 11,
					gold: 8,
					},
					{
					name: 'Hive guard',
					portrait: 'https://vignette.wikia.nocookie.net/warhammer40k/images/5/59/Hive_Guard.png/revision/latest/scale-to-width-down/340?cb=20140304231401',
					text: "No special rules",
					level: 9,
					experience: 30,
					treasure: 1,
					strengh: 12,
					defense: 12,
					gold: 10,
					},
					{
					name: 'Hive tyran',
					portrait: '"https://omnis-bibliotheca.com/images/thumb/e/e3/TyranDesRuches.jpg/400px-TyranDesRuches.jp12"',
					text: "No special rules",
					level: 10,
					experience: 50,
					treasure: 1,
					strengh: 12,
					defense: 12,
					gold: 10,
					},
				],
			},

			boss: {
				area1: [
					{
						name: 'Warboss ork',
						portrait: '"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4e9174e7-6c59-43ec-a440-8e66a449d264/d8t29vd-ae5360b3-72c0-4f31-bf06-56adc9311228.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRlOTE3NGU3LTZjNTktNDNlYy1hNDQwLThlNjZhNDQ5ZDI2NFwvZDh0Mjl2ZC1hZTUzNjBiMy03MmMwLTRmMzEtYmYwNi01NmFkYzkzMTEyMjguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1w1MBV0d1OKFKmycpuTgOsciaV6TlWQzY9r_hUsmsic"',
						text: "boss special capacity",
						level: 12,
						experience: 50,
						treasure: 1,
						strengh: 12,
						defense: 7,
						gold: 8,
					},
					{
						name: '"Medic" ork',
						portrait: '"https://wh40kart.im/_images/7dcbf5eb9297c1541a49176c26da1b53.jpg"',
						text: "boss special capacity",
						level: 12,
						experience: 50,
						treasure: 1,
						strengh: 10,
						defense: 9,
						gold: 8,
					},
					{
						name: 'Fleet captain ork',
						portrait: '"https://cdna.artstation.com/p/assets/images/images/015/888/626/large/edouard-boccard-art-bfg-portrait-bloodaxes-01.jpg?1550058286"',
						text: "boss special capacity",
						level: 12,
						experience: 50,
						treasure: 1,
						strengh: 8,
						defense: 11,
						gold: 8,
					},
				],
				
				area2: [
					{
						name: 'Prince',
						portrait: '"https://hobbyshop.fr/blog/wp-content/uploads/2018/12/Warhammer-40000-Tyranids-Liste-optimis%C3%A9e-%C3%A0-1700-pts.jpg"',
						text: "boss special capacity",
						level: 12,
						experience: 50,
						treasure: 1,
						strengh: 12,
						defense: 7,
						gold: 16,
					},
					{
						name: '"Lictor',
						portrait: '"https://wh40k-fr.lexicanum.com/mediawiki/images/thumb/a/af/Lictor.jpg/250px-Lictor.jpg"',
						text: "boss special capacity",
						level: 12,
						experience: 50,
						treasure: 1,
						strengh: 10,
						defense: 9,
						gold: 16,
					},
					{
						name: 'Patriarch',
						portrait: '"https://vignette.wikia.nocookie.net/warhammer40k/images/6/62/Patriarch.jpg/revision/latest/scale-to-width-down/340?cb=20180215061625"',
						text: "boss special capacity",
						level: 12,
						experience: 50,
						treasure: 1,
						strengh: 8,
						defense: 11,
						gold: 16,
					},
				]
				
			},
			chosenMonster : null,
			area: 'area' + this.props.area.toString(),
			monsterType: this.props.monsterType,
			background : {
				area0:'',
				area1: 'https://images.unsplash.com/photo-1522046310824-b844b4b5806f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
				area2: 'https://i.pinimg.com/originals/a4/1c/bc/a41cbc641383f94a2db319d90fad5996.jpg',
				area3: '',
			},
		}
	}

	chooseMonster = (data) => {

		this.setState({chosenMonster: data}, () => {this.toGiveToParent()})
	
	}


	//gives the monsters data to parent element (boardbuilder), via props.
	toGiveToParent = () => {
		const info = this.state.chosenMonster;
		this.props.dataFromMonster(info)
	}

	
	render() {
		//set a range of random numbers, based on the type of monster & the champion choice
		let length = 3;
		if (this.props.name === 'Tau commander') length = 4;
		let rngArray = [];
		if (this.state.monsterType === 'monster') {
			while(rngArray.length < length) {
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
										gold={this.state[this.state.monsterType][this.state.area][rng].gold}
										chooseMonster={()=>this.chooseMonster(this.state[this.state.monsterType][this.state.area][rng])}
										area={this.state.area}
										background={this.state.background}
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
							gold={this.state.chosenMonster.gold}
							area={this.state.area}
							background={this.state.background}
						/>
					</div>
		);
	}
};

export default chooseMonsterScreen;