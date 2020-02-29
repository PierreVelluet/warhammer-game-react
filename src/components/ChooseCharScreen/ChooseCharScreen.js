import React from 'react';
import ChampionCard from '../Cards/ChampionCard';
import classes from './ChooseCharScreen.module.css'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

const chooseCharScreen = (props) => (

			//simply map the data from championReducer, and hence, return a card for each champion.
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
		updateChosenChampStats: (champ) => dispatch(actionCreators.setIntialStats(champ))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(chooseCharScreen);