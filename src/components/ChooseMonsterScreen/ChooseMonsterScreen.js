import React, {Component} from 'react';
import MonsterCard from '../Cards/MonsterCard';
import classes from './ChooseMonsterScreen.module.css';
import { connect } from 'react-redux';

class chooseMonsterScreen extends Component{

	constructor(props) {
		super(props);

		this.state ={
			background : {
				area0: '',
				area1: 'https://images.unsplash.com/photo-1522046310824-b844b4b5806f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
				area2: 'https://i.pinimg.com/originals/a4/1c/bc/a41cbc641383f94a2db319d90fad5996.jpg',

			},
			rngArray: [],
			monsterType: null,
		}
	}

	componentDidMount() {
		let length = 3;
		if (this.props.generalState.name === 'Tau commander') {length = 4;}
		let rngArray = [];
		if (this.props.generalState.openedDecks !== 4 ) {
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

		let monsterType = null;
		if (this.props.generalState.openedDecks !== 4 ) {
			monsterType = 'normal'
		}else {
			monsterType = 'boss'
		}
		this.setState({rngArray: rngArray, monsterType: monsterType})
	}

	render() {
		
		return (
			//Map the array of numbers and create a monsterCard for each of the element, based on monster type (normal or boss)
				this.props.generalState.currentMonster === null ?
					<div className={classes.MonsterCards}>
						{this.state.rngArray.map((rng, index)=> {
							return (
									<MonsterCard 
										name={this.props.monsterState[this.state.monsterType][this.props.generalState.area][rng].name}
										portrait={this.props.monsterState[this.state.monsterType][this.props.generalState.area][rng].portrait}
										text={this.props.monsterState[this.state.monsterType][this.props.generalState.area][rng].text}
										level={this.props.monsterState[this.state.monsterType][this.props.generalState.area][rng].level}
										strengh={this.props.monsterState[this.state.monsterType][this.props.generalState.area][rng].strengh}
										defense={this.props.monsterState[this.state.monsterType][this.props.generalState.area][rng].defense}
										treasure={this.props.monsterState[this.state.monsterType][this.props.generalState.area][rng].treasure}
										experience={this.props.monsterState[this.state.monsterType][this.props.generalState.area][rng].experience}
										gold={this.props.monsterState[this.state.monsterType][this.props.generalState.area][rng].gold}
										chooseMonster={()=>this.props.chooseMonster(this.props.monsterState[this.state.monsterType][this.props.generalState.area][rng])}
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
							name={this.props.generalState.currentMonster.name}
							portrait={this.props.generalState.currentMonster.portrait}
							text={this.props.generalState.currentMonster.text}
							level={this.props.generalState.currentMonster.level}
							strengh={this.props.generalState.currentMonster.strengh}
							defense={this.props.generalState.currentMonster.defense}
							treasure={this.props.generalState.currentMonster.treasure}
							experience={this.props.generalState.currentMonster.experience}
							gold={this.props.generalState.currentMonster.gold}
							area={this.props.generalState.area}
							background={this.state.background}
						/>
					</div>
		);
	}
};

const mapStateToProps = state => {
    return {
		monsterState: state.monsterReducer,
		generalState: state.generalReducer,
    };
};

const mapDispatchToProps = dispatch => {
    return {
		chooseMonster: (monster) => dispatch({type: 'CHOOSE_MONSTER', monster: monster})
		
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(chooseMonsterScreen);