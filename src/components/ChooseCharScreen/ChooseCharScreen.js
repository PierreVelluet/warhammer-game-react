import React, {Component} from 'react';
import ChampionCard from '../Cards/ChampionCard';
import classes from './ChooseCharScreen.module.css'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

class chooseCharScreen extends Component {

	render() {

		return (
			//simply map the data from championReducer, and hence, return a card for each champion.
			<div className={classes.Div}>
				<h1 className={classes.Title} >Choose your spaceship captain !</h1>
				{this.props.state.champion.map((champ, index) => {
					return (
						<ChampionCard
							name={this.props.state.champion[index].name}
							portrait={this.props.state.champion[index].portrait}
							power={this.props.state.champion[index].power}
							powerName={this.props.state.champion[index].powerName}
							strengh={this.props.state.champion[index].strengh}
							defense={this.props.state.champion[index].defense}
							health={this.props.state.champion[index].health}
							level={this.props.state.champion[index].level}
							choose={() => this.props.updateChosenChampStats(champ)}
							key={index}
						/>
					);
				})}
			</div>
		)
		
	}

		

};

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