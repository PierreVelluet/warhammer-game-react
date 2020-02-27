import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './BoardBuilder.module.css'
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



class boardBuilder extends Component {
	state = {
		//display different section handlers
		showChooseCharScreen: true,
		showDeck: false,
		showMonsterScreen: false,
		showRewards: false,
		showFloorCheck: false,
		showAttackCards: true,
		showDefenseCards: false,
		showMagicCards: false,
		showLevelUpPanel: false,
		showGameOverPanel: false,
		showBossTrailer: false,
		showCombatDetails: false,
		showMerchant: false,
		//
		combatResult: 'base',
		activeAttackIcon: false,
		activeDefenseIcon: false,
		activeMagicIcon: false,
		area: null,
		areaName: ['Space', 'Desert', 'Jungle', 'IceLand'],
		areaExplored: 0,
		monsterType: 'monster',
		//Character Panel
		portrait: null,
		name: null,
		power: null,
		level: 0,
		health: 1,
		strengh: 0,
		baseStrengh: 0,
		strenghFromItem: 0,
		totalStrengh: 0,
		defense: 0,
		baseDefense:0,
		defenseFromItem: 0,
		experience: 0,
		monsterSlain: 0,
		bossSlain: 0,
		gold: 0,
		treasure:[],
		attackCards: [],
		defenseCards: [],
		specialCards: [],
		whichInventory: '',
		inventoryColor: 'attackCards',
		openedDecks: 0,
		/////////////////////
		whichReward: 'normal',
		// rng: 0,
		dice: -1,
		bonusToDice: 0,
		currentMonster: null,
		background:[
					'https://www.azutura.com/media/catalog/product/cache/49/image/650x/040ec09b1e35df139433887a97daa66f/W/S/WS-47373_WP.jpg',
					'https://www.wallpaperflare.com/static/581/364/24/artwork-fantasy-art-digital-art-desert-wallpaper.jpg',
					'https://i.pinimg.com/originals/1d/34/cd/1d34cdbcbc3ebb9d59d2e455c249a82c.jpg'
					]
			

	}//end of state


////////////////////////////////////////////////SPECIAL HANDLERS//////////////////////////////////////////////////////////////////

// IMPOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRRRRRRRRRRTTTTTTTAAAAAAAAAAAAAAAAAAAAAAAAAAANTTTTT///////////////////////////////////////////////////////////////////
		// this.shouldLevelOrAreaOrBossUpdate();// DO NOT FORGET TO ADD THIS !!!!!!!!!!!!!!!!!!!!!!!!!!!!////////////////////////////////////////////////////////

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
		let chooseScreen = null;
			if (this.props.generalState.showChooseCharScreen) {chooseScreen = <ChooseCharScreen />};

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

		return (
			<div className={classes.Board}>
				{this.props.generalState.showChooseCharScreen ? chooseScreen :
					<React.Fragment>
						<PlayerBoardControl>
							<CharacterPanel
								className={classes.PanelCard}
								name={this.state.name}
								portrait={this.state.portrait}
								power={this.state.power}
								level={this.state.level}
								health={this.state.health}
								attackCards={this.state.attackCards}
								defenseCards={this.state.defenseCards}
								specialCards={this.state.specialCards}
								strengh={this.state.strengh}
								defense={this.state.defense}
								experience={this.state.experience}
								monsterSlain={this.state.monsterSlain}
								bossSlain={this.state.bossSlain}
								activeAttackIcon={this.state.activeAttackIcon}
								activeDefenseIcon={this.state.activeDefenseIcon}
								activeMagicIcon={this.state.activeMagicIcon}
								showAttackCards={this.showAttackCards}
								showDefenseCards={this.showDefenseCards}
								showMagicCards={this.showMagicCards}
								decks={this.state.openedDecks}
								percentage={this.state.experience}
								gold={this.state.gold}
								treasure={this.state.treasure.length}
								deck={this.state.openedDecks}
								area={this.state.areaName[this.state.area]}
								areaExplored={this.state.areaExplored}
								whichInventory={this.state.whichInventory}
								revealInventory={this.revealInventory}
								inventoryColor={this.state.inventoryColor}
								specialEffectHandler={this.specialEffectHandler}
							/>

						</PlayerBoardControl>
						<DeckBoardControl
							background={this.state.background}
							area={this.state.area}
						>
						
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
						</DeckBoardControl>
					</React.Fragment>
				}
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
        addPersonHandler: (name, age) => dispatch({type: 'ADD_PERSON', personData: {name: name, age: age}}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(boardBuilder);