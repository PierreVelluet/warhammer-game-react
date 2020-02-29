import * as actionTypes from '../actions/actionTypes';

const initialState = {
    //DISPLAY OF DIFFERENT SECTIONS
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
    //////////////////////////////////////////////
    combatResult: 'base',
    activeAttackIcon: false,
    activeDefenseIcon: false,
    activeMagicIcon: false,
    area: 'area0',
    areaName: ['Space', 'Desert', 'Jungle', 'IceLand'],
    areaExplored: 0,
    //Character Panel
    portrait: null,
    name: null,
    power: null,
    level: 0,
    health: 1,
    experience: 0,
    strengh: 0,
    baseStrengh: 0,
    strenghFromItem: 0,
    totalStrengh: 0,
    defense: 0,
    baseDefense:0,
    defenseFromItem: 0,
    monsterSlain: 0,
    bossSlain: 0,
    gold: 0,
    treasure:[],
    displayedInventory: 'attackCards',
    openedDecks: 0,
    dice: -1,
    bonusToDice: 0,
    currentMonster: null,
    background:{
        area0: 'https://www.azutura.com/media/catalog/product/cache/49/image/650x/040ec09b1e35df139433887a97daa66f/W/S/WS-47373_WP.jpg',
        area1: 'https://www.wallpaperflare.com/static/581/364/24/artwork-fantasy-art-digital-art-desert-wallpaper.jpg',
        area2: 'https://i.pinimg.com/originals/1d/34/cd/1d34cdbcbc3ebb9d59d2e455c249a82c.jpg',
        area3: 'https://c.wallhere.com/photos/aa/d7/fantasy_art_snow_mountains_landscape-211055.jpg!d',
    }
               
        

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INITIAL_STATS: 
            const strengh = action.champ.strengh;
            const defense = action.champ.defense;
            const level = action.champ.level;
            const health = action.champ.health;
            const name = action.champ.name;
            const power = action.champ.power;
            const portrait = action.champ.portrait;
        
            return {
                ...state,
                strengh: strengh,
                baseStrengh: strengh,
                defense: defense,
                baseDefense: defense,
                level: level,
                health: health,
                name: name,
                power: power,
                portrait: portrait,
                showChooseCharScreen: false,
                showFloorCheck: true,
            }

        case actionTypes.SWITCH_INVENTORY:
            return {
                ...state,
                displayedInventory: action.whichInventory,
            }

        // Handle all continue action, depending on the context of execution
        case actionTypes.CONTINUE_HANDLER: 
            
            if (state.area === 'area0') {
                let newArea = parseInt(state.area.slice(-1)) + 1
                newArea = 'area' + newArea.toString()
                const areaExplored = state.areaExplored + 1;
                return {
                    ...state,
                    area: newArea,
                    areaExplored: areaExplored
                }
            }else if (state.showFloorCheck && state.area === 'area1') {
                return {
                    ...state,
                    showFloorCheck: false,
                    showDeck: true
                }
            }else if (state.combatResult === 'saved') {
                return {
                    ...state,
                    combatResult: 'base',
                }
            }else if (state.combatResult === 'wounded' && state.health > 0) {
                return {
                    ...state,
                    combatResult: 'base'
                }
            }else if (state.health === 0) {
                return {
                    ...state,
                    showGameOverPanel: true,
                    showCombatDetails: false,
                }
            }else if(state.showFloorCheck && state.area === 'area2'){
                return {
                    ...state,
                    showFloorCheck: false,
                    showDeck: true,
                }
            }else if (state.showBossTrailer && state.area === 'area1') {
                return  {
                    ...state,
                    showMonsterScreen: true,
                    showBossTrailer: false,
                    openedDecks: 4,

                }
            }else if (state.showBossTrailer && state.area === 'area2') {
                return  {
                    ...state,
                    showMonsterScreen: true,
                    showBossTrailer: false,
                    openedDecks: 4,

                }
            }else if (state.showLevelUpPanel) {
                    return {
                        ...state,
                        showDeck: true,
                        showLevelUpPanel: false,
                    }
                }
            break;
        
        case actionTypes.LEVEL_AREA_BOSS_UPDATE:

            if(state.experience >= 100) {
                const newStrengh = state.baseStrengh + 1;
                const newDefense = state.baseDefense + 1;
                const newLevel = state.level +1;
                const newExperience = state.experience - 100;

                return {
                    ...state,
                    level: newLevel,
                    experience: newExperience,
                    baseStrengh: newStrengh,
                    baseDefense: newDefense,
                    showLevelUpPanel: true,
                    showCombatDetails: false,
                    showMonsterScreen: false,
                    showDeck: false,
                }

            }else if (state.currentMonster.monsterType === 'boss') {
                let newArea = parseInt(state.area.slice(-1)) + 1
                newArea = 'area' + newArea.toString()
                const areaExplored = state.areaExplored + 1;
                const newOpenedDeck =0;

                return {
                    ...state,
                    showFloorCheck: true,
                    showDeck: false,
                    area: newArea,
                    areaExplored: areaExplored,
                    openedDecks: newOpenedDeck,
                }
            }
            return state
            
            

        case actionTypes.CHOOSE_MONSTER:
            const chosenMonster = action.monster;
            return {
                ...state,
                currentMonster: chosenMonster,
                showCombatDetails: true,
                combatResult: 'base',
            }
            
        case actionTypes.REVEAL_HANDLER:

            if (state.openedDecks === 3) {
                
                return {
                    ...state,
                    showBossTrailer: true,
                    showMonsterScreen: false,
                    showCombatDetails: false,
                    showDeck: false,
                    bonusToDice: 0,
                    currentMonster: null,
                    whichReward: 'super',
                }
                
            }else {
                const updatedopenedDecks = state.openedDecks +1;
                return {
                    ...state,
                    showMonsterScreen: true,
                    showDeck: false,
                    bonusToDice: 0,
                    openedDecks: updatedopenedDecks,
                    currentMonster: null
                }

            }
            
        case actionTypes.ROLL_ATTACK_DICE:
            
            const dice = Math.floor(Math.random() * 6) + 1 ;
            const result = dice + state.strengh + state.bonusToDice;
            const monsterSlain = state.monsterSlain + 1;
            const bossSlain = state.bossSlain +1;
            let newExperience = state.currentMonster.experience + state.experience
            if (newExperience > 100) {newExperience = 100};
            
            if (dice !== 1 && (result >= state.currentMonster.defense || dice === 6)) {
                if (state.currentMonster.monsterType === 'boss') {
                    return {
                        ...state,
                        dice: dice,
                        combatResult: 'win',
                        experience: newExperience,
                        bossSlain: bossSlain
                    }
                }else{
                    return {
                        ...state,
                        dice: dice,
                        combatResult: 'win',
                        experience: newExperience,
                        monsterSlain: monsterSlain
                    }
                }
                
            }else {
                return {
                    ...state,
                    dice: dice,
                    combatResult: 'retaliation'
                }
            }
        
        case actionTypes.ROLL_RETALIATION_DICE:

            const retaliationDice = Math.floor(Math.random() * 6) + 1 ;
            const retaliationResult = retaliationDice + state.currentMonster.strengh;

            if (retaliationDice !== 1 && (retaliationDice === 6 || retaliationResult > state.defense)) {
                const newHealth = state.health - 1;
                return {
                    ...state,
                    combatResult: 'wounded',
                    dice: retaliationDice,
                    health: newHealth
                }
                

            }else {
                return {
                    ...state,
                    combatResult: 'saved',
                    dice: retaliationDice
                }
                
            }
        
        case actionTypes.CLAIM_REWARDS:

            return {
                ...state,
                showRewards: true,
                showMonsterScreen: false,
                showCombatDetails: false,
                showLevelUpPanel: false,
            }

        case actionTypes.CHOOSE_REWARD:

            if (isNaN(action.treasure)) {

                let newTreasure = state.treasure.slice();
                newTreasure.push(action.treasure)

                //Calculate the new strengh & defenses variables and update the state
                const strenghFromItem = newTreasure.map(treasure => {
                    if(treasure.hasOwnProperty('strengh')) {
                        return treasure.strengh;
                    }else{
                        return null;
                    }
                }).reduce((a, b) => a + b, 0);

                const defenseFromItem = newTreasure.map(treasure => {
                    if(treasure.hasOwnProperty('defense')) {
                        return treasure.defense;
                    }else{
                        return null;
                    }
                }).reduce((a, b) => a + b, 0);

                const newStrengh = state.baseStrengh + strenghFromItem;
                const newDefense = state.baseDefense + defenseFromItem;
                let newGold = state.gold;

                if(action.treasure.hasOwnProperty('price')) {
                    newGold = state.gold - action.treasure.price;
                }
                let displayedInventory = action.treasure.type;

                return {
                    ...state,
                    showDeck: true,
                    showRewards: false,
                    showMerchant: false,
                    treasure: newTreasure,
                    strenghFromItem: strenghFromItem,
                    defenseFromItem: defenseFromItem,
                    strengh: newStrengh,
                    defense: newDefense,
                    gold: newGold,
                    displayedInventory: displayedInventory
                    
                }
            
            }else {
                const newGold = state.gold + action.treasure;

                return {
                    ...state,
                    showDeck: true,
                    showRewards: false,
                    gold: newGold,
                }
            }

        case actionTypes.SHOW_MERCHANT:
            return {
                ...state,
                showMerchant: true,
                showDeck: false,
            }
        case actionTypes.CLOSE_MERCHANT:
            return {
                ...state,
                showDeck: true,
                showMerchant: false,
            }
        default:
            return state
    }

}

export default reducer;