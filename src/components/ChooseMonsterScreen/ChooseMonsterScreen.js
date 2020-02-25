import React, {Component} from 'react';
import MonsterCard from '../Cards/MonsterCard';
import classes from './ChooseMonsterScreen.module.css';
import { connect } from 'react-redux';

class chooseMonsterScreen extends Component{

	constructor(props) {
		super(props);

		this.state ={
			chosenMonster : null,
			area: 'area' + this.props.area.toString(),
			monsterType: this.props.monsterType,
			background : {
				area0:'',
				area1: 'https://images.unsplash.com/photo-1522046310824-b844b4b5806f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
				area2: 'https://i.pinimg.com/originals/a4/1c/bc/a41cbc641383f94a2db319d90fad5996.jpg',
				area3: '',
			},
			rngArray: [],
		}
	}

	componentDidMount() {
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
		this.setState({rngArray: rngArray})
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
		
		return (
			//Map the array of numbers and create a monsterCard for each of the element, based on monster type (normal or boss)
				this.state.chosenMonster === null ?
					<div className={classes.MonsterCards}>
						{this.state.rngArray.map((rng, index)=> {
							return (
									<MonsterCard 
										name={this.props.state[this.state.monsterType][this.state.area][rng].name}
										portrait={this.props.state[this.state.monsterType][this.state.area][rng].portrait}
										text={this.props.state[this.state.monsterType][this.state.area][rng].text}
										level={this.props.state[this.state.monsterType][this.state.area][rng].level}
										strengh={this.props.state[this.state.monsterType][this.state.area][rng].strengh}
										defense={this.props.state[this.state.monsterType][this.state.area][rng].defense}
										treasure={this.props.state[this.state.monsterType][this.state.area][rng].treasure}
										experience={this.props.state[this.state.monsterType][this.state.area][rng].experience}
										gold={this.props.state[this.state.monsterType][this.state.area][rng].gold}
										chooseMonster={()=>this.chooseMonster(this.props.state[this.state.monsterType][this.state.area][rng])}
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

const mapStateToProps = state => {
    return {
        state: state.monsterReducer,
    };
};

export default connect(mapStateToProps)(chooseMonsterScreen);