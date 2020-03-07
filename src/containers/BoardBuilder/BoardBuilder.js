import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './BoardBuilder.module.css';
import ChooseCharScreen from '../../components/ChooseCharScreen/ChooseCharScreen';
import PlayerBoardControl from '../PlayerBoardControl/PlayerBoardControl';
import DeckBoardControl from '../DeckBoardControl/DeckBoardControl';
import Deck from '../../components/Cards/Deck';
import ChooseRewardScreen from '../../components/ChooseRewardScreen/ChooseRewardScreen';
import CombatDetails from '../../components/CombatDetails/CombatDetails';
import ChooseMonsterScreen from '../../components/ChooseMonsterScreen/ChooseMonsterScreen';
import CharacterPanel from '../../components/CharacterPanel/Panel/CharacterPanel';
import FloorCheck from '../../components/FloorCheck/FloorCheck';
import LevelUp from '../../components/LevelUp/LevelUp';
import GameOver from '../../components/GameOver/GameOver';
import BossTrailer from '../../components/Bosses/BossTrailer';
import Merchant from '../../components/Merchant/Merchant';
import MerchantAccess from '../../components/Merchant/MerchantAccess';
import ChooseWorldScreen from '../../components/ChooseWorldScreen/ChooseWorldScreen';
import Takeoff from '../../components/Takeoff/Takeoff';



class boardBuilder extends Component {
	
	specialEffectHandler = (data, index) => {

		if (data.type === 'specialCards') {

			switch(data.name) {

				case 'Painkillers':
					if(this.state.name === 'Apothecary') {
						const newHealth = this.state.health + 4
						this.setState({health: newHealth})
						break;
					}else {
						const newHealth = this.state.health + 2
						this.setState({health: newHealth})
						break;
					}
					
				case 'Dope syringe':
					if(this.state.name === 'Apothecary'){
						this.setState({bonusToDice: 6})
						break;
					}else {
						this.setState({bonusToDice: 3})
						break;
					}
					
				case 'Bi-pills':
					if(this.state.name === 'Apothecary'){
						const newHealth = this.state.health + 4
						this.setState({health: newHealth, bonusToDice: 6})
						break;
					}else {
						const newHealth = this.state.health + 2
						this.setState({health: newHealth, bonusToDice: 3})
						break;
					}

				case 'Mix of pills':
					if(this.state.name === 'Apothecary'){
						const newHealth = this.state.health + 6
						this.setState({health: newHealth, bonusToDice: 4})
						break;
					}else {
						const newHealth = this.state.health + 3
						this.setState({health: newHealth, bonusToDice: 2})
						break;
					}

				case 'Frag grenade':
					if(this.state.name === 'Apothecary'){
						this.setState({bonusToDice: 10})
						break;
					}else {
						this.setState({bonusToDice: 5})
						break;
					}

				case 'Vital kit':
					if(this.state.name === 'Apothecary') {
						const newHealth = this.state.health + 6
						this.setState({health: newHealth})
						break;
					}else {
						const newHealth = this.state.health + 3
						this.setState({health: newHealth})
						break;
					}

				case 'Disco grenade':
					if(this.state.name === 'Apothecary'){
						this.setState({bonusToDice: 16})
						break;
					}else {
						this.setState({bonusToDice: 8})
						break;
					}
				default:
					break;


			}
			const newArray = [...this.state.specialCards]	
			newArray.splice(index, 1)
			this.setState({specialCards: newArray, whichInventory: 'specialCards'})

		}
	}

	tryAgain = () => {
		this.setState({	showChooseCharScreen: true,
						currentMonster: false,
						area: 0,
						experience: 0,
						showMonsterScreen: false,
						showGameOverPanel: false,
						openedDecks: 0,
						monsterSlain: 0,
						bossSlain: 0,})
	}

	render () {
		let chooseChampionScreen = null;
			if (this.props.generalState.showChooseCharScreen) {chooseChampionScreen = <ChooseCharScreen />};

		let chooseWorldScreen = null;
			if (this.props.generalState.showChooseWorldScreen) {chooseWorldScreen = <ChooseWorldScreen />}

		let rewards = null;
		if (this.props.generalState.showRewards) {
				rewards = 	<ChooseRewardScreen />
		}

		let floorCheck = null;
		if (this.props.generalState.showFloorCheck) {
			floorCheck = <FloorCheck />
		}

		let deck = null;
		if (this.props.generalState.showDeck) {
			deck = <Deck />
		}
		

		let chooseMonsterScreen = null;
		if (this.props.generalState.showMonsterScreen) {
		chooseMonsterScreen = 	<ChooseMonsterScreen />
		}

		let combatDetails = null;
		if (this.props.generalState.showCombatDetails) {
		combatDetails = <CombatDetails />
		 }

		 let levelUp = null;
		 if (this.props.generalState.showLevelUpPanel) {
			 levelUp = <LevelUp />
		 }

		 let gameOver= null;
		 if (this.props.generalState.showGameOverPanel) {
			 gameOver = <GameOver
							tryAgain={this.tryAgain}
			 			/>
		 }

		 let bossTrailer = null;
		 if (this.props.generalState.showBossTrailer) {
			 bossTrailer = 	<BossTrailer />
		 }

		 let merchant = null;
		 if (this.props.generalState.showMerchant) {
			 merchant = <Merchant />
		 }
		 
		 let merchantAccess = null;
		 if (this.props.generalState.showDeck) {
			 merchantAccess = <MerchantAccess />
		}

		let takeoff = null;
		if (this.props.generalState.showTakeoff) {
			takeoff= <Takeoff />
		}

		let board = null;
		if (this.props.generalState.showBoard) {
			board =	<React.Fragment>
						<PlayerBoardControl>
							<CharacterPanel />
						</PlayerBoardControl>

						<DeckBoardControl >
							{chooseWorldScreen}
							{merchantAccess}
							{merchant}
							{bossTrailer}
							{gameOver}
							{levelUp}
							{floorCheck}
							{deck}
							{chooseMonsterScreen}
							{combatDetails}
							{rewards}
							{takeoff}
						</DeckBoardControl>

				</React.Fragment>
		}

		

		return (
			<div className={classes.Board}>
			{chooseChampionScreen}
			{chooseWorldScreen}
			{board}
			</div>
		)
	}
};

const mapStateToProps = state => {
    return {
        generalState: state.generalReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        checkUpdates: () => dispatch({type: 'LEVEL_AREA_BOSS_UPDATE'}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(boardBuilder);