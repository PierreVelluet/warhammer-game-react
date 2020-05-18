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



const boardBuilder = (props) => {
	
	// specialEffectHandler = (data, index) => {

	// 	if (data.type === 'specialCards') {

	// 		switch(data.name) {

	// 			case 'Painkillers':
	// 				if(state.name === 'Apothecary') {
	// 					const newHealth = state.health + 4
	// 					setState({health: newHealth})
	// 					break;
	// 				}else {
	// 					const newHealth = state.health + 2
	// 					setState({health: newHealth})
	// 					break;
	// 				}
					
	// 			case 'Dope syringe':
	// 				if(state.name === 'Apothecary'){
	// 					setState({bonusToDice: 6})
	// 					break;
	// 				}else {
	// 					setState({bonusToDice: 3})
	// 					break;
	// 				}
					
	// 			case 'Bi-pills':
	// 				if(state.name === 'Apothecary'){
	// 					const newHealth = state.health + 4
	// 					setState({health: newHealth, bonusToDice: 6})
	// 					break;
	// 				}else {
	// 					const newHealth = state.health + 2
	// 					setState({health: newHealth, bonusToDice: 3})
	// 					break;
	// 				}

	// 			case 'Mix of pills':
	// 				if(state.name === 'Apothecary'){
	// 					const newHealth = state.health + 6
	// 					setState({health: newHealth, bonusToDice: 4})
	// 					break;
	// 				}else {
	// 					const newHealth = state.health + 3
	// 					setState({health: newHealth, bonusToDice: 2})
	// 					break;
	// 				}

	// 			case 'Frag grenade':
	// 				if(state.name === 'Apothecary'){
	// 					setState({bonusToDice: 10})
	// 					break;
	// 				}else {
	// 					setState({bonusToDice: 5})
	// 					break;
	// 				}

	// 			case 'Vital kit':
	// 				if(state.name === 'Apothecary') {
	// 					const newHealth = state.health + 6
	// 					setState({health: newHealth})
	// 					break;
	// 				}else {
	// 					const newHealth = state.health + 3
	// 					setState({health: newHealth})
	// 					break;
	// 				}

	// 			case 'Disco grenade':
	// 				if(state.name === 'Apothecary'){
	// 					setState({bonusToDice: 16})
	// 					break;
	// 				}else {
	// 					setState({bonusToDice: 8})
	// 					break;
	// 				}
	// 			default:
	// 				break;


	// 		}
	// 		const newArray = [...state.specialCards]	
	// 		newArray.splice(index, 1)
	// 		setState({specialCards: newArray, whichInventory: 'specialCards'})

	// 	}
	// }

	// tryAgain = () => {
	// 	setState({	showChooseCharScreen: true,
	// 					currentMonster: false,
	// 					area: 0,
	// 					experience: 0,
	// 					showMonsterScreen: false,
	// 					showGameOverPanel: false,
	// 					openedDecks: 0,
	// 					monsterSlain: 0,
	// 					bossSlain: 0,})
	// }

		let chooseChampionScreen = null;
			if (props.generalState.showChooseCharScreen) {chooseChampionScreen = <ChooseCharScreen />};

		let chooseWorldScreen = null;
			if (props.generalState.showChooseWorldScreen) {chooseWorldScreen = <ChooseWorldScreen />}

		let rewards = null;
		if (props.generalState.showRewards) {
				rewards = 	<ChooseRewardScreen />
		}

		let floorCheck = null;
		if (props.generalState.showFloorCheck) {
			floorCheck = <FloorCheck />
		}

		let deck = null;
		if (props.generalState.showDeck) {
			deck = <Deck />
		}
		

		let chooseMonsterScreen = null;
		if (props.generalState.showMonsterScreen) {
		chooseMonsterScreen = 	<ChooseMonsterScreen />
		}

		let combatDetails = null;
		if (props.generalState.showCombatDetails) {
		combatDetails = <CombatDetails />
		 }

		 let levelUp = null;
		 if (props.generalState.showLevelUpPanel) {
			 levelUp = <LevelUp />
		 }

		 let gameOver= null;
		 if (props.generalState.showGameOverPanel) {
			 gameOver = <GameOver
							// tryAgain={tryAgain}
			 			/>
		 }

		 let bossTrailer = null;
		 if (props.generalState.showBossTrailer) {
			 bossTrailer = 	<BossTrailer />
		 }

		 let merchant = null;
		 if (props.generalState.showMerchant) {
			 merchant = <Merchant />
		 }
		 
		 let merchantAccess = null;
		 if (props.generalState.showDeck) {
			 merchantAccess = <MerchantAccess />
		}

		let takeoff = null;
		if (props.generalState.showTakeoff) {
			takeoff= <Takeoff />
		}

		let board = null;
		if (props.generalState.showBoard) {
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