import React, { Component } from 'react';
import classes from './BoardBuilder.module.css'
import ChooseCharScreen from '../../components/ChooseCharScreen/ChooseCharScreen';
import PlayerBoardControl from '../PlayerBoardControl/PlayerBoardControl';
import DeckBoardControl from '../DeckBoardControl/DeckBoardControl';
import Deck from '../../components/Cards/Deck';
import ChooseRewardScreen from '../../components/ChooseRewardScreen/ChooseRewardScreen';
import AttackCardsList from '../../components/ListOfCards/AttackCardsList';
import DefenseCardsList from '../../components/ListOfCards/DefenseCardsList';
import MagicCardsList from '../../components/ListOfCards/MagicCardsList';
import CombatDetails from '../../components/CombatDetails/CombatDetails';
import ChooseMonsterScreen from '../../components/ChooseMonsterScreen/ChooseMonsterScreen';
import CharacterPanel from '../../components/CharacterPanel/Panel/CharacterPanel';
import FloorCheck from '../../components/FloorCheck/FloorCheck';
import LevelUp from '../../components/LevelUp/LevelUp';
import GameOver from '../../components/GameOver/GameOver';
import BossTrailer from '../../components/Bosses/BossTrailer'

class boardBuilder extends Component {
	state = {
		//display different section handlers
		showChooseCharScreen: true,
		showDeck: false,
		showMonsterScreen: false,
		showRewards: false,
		showFloorCheck: false,
		showAttackCards: false,
		showDefenseCards: false,
		showMagicCards: false,
		showLevelUpPanel: false,
		showGameOverPanel: false,
		showBossTrailer: false,
		showCombatDetails: false,
		combatResult: 'base',
		activeAttackIcon: false,
		activeDefenseIcon: false,
		activeMagicIcon: false,
		area: null,
		areaName: [
			'Space',
			'Desert',
			'Jungle',
			'IceLand'
		],
		monsterType: 'monster',
		//Character Panel
		// chosenChar: {},
		portrait: null,
		name: null,
		power: null,
		level: 0,
		health: 1,
		strengh: 0,
		baseStrengh: 0,
		strenghFromItem: 0,
		defense: 0,
		baseDefense:0,
		defenseFromItem: 0,
		experience: 0,
		monsterSlain: 0,
		gold: 0,
		treasure:[],
		totalStrengh: 0,
		attackCards: [],
		defenseCards: [],
		magicCards: [],
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

///////////////////////////////////////CLEAN AND APPROVED FUNCTIONS//////////////////////////////////////////////////////

	//permite to choose your champion at the start
	chooseCharHandler = (champ) => {
		
		const chosenChar = champ;
		const strengh = champ.strengh;
		const defense = champ.defense;
		const level = champ.level;
		const health = champ.health;
		const name = champ.name;
		const power = champ.power;
		const portrait = champ.portrait;

		this.setState({	showChooseCharScreen: false,
						chosenChar: chosenChar,
						strengh: strengh,
						baseStrengh: strengh,
						defense: defense,
						baseDefense: defense,
						level: level,
						health: health,
						name: name,
						power: power,
						showFloorCheck: true,
						area: 0,
						portrait: portrait,
						})
	}

	//display inventory's attack's cards
	showAttackCards = () => {
		this.state.showAttackCards ? 
		this.setState({showAttackCards: false, activeAttackIcon: false}):
		this.setState	({showAttackCards: true,
						showMagicCards: false,
						showDefenseCards: false,
						activeAttackIcon: true,
						activeDefenseIcon: false,
						activeMagicIcon:false,
						});
	}

	//display inventory's defense's cards
	showDefenseCards = () => {
		console.log('passed')
		this.state.showDefenseCards ? 
		this.setState({showDefenseCards: false, activeDefenseIcon: false}):
		this.setState	({showDefenseCards: true,
						showAttackCards: false,
						showMagicCards: false,
						activeDefenseIcon: true,
						activeAttackIcon: false,
						activeMagicIcon: false,
						});
	}

	//display inventory's magic's cards
	showMagicCards = () => {
		this.state.showMagicCards ? 
		this.setState({showMagicCards: false, activeMagicIcon: false}):
		this.setState	({showMagicCards: true,
						showAttackCards: false,
						showDefenseCards: false,
						activeMagicIcon: true,
						activeAttackIcon: false,
						activeDefenseIcon: false,
						})
	}

	//anytime you pick a reward or you win a fight with no reward, check if you level up, then if boss appear, then if area must change
	shouldLevelOrAreaOrBossUpdate = () => {
		//check lvl up
		if(this.state.experience >= 100) {
			const newStrengh = this.state.baseStrengh + 1;
			const newDefense = this.state.baseDefense + 1;
			const newLevel = this.state.level +1;
			const newExperience = 0;
			this.setState({	level: newLevel,
							experience: newExperience,
							baseStrengh: newStrengh,
							baseDefense: newDefense,
							showLevelUpPanel: true,
							showCombatDetails: false,
							showMonsterScreen: false,
							showDeck: false})
		//check if you explored enough time the deck
		}else if (this.state.openedDecks === 3){
			this.setState	({showRewards: false,
				showBossTrailer: true,
				showMonsterScreen: false,
				currentMonster: null,
				showDeck: false,
				showCombatDetails: false,
				})
		//check if you just won a fight versus a boss
		}else if (this.state.monsterType === 'boss') {
			const newArea = this.state.area + 1
			this.setState({	showDeck: false,
							area: newArea,
							showFloorCheck: true})
		}
	}
	
	dataFromMonster = (data) => {
		this.setState({	currentMonster: data,
						showCombatDetails: 'base',
						})
	}



///////////////////////////////////////////////REVEAL MONSTER AND SET-UP FIGHT ///////////////////////////////////////////////////////

//Set up all the fight environment and data
	revealHandler = () => {
		if (this.state.openedDecks != 3) {
			const updatedopenedDecks = this.state.openedDecks +1;
			this.setState({	showMonsterScreen: true,
							showDeck: false,
							combatResult: 'base',
							bonusToDice: 0,
							openedDecks: updatedopenedDecks,
							})
			
		}else {
			const updatedopenedDecks = 0;
			this.setState({	showMonsterScreen: true,
							showDeck: false,
							combatResult: 'base',
							bonusToDice: 0,
							openedDecks: updatedopenedDecks,
							showBossTrailer: false,
							monsterType: 'boss',
							whichReward: 'super',
							})
		}
		
	}

////////////////////////////////////////////////////DICE ROLLS////////////////////////////////////////////////////////////////////
	attackRollHandler = () => {

		const dice = Math.floor(Math.random() * 6) + 1 ;
		this.setState({dice: dice});
		const result = dice + this.state.strengh + this.state.bonusToDice;
		const monsterSlain = this.state.monsterSlain + 1;
		let newExperience = this.state.currentMonster.experience + this.state.experience
		let newGold = this.state.currentMonster.gold + this.state.gold
		if (newExperience > 100) {newExperience = 100};


		if ((dice != 1 && result >= this.state.currentMonster.defense) || dice === 6) {
			if(this.state.currentMonster.treasure > 0) {
				this.setState({combatResult: 'winWithReward', monsterSlain: monsterSlain, experience: newExperience, gold: newGold});
			}else{
				this.setState({combatResult: 'winNoReward', monsterSlain: monsterSlain, experience: newExperience, gold: newGold});
			}

			// this.setState(prevState => ({
			// 	currentMonster: {                   // object that we want to update
			// 		...prevState.currentMonster,    // keep all other key-value pairs
			// 		isAlive: false,       // update the value of specific key
			// 	}
			// }))
			
		}else {
			this.setState({combatResult: 'retaliation'});

		}
	}

	retaliationRoll = ()  => {

		const dice = Math.floor(Math.random() * 6) + 1 ;
		const result = dice + this.state.currentMonster.strengh;

		if (dice != 1 && (dice === 6 || result > this.state.defense)) {
			const newHealth = this.state.health - 1;
			this.setState({combatResult: 'wounded', dice: dice, health: newHealth});
			

		}else {
			this.setState({combatResult: 'saved', dice: dice})
			
		}
	}
////////////////////////////////////////////////////COMBAT RESULT //////////////////////////////////////////////////////////////

	claimRewards = (type) => {

		if(type === 'normal') {
			this.setState({	showRewards: true,
							showMonsterScreen: false,
							currentMonster: null,
							showCombatDetails: false,
							whichReward: type,
							})
		}else {
			this.setState({	showRewards: true,
							showMonsterScreen: false,
							showLevelUpPanel: false,
							currentMonster: null,
							showCombatDetails: false,
							whichReward: type,
							})
		}

		if (this.state.monsterType != 'monster') {
			this.setState({whichReward: 'super'})
		}
	}

	

	continueHandler = () => {
	
		if (this.state.area === 0) {
			const newArea = this.state.area + 1;
			this.setState({area: newArea})
		}else if (this.state.showFloorCheck && this.state.area === 1) {
			this.setState({	showFloorCheck: false, showDeck: true})
		}else if (this.state.combatResult === 'saved') {
			this.setState({combatResult: 'base'})
		}else if (this.state.combatResult === 'winNoReward') {
			this.setState({showDeck: true, showCombatDetails: false, showMonsterScreen: false})
			this.shouldLevelOrAreaOrBossUpdate();
		}else if (this.state.combatResult === 'wounded' && this.state.health > 0) {
			this.setState({combatResult: 'base'})
		}else if (this.state.combatResult === 'magicLess') {
			this.setState({combatResult: 'base'})
		}else if (this.state.combatResult === 'magic') {
			this.setState({combatResult: 'base'})
			this.showMagicCards();
		}else if (this.state.health === 0) {
			this.setState({showGameOverPanel: true, showCombatDetails: false})
		}else if(this.state.showFloorCheck && this.state.area === 2){
			this.setState({	showFloorCheck: false, showDeck: true})
		}

	}
	
	chooseRewardHandler = (treasure) => {
		this.state.treasure.push(treasure)
		switch (treasure.type) {
			case 'attack':
				this.state.attackCards.push(treasure);
				break;
			case 'defense':
				this.state.defenseCards.push(treasure);
				break;
			case 'magic':
				this.state.magicCards.push(treasure);
				break;
			default:
				break;
		}

		//Calculate the new strengh & defenses variables and update the state
		const strenghFromItem = this.state.treasure.map(treasure => {
			if(treasure.hasOwnProperty('strengh')) {
				return treasure.strengh;
			}else{
				return null;
			}
		}).reduce((a, b) => a + b, 0);
		const defenseFromItem = this.state.treasure.map(treasure => {
			if(treasure.hasOwnProperty('defense')) {
				return treasure.defense;
			}else{
				return null;
			}
		}).reduce((a, b) => a + b, 0);

		const newStrengh = this.state.baseStrengh + strenghFromItem;
		const newDefense = this.state.baseDefense + defenseFromItem;

		this.setState({	strenghFromItem: strenghFromItem,
						defenseFromItem: defenseFromItem,
						strengh: newStrengh,
						defense: newDefense,
						showRewards: false,
						showDeck: true,
					})

		this.shouldLevelOrAreaOrBossUpdate();

		
	}



////////////////////////////////////////////////MAGIC HANDLERS//////////////////////////////////////////////////////////////////
	magicItemHandler = () => {
		if (this.state.magicCards.length > 0) {
			this.setState({combatResult: 'magic', isMagicClickable: true})
			if (this.state.showMagicCards === false) {this.showMagicCards()};
		}else{
			this.setState({combatResult: 'magicLess'})
		}
		
	}

	magicEffectHandler = (target, index) => {
		if (this.state.combatResult === 'magic') {

			switch(target.name) {

				case 'Dope syringe':
					if(this.state.name === 'Ork boss') {
						const newHealth = this.state.health + 4
						this.setState({health: newHealth})
						break;
					}else {
						const newHealth = this.state.health + 2
						this.setState({health: newHealth})
						break;
					}
					
				case 'Painkillers':
					if(this.state.name === 'Ork boss'){
						this.setState({bonusToDice: 6})
						break;
					}else {
						this.setState({bonusToDice: 3})
						break;
					}
					
				case 'Bi-pills':
					if(this.state.name === 'Ork boss'){
						const newHealth = this.state.health + 4
						this.setState({health: newHealth, bonusToDice: 6})
						break;
					}else {
						const newHealth = this.state.health + 2
						this.setState({health: newHealth, bonusToDice: 3})
						break;
					}
				default:
					break;


			}
			const newArray = [...this.state.magicCards]	
			newArray.splice(index, 1)
			this.setState({magicCards: newArray, combatResult: 'base'})
		}
	}

	changeAreaHandler = () => {
		const nextArea = this.state.area + 1
		this.setState({area: nextArea})
	};

	tryAgain = () => {
		this.setState({	showChooseCharScreen: true,
						currentMonster: false,
						area: 0,
						experience: 0,
						showMonsterScreen: false,
						showGameOverPanel: false,
						openedDecks: 0,
						monsterSlain: 0})
	}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	render () {
		


		let attackCards = null;
		if(this.state.showAttackCards) {
			attackCards = 	<AttackCardsList
								attackCards={this.state.attackCards}
								name={this.state.attackCards}
								portrait={this.state.attackCards}
								text={this.state.attackCards}
								bottomText={this.state.attackCards}
								effect={this.state.attackCards}						
							/>
		}
		let defenseCards = null;
		if(this.state.showDefenseCards) {
			defenseCards = 	<DefenseCardsList
								defenseCards={this.state.defenseCards}
								name={this.state.defenseCards}
								portrait={this.state.defenseCards}
								text={this.state.defenseCards}
								bottomText={this.state.defenseCards}
								effect={this.state.defenseCards}						
							/>
		}
		let magicCards = null;
		if(this.state.showMagicCards) {
			magicCards = 	<MagicCardsList
								magicEffect={this.magicEffectHandler} 
								magicCards={this.state.magicCards}
								name={this.state.magicCards}
								portrait={this.state.magicCards}
								text={this.state.magicCards}
								bottomText={this.state.magicCards}
								effect={this.state.magicCards}						
							/>
		}


		let chooseScreen = null;
			if (this.state.showChooseCharScreen) {chooseScreen = <ChooseCharScreen choosing={this.chooseCharHandler}/>};

	

		let rewards = null;
		if (this.state.showRewards) {
				rewards = 	<ChooseRewardScreen
								choose={this.chooseRewardHandler}
								chosenChar={this.state.name}
								whichReward={this.state.whichReward}
								name={this.state.name}
							/>
		}

		let floorCheck = null;
		if (this.state.showFloorCheck) {
			floorCheck = <FloorCheck
							area={this.state.area}
							continue={this.continueHandler}
							continue={this.continueHandler}
						/>
		}

		let deck = null;
		if (this.state.showDeck) {
			deck = <Deck
						clicked={this.revealHandler}
					/>
		}
		

		let chooseMonsterScreen = null;
		if (this.state.showMonsterScreen) {
		chooseMonsterScreen = 	<ChooseMonsterScreen
									dataFromMonster={this.dataFromMonster}
									monsterType={this.state.monsterType}
									area={this.state.area}
									name={this.state.name}
								/>
		}

		let combatDetails = null;
		if (this.state.showCombatDetails) {
		combatDetails = <CombatDetails
								fightResult={this.state.fightResult}
								rng={this.state.dice}
								winning={this.showRewardHandler}
								loosing={this.continueHandler}
								baseStrengh={this.state.baseStrengh}
								strengh={this.state.strengh}
								strenghFromItem={this.state.strenghFromItem}
								bonusStrengh={this.state.bonusToDice}
								monsterDefense={this.state.currentMonster.defense}
								roll={this.attackRollHandler}
								combatResult={this.state.combatResult}
								claimRewards={this.claimRewards}
								defenseBonus={this.state.defense}
								retaliation={this.retaliationRoll}
								healpoints={this.state.health}
								continue={this.continueHandler}
								useMagicItem={this.magicItemHandler}
								continue={this.continueHandler}
								chosenChar={this.state.name}
								disabledPaladinPower={this.state.disabledPaladinPower}
								experience={this.state.currentMonster.experience}
								currentExperience ={this.state.experience}
								defense={this.state.defense}
								level={this.state.level}
							/>
		 }

		 let levelUp = null;
		 if (this.state.showLevelUpPanel) {
			 levelUp = <LevelUp
							level={this.state.level}
							claimSuperRewards={this.claimRewards}
			 			/>
		 }

		 let gameOver= null;
		 if (this.state.showGameOverPanel) {
			 gameOver = <GameOver
							tryAgain={this.tryAgain}
			 			/>
		 }

		 let bossTrailer = null;
		 if (this.state.showBossTrailer) {
			 bossTrailer = 	<BossTrailer
				 				setUpBossFight={this.revealHandler}
			 				/>
		 }

		return (
			<div className={classes.Board}>
				{this.state.showChooseCharScreen ? chooseScreen :
					<React.Fragment>
					<PlayerBoardControl>
							<CharacterPanel style={{marginLeft: '20px', marginBottom: '200px'}}
								className={classes.PanelCard}
								name={this.state.name}
								portrait={this.state.portrait}
								power={this.state.power}
								level={this.state.level}
								health={this.state.health}
								attackCards={this.state.attackCards}
								defenseCards={this.state.defenseCards}
								magicCards={this.state.magicCards}
								strengh={this.state.strengh}
								defense={this.state.defense}
								experience={this.state.experience}
								monsterSlain={this.state.monsterSlain}
								activeAttackIcon={this.state.activeAttackIcon}
								activeDefenseIcon={this.state.activeDefenseIcon}
								activeMagicIcon={this.state.activeMagicIcon}
								showAttackCards={this.showAttackCards}
								showDefenseCards={this.showDefenseCards}
								showMagicCards={this.showMagicCards}
								decks={this.state.openedDecks}
								area={this.state.area}
								percentage={this.state.experience}
								gold={this.state.gold}
								treasure={this.state.treasure.length}
								deck={this.state.openedDecks}
								monsterSlain={this.state.monsterSlain}
								area={this.state.areaName[this.state.area]}
							/>
							{attackCards}
							{defenseCards}
							{magicCards}
						</PlayerBoardControl>
						<DeckBoardControl
							background={this.state.background}
							area={this.state.area}
						>
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

export default boardBuilder;