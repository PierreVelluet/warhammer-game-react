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
						},
						{
						name: 'Old one eye',
						portrait: '"data:image/jpeg;base64,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"',
						text: "No special rules",
						level: 8,
						experience: 30,
						treasure: 1,
						strengh: 11,
						defense: 11,
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
						},
				],
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
						strengh: 12,
						defense: 7,
					},
					{
						name: '"Medic" ork',
						portrait: '"https://wh40kart.im/_images/7dcbf5eb9297c1541a49176c26da1b53.jpg"',
						text: "1 boss treasure",
						level: 12,
						experience: 50,
						treasure: 1,
						strengh: 10,
						defense: 9,
					},
					{
						name: 'Fleet captain ork',
						portrait: '"https://cdna.artstation.com/p/assets/images/images/015/888/626/large/edouard-boccard-art-bfg-portrait-bloodaxes-01.jpg?1550058286"',
						text: "1 boss treasure",
						level: 12,
						experience: 50,
						treasure: 1,
						strengh: 8,
						defense: 11,
					},
				],
				
				area2: [
					{
						name: 'Prince',
						portrait: '"https://hobbyshop.fr/blog/wp-content/uploads/2018/12/Warhammer-40000-Tyranids-Liste-optimis%C3%A9e-%C3%A0-1700-pts.jpg"',
						text: "1 boss treasure",
						level: 12,
						experience: 50,
						treasure: 1,
						strengh: 12,
						defense: 7,
					},
					{
						name: '"Lictor',
						portrait: '"https://wh40k-fr.lexicanum.com/mediawiki/images/thumb/a/af/Lictor.jpg/250px-Lictor.jpg"',
						text: "1 boss treasure",
						level: 12,
						experience: 50,
						treasure: 1,
						strengh: 10,
						defense: 9,
					},
					{
						name: 'Patriarch',
						portrait: '"https://vignette.wikia.nocookie.net/warhammer40k/images/6/62/Patriarch.jpg/revision/latest/scale-to-width-down/340?cb=20180215061625"',
						text: "1 boss treasure",
						level: 12,
						experience: 50,
						treasure: 1,
						strengh: 8,
						defense: 11,
					},
				]
				
			},
			chosenMonster : null,
			area: 'area' + this.props.area.toString(),
			monsterType: this.props.monsterType,
			background : {
				area0:'',
				area1: 'https://thumbs.dreamstime.com/b/dry-cracked-earth-background-soil-ground-texture-dry-cracked-ground-soil-texture-background-115604728.jpg',
				area2: 'https://images.vexels.com/media/users/3/70035/preview2/7a6d3239237df27124e5fd1bb97c5362-marco-tropical-con-estilo-de-fondo-de-selva.jpg',
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
							area={this.state.area}
							background={this.state.background}
						/>
					</div>
		);
	}
};

export default chooseMonsterScreen;