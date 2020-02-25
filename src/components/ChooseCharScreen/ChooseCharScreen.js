import React from 'react';
import ChampionCard from '../Cards/ChampionCard';
import classes from './ChooseCharScreen.module.css'
import { connect } from 'react-redux';

const chooseCharScreen = (props) => (

			//simply map the data from championReducer, and hence, return a card for each champ.
			<div className={classes.Div}>
				<h1 className={classes.Title} >Choose your spaceship captain !</h1>
				{props.state.champion.map((champ, index) => {
					return (
						<ChampionCard
							name={props.state.champion[index].name}
							portrait={props.state.champion[index].portrait}
							power={props.state.champion[index].power}
							powerName={props.state.champion[index].powerName}
							strengh={props.state.champion[index].strengh}
							defense={props.state.champion[index].defense}
							health={props.state.champion[index].health}
							level={props.state.champion[index].level}
							// choose={() => props.choosing(champ)}
							choose={() => props.updateChosenChampStats(champ)}
							key={index}
						/>
					);
				})}
			</div>

);

const mapStateToProps = state => {
    return {
        state: state.characterReducer,
    };
};

const mapDispatchToProps = dispatch => {
    return {
		addPersonHandler: (name, age) => dispatch({type: 'ADD_PERSON', personData: {name: name, age: age}}),
		updateChosenChampStats: (champ) => dispatch({type: 'SET_INITIAL_STATS', champ: champ})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(chooseCharScreen);