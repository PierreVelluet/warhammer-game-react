import * as actionTypes from '../actions/actionTypes';

const random = (x) => {
    return Math.floor(Math.random() * x)
}

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
    showChooseWorldScreen: false,
    showBoard: false,
    showTakeoff: false,
    //Character Panel
    portrait: null,
    name: null,
    power: null,
    race: null,
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
    area: '',
    areaExplored: 0,
    currentPlanet: 'planet0',
    displayedInventory: 'attackCards',
    openedDecks: 0,
    //Undefined state
    dice: -1,
    bonusToDice: 0,
    combatResult: 'base',
    currentMonster: null,

    /////////////////////////////////////////////////////MONSTERS///////////////////////////////////////////////////////
    monsters: {
        normal: {
            desert: [],
            jungle: [],
            iceland: [],
        },
    
        boss: {
            desert: [],
            jungle: [],
            iceland: [],
        },
    },
    /////////////////////////////////////////////////////ITEMS////////////////////////////////////////////////////////////
    items: {
        normal: {
            desert: [],
            jungle: [],
            iceland: [],      
        },
        boss: {
            desert: [],
            jungle: [],
            iceland: [],
        },
    }
}

    ////////////////////////////////////////////////////END OF STATE ////////////////////////////////////////////////////////

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.GET_ITEMS_BOSS:
            const desertBossItems = action.items.filter(el => el.areaID === 2)
            const jungleBossItems = action.items.filter(el => el.areaID === 3)
            const icelandBossItems = action.items.filter(el => el.areaID === 4)

            return {
                ...state,
                items: {
                    ...state.items,
                    boss:{
                        ...state.items.boss,
                        desert: desertBossItems,
                        jungle: jungleBossItems,
                        iceland: icelandBossItems
                    }
                }
            }

        case actionTypes.GET_ITEMS_NORMAL:
            const desertItems = action.items.filter(el => el.areaID === 2)
            const jungleItems = action.items.filter(el => el.areaID === 3)
            const icelandItems = action.items.filter(el => el.areaID === 4)

            return {
                ...state,
                items: {
                    ...state.items,
                    normal:{
                        ...state.items.normal,
                        desert: desertItems,
                        jungle: jungleItems,
                        iceland: icelandItems
                    }
                }
            }
        
        case actionTypes.GET_MONSTERS:
            const desertMonsters = action.monsters.filter(el => el.areaID === 2)
            const jungleMonsters = action.monsters.filter(el => el.areaID === 3)
            const icelandMonsters = action.monsters.filter(el => el.areaID === 4)

            return {
                    ...state,
                    monsters: {
                        ...state.monsters,
                        normal: {
                            ...state.monsters.normal,
                            desert: desertMonsters,
                            jungle: jungleMonsters,
                            iceland: icelandMonsters,
                        },
                       
                }
            }

        case actionTypes.GET_BOSSES:
            const desertBosses = action.bosses.filter(el => el.areaID === 2)
            const jungleBosses = action.bosses.filter(el => el.areaID === 3)
            const icelandBosses = action.bosses.filter(el => el.areaID === 4)

            return {
                    ...state,
                    monsters: {
                        ...state.monsters,
                        boss: {
                            ...state.monsters.boss,
                            desert: desertBosses,
                            jungle: jungleBosses,
                            iceland: icelandBosses,
                        },
                        
                }
            }


        case actionTypes.SET_INITIAL_STATS: 
            const strengh = action.champ.strengh;
            const defense = action.champ.defense;
            const level = action.champ.level;
            const health = action.champ.health;
            const name = action.champ.name;
            const power = action.champ.power;
            const portrait = action.champ.portrait;
            const race = action.champ.race;
        
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
                race: race,
                showChooseCharScreen: false,
                showChooseWorldScreen: true,
            }

        case actionTypes.CHOOSE_PLANET:
            //Define the number of planet visited 
            let newPlanetNumber = parseInt(state.currentPlanet.slice(-1)) + 1
            const newPlanet = 'planet' + newPlanetNumber.toString();

            const newArea = action.area

            //Define values of attack/defense/gold/experience based on randomness AND number of planet explored.
            let monsterState = Object.assign(state.monsters.normal[action.area])
            let newMonsterState = monsterState.map((element, index) => {
                return {...element,
                    // strengh: (Math.floor(state.baseDefense / 2) + random(2) + 1) * (state.areaExplored + 1),
                    strengh: Math.floor(state.defense / 2) + random(2),
                    // defense: (state.baseStrengh + random(6) + 1) * (state.areaExplored + 1),
                    defense: state.strengh + random(6)+1,
                    gold: random(6),
                    experience: (random(5) +1)*10
                }
                })

            let bossState = Object.assign(state.monsters.boss[action.area])
            let newBossState = bossState.map((element, index) => {
                return {...element,
                    strengh: (Math.floor(state.baseDefense / 2) + random(3) + 1)  * (state.areaExplored + 1),
                    defense: (state.baseStrengh + random(10) + 3)  * (state.areaExplored + 1),
                    gold: random(10)
                }
                })

                
            return {
                ...state,
                monsters: {
                    ...state.monsters,
                    normal: {
                        ...state.monsters.normal,
                        [action.area]: newMonsterState
                    },
                    boss: {
                        ...state.monsters.boss,
                        [action.area]: newBossState
                    }
                },
               
               
                area: newArea,
                showChooseWorldScreen: false,
                showBoard: true,
                showFloorCheck: true,
                currentPlanet: newPlanet
            }

        case actionTypes.SWITCH_INVENTORY:
            return {
                ...state,
                displayedInventory: action.whichInventory,
            }

        // Handle all continue action, depending on the context of execution
        case actionTypes.CONTINUE_HANDLER: 
            
            if (state.showFloorCheck) {
                return {
                    ...state,
                    showFloorCheck: false,
                    showDeck: true,
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
            }else if (state.showBossTrailer && state.area === 'desert') {
                return  {
                    ...state,
                    showMonsterScreen: true,
                    showBossTrailer: false,
                    openedDecks: 4,

                }
            }else if (state.showBossTrailer && state.area === 'jungle') {
                return  {
                    ...state,
                    showMonsterScreen: true,
                    showBossTrailer: false,
                    openedDecks: 4,

                }
            }else if (state.showBossTrailer && state.area === 'iceland') {
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
            }else if (state.showTakeoff) {
                return {
                    ...state,
                    showChooseWorldScreen: true,
                    showTakeoff: false,
                    showBoard: false,
                }
            }
            break;
        
        case actionTypes.LEVEL_AREA_BOSS_UPDATE:

            if(state.experience >= 100) {
                const newBaseStrengh = state.baseStrengh + 1;
                const newStrengh = state.strengh + 1;
                const newBaseDefense = state.baseDefense + 1;
                const newDefense = state.defense + 1;
                const newLevel = state.level +1;
                const newExperience = state.experience - 100;

                return {
                    ...state,
                    level: newLevel,
                    experience: newExperience,
                    baseStrengh: newBaseStrengh,
                    baseDefense: newBaseDefense,
                    strengh: newStrengh,
                    defense: newDefense,
                    showLevelUpPanel: true,
                    showCombatDetails: false,
                    showMonsterScreen: false,
                    showDeck: false,
                }

            }else if (state.currentMonster.monsterType === 'boss') {
                const areaExplored = state.areaExplored + 1;
                const newOpenedDeck =0;

                return {
                    ...state,
                    showTakeoff: true,
                    // showFloorCheck: true,
                    showDeck: false,
                    areaExplored: areaExplored,
                    openedDecks: newOpenedDeck,
                }
            }
            return state;
            

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
            let newGold = state.currentMonster.gold + state.gold
            
            if (dice !== 1 && (result >= state.currentMonster.defense || dice === 6)) {
                if (state.currentMonster.monsterType === 'boss') {
                    return {
                        ...state,
                        dice: dice,
                        combatResult: 'win',
                        experience: newExperience,
                        bossSlain: bossSlain,
                        gold: newGold
                    }
                }else{
                    return {
                        ...state,
                        dice: dice,
                        combatResult: 'win',
                        experience: newExperience,
                        monsterSlain: monsterSlain,
                        gold: newGold
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