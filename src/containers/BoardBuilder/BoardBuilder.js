import React, { Component } from 'react';
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
		defense: 0,
		baseDefense:0,
		defenseFromItem: 0,
		experience: 0,
		monsterSlain: 0,
		bossSlain: 0,
		gold: 0,
		treasure:[],
		totalStrengh: 0,
		attackCards: [],
		defenseCards: [],
		magicCards: [],
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

	//permite to choose your champion at the start & set up all the data
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
						showFloorCheck: true, //to rechange
						showMerchant: false, //same
						area: 0, // to rechange after tests
						portrait: portrait,
						})
	}

	//handle the inventory's 'pages' changes
	revealInventory = (type) => {
		const whichInventory = this.state[type]
		this.setState({whichInventory: whichInventory, inventoryColor: type})
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
			const newArea = this.state.area + 1;
			const areaExplored = this.state.areaExplored + 1;
			this.setState({	showDeck: false,
							area: newArea,
							areaExplored: areaExplored,
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
		if (this.state.openedDecks !== 3) {
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
		const bossSlain = this.state.bossSlain +1;
		let newExperience = this.state.currentMonster.experience + this.state.experience
		if (newExperience > 100) {newExperience = 100};


		if ((dice !== 1 && result >= this.state.currentMonster.defense) || dice === 6) {
			if(this.state.currentMonster.treasure > 0) {
				this.setState({combatResult: 'win', experience: newExperience});
			}
			if (this.state.monsterType === 'boss') {
				this.setState({ bossSlain: bossSlain})
			}else {
				this.setState({ monsterSlain: monsterSlain})
			}
			
		}else {
			this.setState({combatResult: 'retaliation'});

		}
	}

	retaliationRoll = ()  => {

		const dice = Math.floor(Math.random() * 6) + 1 ;
		const result = dice + this.state.currentMonster.strengh;

		if (dice !== 1 && (dice === 6 || result > this.state.defense)) {
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
							// currentMonster: null,
							showCombatDetails: false,
							whichReward: type,
							})
		}else {
			this.setState({	showRewards: true,
							showMonsterScreen: false,
							showLevelUpPanel: false,
							// currentMonster: null,
							showCombatDetails: false,
							whichReward: type,
							})
		}

		if (this.state.monsterType !== 'monster') {
			this.setState({whichReward: 'super'})
		}
	}

	

	continueHandler = () => {
	
		if (this.state.area === 0) {
			const newArea = this.state.area + 1;
			const areaExplored = this.state.areaExplored + 1;
			this.setState({area: newArea, areaExplored: areaExplored})
		}else if (this.state.showFloorCheck && this.state.area === 1) {
			this.setState({	showFloorCheck: false, showDeck: true})
		}else if (this.state.combatResult === 'saved') {
			this.setState({combatResult: 'base'})
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
			this.setState({	showFloorCheck: false, showDeck: true,monsterType: 'monster'})
		}

	}
	
	chooseRewardHandler = (treasure) => {
		if (isNaN(treasure)) {
			this.state.treasure.push(treasure)
			switch (treasure.type) {
				case 'attackCards':
					this.state.attackCards.push(treasure);
					break;
				case 'defenseCards':
					this.state.defenseCards.push(treasure);
					break;
				case 'magicCards':
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
							showMerchant: false,
							showDeck: true,
						})

			if(treasure.hasOwnProperty('price')) {
				const newGold = this.state.gold - treasure.price;
				this.setState({gold: newGold})
			}
			this.revealInventory(treasure.type)
		}else {
			const newGold = this.state.gold + treasure;
			this.setState({	gold: newGold,
							showRewards: false,
							showDeck: true})
		}

		this.shouldLevelOrAreaOrBossUpdate();

		
	}



////////////////////////////////////////////////MAGIC HANDLERS//////////////////////////////////////////////////////////////////
	// magicItemHandler = () => {
	// 	if (this.state.magicCards.length > 0) {
	// 		this.setState({combatResult: 'magic'})
	// 		this.revealInventory('magicCards')
	// 	}else{
	// 		this.setState({combatResult: 'magicLess'})
	// 		this.revealInventory('magicCards')
	// 	}
		
	// }

	specialEffectHandler = (data, index) => {

		if (data.type === 'magicCards') {

		
			console.log(data)

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
			const newArray = [...this.state.magicCards]	
			newArray.splice(index, 1)
			this.setState({magicCards: newArray, whichInventory: 'magicCards'})

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
						monsterSlain: 0,
						bossSlain: 0,})
	}

	openMerchant = () => {
		this.setState({showMerchant: true, showDeck: false})
	}

	closeMerchant = () => {
		this.setState({showMerchant: false, showDeck: true})
	}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	render () {

		let chooseScreen = null;
			if (this.state.showChooseCharScreen) {chooseScreen = <ChooseCharScreen choosing={this.chooseCharHandler}/>};

		let rewards = null;
		if (this.state.showRewards) {
				rewards = 	<ChooseRewardScreen
								choose={this.chooseRewardHandler}
								chosenChar={this.state.name}
								whichReward={this.state.whichReward}
								name={this.state.name}
								chosenMonster={this.state.currentMonster}
								area={this.state.area}
							/>
		}

		let floorCheck = null;
		if (this.state.showFloorCheck) {
			floorCheck = <FloorCheck
							area={this.state.area}
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
									chosenMonster={this.state.currentMonster}
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
								chosenChar={this.state.name}
								disabledPaladinPower={this.state.disabledPaladinPower}
								experience={this.state.currentMonster.experience}
								currentExperience ={this.state.experience}
								defense={this.state.defense}
								level={this.state.level}
								items={this.state.treasure}
								
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

		 let merchant = null;
		 if (this.state.showMerchant) {
			 merchant = <Merchant
							area={this.state.area}
							choose={this.chooseRewardHandler}
							treasure={this.state.treasure}
							gold={this.state.gold}
							closeMerchant={this.closeMerchant}
			 			/>
		 }
		 
		 let merchantAccess = null;
		 if (this.state.showDeck) {
			 merchantAccess = <MerchantAccess
									accessMerchant={this.openMerchant}
									showDeck={this.state.showDeck}
								/>
		}

		return (
			<div className={classes.Board}>
				{this.state.showChooseCharScreen ? chooseScreen :
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
								magicCards={this.state.magicCards}
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

export default boardBuilder;