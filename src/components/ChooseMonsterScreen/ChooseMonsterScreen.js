import React, {useState, useEffect} from 'react';
import MonsterCard from '../Cards/MonsterCard';
import classes from './ChooseMonsterScreen.module.css';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

const ChooseMonsterScreen = (props) => {

	const [rngArray, setRngArray] = useState([]);
	const [monsterType, setMonsterType] = useState(null)

	useEffect(()=> {

		//set an array of number depending on the number of monster desired, then fill it with random numbers
		let length = 3;
		if (props.generalState.name === 'Tau commander') {length = 4;}
		let rngArray = [];
		if (props.generalState.openedDecks !== 4 ) {
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

		//definie which type of monster the player is gooing to face, depending on the number of deck explored
		let monsterType = null;
		if (props.generalState.openedDecks !== 4 ) {
			monsterType = 'normal'
		}else {
			monsterType = 'boss'
		}
		setRngArray(rngArray)
		setMonsterType(monsterType)
	}, []) 

		
		

		
		return (
			//Map the array of numbers and create a monsterCard for each of the element, based on monster type (normal or boss)
				props.generalState.currentMonster === null ?
					<div className={classes.MonsterCards}>
						{rngArray.map((rng, index)=> {
							return (
									<MonsterCard 
										name={props.generalState.monsters[monsterType][props.generalState.area][rng].name}
										portrait={props.generalState.monsters[monsterType][props.generalState.area][rng].portrait}
										text={props.generalState.monsters[monsterType][props.generalState.area][rng].text}
										level={props.generalState.monsters[monsterType][props.generalState.area][rng].level}
										strengh={props.generalState.monsters[monsterType][props.generalState.area][rng].strengh}
										defense={props.generalState.monsters[monsterType][props.generalState.area][rng].defense}
										treasure={props.generalState.monsters[monsterType][props.generalState.area][rng].treasure}
										experience={props.generalState.monsters[monsterType][props.generalState.area][rng].experience}
										gold={props.generalState.monsters[monsterType][props.generalState.area][rng].gold}
										chooseMonster={()=>props.chooseMonster(props.generalState.monsters[monsterType][props.generalState.area][rng])}
										key={index}
									/>
							)
						})}
						<p className={classes.Title}>Choose your fight wisely</p>
					</div>:
							
				//when monster is clicked, display the chosen one
					<div style={{marginTop: '200px', marginLeft: '20px', float:'left'}}>
						<MonsterCard 
							name={props.generalState.currentMonster.name}
							portrait={props.generalState.currentMonster.portrait}
							text={props.generalState.currentMonster.text}
							level={props.generalState.currentMonster.level}
							strengh={props.generalState.currentMonster.strengh}
							defense={props.generalState.currentMonster.defense}
							treasure={props.generalState.currentMonster.treasure}
							experience={props.generalState.currentMonster.experience}
							gold={props.generalState.currentMonster.gold}
							area={props.generalState.area}
						/>
					</div>
		);
};

const mapStateToProps = state => {
    return {
		// monsterState: state.monsterReducer,
		generalState: state.generalReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
		chooseMonster: (monster) => dispatch(actionCreators.chooseMonster(monster))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ChooseMonsterScreen);