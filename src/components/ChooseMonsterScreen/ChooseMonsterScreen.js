import React, {Component} from 'react';
import MonsterCard from '../Cards/MonsterCard';
import classes from './ChooseMonsterScreen.module.css';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

class chooseMonsterScreen extends Component{

	constructor(props) {
		super(props);

		this.state ={
			rngArray: [],
			monsterType: null,
		}
	}


	componentDidMount() {

		//set an array of number depending on the number of monster desired, then fill it with random numbers
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

		//definie which type of number the player is gooing to face, depending on the number of deck explored
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
		chooseMonster: (monster) => dispatch(actionCreators.chooseMonster(monster))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(chooseMonsterScreen);