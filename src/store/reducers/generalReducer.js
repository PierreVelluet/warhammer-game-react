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
    //////////////////////////////////////////////
    combatResult: 'base',
    activeAttackIcon: false,
    activeDefenseIcon: false,
    activeMagicIcon: false,
    area: '',
    areaExplored: 0,
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
    displayedInventory: 'attackCards',
    openedDecks: 0,
    dice: -1,
    bonusToDice: 0,
    currentMonster: null,

    /////////////////////////////////////////////////////MONSTERS///////////////////////////////////////////////////////
    normal: {
        'desert': [
            {
            name: 'Gretchin',
            portrait: '"https://i.pinimg.com/736x/66/4b/63/664b63471ddb229de325e1a0ebec98b7.jpg"',
            text: "No special rules",
            level: 1,
            experience: 20,
            treasure: 1,
            strengh: random(5)+1,
            defense: random(5)+1,
            gold: 1,
            monsterType: 'normal',
            },
            {
            name: 'Goblin',
            portrait: '"https://i.pinimg.com/originals/81/7e/5b/817e5bac7aec46a8eddd2b2f160e1e33.jpg"',
            text: "No special rules",
            level: 2,
            experience: 20,
            treasure: 1,
            strengh: random(5)+1,
            defense: random(5)+1,
            gold: 1,
            monsterType: 'normal',
            },
            {
            name: 'Driver ork',
            portrait: '"https://i.imgur.com/bsy7yNY.jpg"',
            text: "No special rules",
            level: 3,
            experience: 30,
            treasure: 1,
            strengh: random(5)+2,
            defense: random(5)+2,
            gold: 2,
            monsterType: 'normal',
            },
            {
            name: 'Commando ork',
            portrait: '"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSA_Gjxzdc_yxPu3sxjzZoFrrGjzO25PyCN2GbeS9HMlBbs_guF"',
            text: "No special rules",
            level: 4,
            experience: 30,
            treasure: 1,
            strengh: random(5)+2,
            defense: random(5)+2,
            gold: 2,
            monsterType: 'normal',
            },
            {
            name: 'Bionic ork',
            portrait: '"https://i.pinimg.com/originals/4e/e9/6a/4ee96ac75d576c6868b4c2e8f380d6e0.jpg"',
            text: "No special rules",
            level: 5,
            experience: 40,
            treasure: 1,
            strengh: random(5)+3,
            defense: random(5)+3,
            gold: 3,
            monsterType: 'normal',
            },
            {
            name: 'Gunzer ork',
            portrait: 'https://steamuserimages-a.akamaihd.net/ugc/540755081255224268/98AE4176FDAA3C74F4EAF693DB60A9C637E7FC66/',
            text: "No special rules",
            level: 6,
            experience: 40,
            treasure: 1,
            strengh: random(5)+3,
            defense: random(5)+3,
            gold: 3,
            monsterType: 'normal',
            },
            {
            name: 'Mecano ork',
            portrait: '"https://vignette.wikia.nocookie.net/d__/images/1/1c/Dow2_ork_kommando_nob_portrait.png/revision/latest/top-crop/width/300/height/300?cb=20100822170115&path-prefix=dow"',
            text: "No special rules",
            level: 7,
            experience: 40,
            treasure: 1,
            strengh: random(5)+4,
            defense: random(5)+4,
            gold: 4,
            monsterType: 'normal',
            },
            {
            name: 'Black ork',
            portrait: '"https://i.pinimg.com/originals/8c/c1/28/8cc12838110cc1ede640d6f21de0c320.jpg"',
            text: "No special rules",
            level: 8,
            experience: 40,
            treasure: 1,
            strengh: random(5)+4,
            defense: random(5)+4,
            gold: 4,
            monsterType: 'normal',
            },
            {
            name: 'Mad ork',
            portrait: 'https://wh40kart.im/_images/3f0106998b52a41c7984f2e627a62d42.jpg',
            text: "No special rules",
            level: 9,
            experience: 40,
            treasure: 1,
            strengh: random(5)+5,
            defense: random(5)+5,
            gold: 5,
            monsterType: 'normal',
            },
            {
            name: 'Commander ork',
            portrait: '"https://vignette.wikia.nocookie.net/d__/images/f/fd/Dow2_ork_weirdboy_portrait.png/revision/latest?cb=20100822172106&path-prefix=dow"',
            text: "No special rules",
            level: 10,
            experience: 40,
            treasure: 1,
            strengh: random(5)+5,
            defense: random(5)+5,
            gold: 5,
            monsterType: 'normal',
            },
        ],
        'jungle': [
            
            {
            name: 'Termagant',
            portrait: '"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8fd9b056-0201-4c9a-9ab0-d98df3fec333/d78025b-c52adf2a-fccb-4dcd-824e-d19a64b42ff2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhmZDliMDU2LTAyMDEtNGM5YS05YWIwLWQ5OGRmM2ZlYzMzM1wvZDc4MDI1Yi1jNTJhZGYyYS1mY2NiLTRkY2QtODI0ZS1kMTlhNjRiNDJmZjIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MfHEhWo3kxbIm2xBmHAp_NYP_CFZzc5m6-PwXnK0ovA"',
            text: "No special rules",
            level: 3,
            experience: 10,
            treasure: 1,
            strengh: 9,
            defense: 8,
            gold: 6,
            monsterType: 'normal',
            },
            {
            name: 'Hormagant',
            portrait: 'https://i.pinimg.com/originals/e2/ec/cf/e2eccf5ab538fdccd90556e5a9629c9d.jpg',
            text: "No special rules",
            level: 6,
            experience: 20,
            treasure: 1,
            strengh: 8,
            defense: 9,
            gold: 6,
            monsterType: 'normal',
            },
            {
            name: 'Genestealer',
            portrait: '"https://vignette.wikia.nocookie.net/dark-heresy-rp/images/4/41/Genestealer_attack.jpg/revision/latest/scale-to-width-down/340?cb=20140617041035"',
            text: "No special rules",
            level: 1,
            experience: 10,
            treasure: 1,
            strengh: 10,
            defense: 9,
            gold: 7,
            monsterType: 'normal',
            },
            {
            name: 'Warrior',
            portrait: '"https://wh40k.lexicanum.com/mediawiki/images/thumb/2/26/TyranidWarriorArt6th.jpg/280px-TyranidWarriorArt6th.jpg"',
            text: "No special rules",
            level: 2,
            experience: 10,
            treasure: 1,
            strengh: 9,
            defense: 10,
            gold: 7,
            monsterType: 'normal',
            },
            {
            name: 'SwarmLord',
            portrait: '"https://vignette.wikia.nocookie.net/warhammer40k/images/d/d0/Swarmlord.png/revision/latest/scale-to-width-down/340?cb=20160103170035"',
            text: "No special rules",
            level: 4,
            experience: 20,
            treasure: 1,
            strengh:11,
            defense:10,
            gold: 8,
            monsterType: 'normal',
            },
            {
            name: 'BroodLord',
            portrait: '"https://i.pinimg.com/originals/7f/1d/b5/7f1db5d78fb1964b7dfd92569b92bd74.jpg"',
            text: "No special rules",
            level: 5,
            experience: 20,
            treasure: 1,
            strengh: 10,
            defense: 11,
            gold: 8,
            monsterType: 'normal',
            },
            {
            name: 'Neurothrope',
            portrait: '"https://www.frontlinegaming.org/wp-content/uploads/2018/04/Tyranid-9.jpg"',
            text: "No special rules",
            level: 7,
            experience: 30,
            treasure: 1,
            strengh: 12,
            defense: 11,
            gold: 9,
            monsterType: 'normal',
            },
            {
            name: 'Old one eye',
            portrait: 'https://vignette.wikia.nocookie.net/warhammer40k/images/7/74/Old_One_Eye-0.jpg/revision/latest/scale-to-width-down/340?cb=20161207213107',
            text: "No special rules",
            level: 8,
            experience: 30,
            treasure: 1,
            strengh: 11,
            defense: 12,
            gold: 9,
            monsterType: 'normal',
            },
            {
            name: 'Hive guard',
            portrait: 'https://vignette.wikia.nocookie.net/warhammer40k/images/5/59/Hive_Guard.png/revision/latest/scale-to-width-down/340?cb=20140304231401',
            text: "No special rules",
            level: 9,
            experience: 30,
            treasure: 1,
            strengh: 13,
            defense: 12,
            gold: 10,
            monsterType: 'normal',
            },
            {
            name: 'Hive tyran',
            portrait: '"https://omnis-bibliotheca.com/images/thumb/e/e3/TyranDesRuches.jpg/400px-TyranDesRuches.jp12"',
            text: "No special rules",
            level: 10,
            experience: 50,
            treasure: 1,
            strengh: 12,
            defense: 13,
            gold: 10,
            monsterType: 'normal',
            },
        ],
    },

    boss: {
        'desert': [
            {
            name: 'Warboss ork',
            portrait: '"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4e9174e7-6c59-43ec-a440-8e66a449d264/d8t29vd-ae5360b3-72c0-4f31-bf06-56adc9311228.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRlOTE3NGU3LTZjNTktNDNlYy1hNDQwLThlNjZhNDQ5ZDI2NFwvZDh0Mjl2ZC1hZTUzNjBiMy03MmMwLTRmMzEtYmYwNi01NmFkYzkzMTEyMjguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1w1MBV0d1OKFKmycpuTgOsciaV6TlWQzY9r_hUsmsic"',
            text: "boss special capacity",
            level: 12,
            experience: 50,
            treasure: 1,
            strengh: 0,
            defense: 0,
            gold: 10,
            monsterType: 'boss',
            },
            {
            name: '"Medic" ork',
            portrait: '"https://wh40kart.im/_images/7dcbf5eb9297c1541a49176c26da1b53.jpg"',
            text: "boss special capacity",
            level: 12,
            experience: 50,
            treasure: 1,
            strengh: 0,
            defense: 0,
            gold: 10,
            monsterType: 'boss',
            },
            {
            name: 'Fleet captain ork',
            portrait: '"https://cdna.artstation.com/p/assets/images/images/015/888/626/large/edouard-boccard-art-bfg-portrait-bloodaxes-01.jpg?1550058286"',
            text: "boss special capacity",
            level: 12,
            experience: 50,
            treasure: 1,
            strengh: 0,
            defense: 0,
            gold: 10,
            monsterType: 'boss',
            },
        ],
        
        'jungle': [
            {
            name: 'Prince',
            portrait: '"https://hobbyshop.fr/blog/wp-content/uploads/2018/12/Warhammer-40000-Tyranids-Liste-optimis%C3%A9e-%C3%A0-1700-pts.jpg"',
            text: "boss special capacity",
            level: 12,
            experience: 50,
            treasure: 1,
            strengh: 18,
            defense: 12,
            gold: 20,
            monsterType: 'boss',
            },
            {
            name: 'Lictor',
            portrait: '"https://wh40k-fr.lexicanum.com/mediawiki/images/thumb/a/af/Lictor.jpg/250px-Lictor.jpg"',
            text: "boss special capacity",
            level: 12,
            experience: 50,
            treasure: 1,
            strengh: 15,
            defense: 15,
            gold: 20,
            monsterType: 'boss',
            },
            {
            name: 'Patriarch',
            portrait: '"https://vignette.wikia.nocookie.net/warhammer40k/images/6/62/Patriarch.jpg/revision/latest/scale-to-width-down/340?cb=20180215061625"',
            text: "boss special capacity",
            level: 12,
            experience: 50,
            treasure: 1,
            strengh: 12,
            defense: 18,
            gold: 20,
            monsterType: 'boss',
            },
        ]
        
    },

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

            ////////////////////////////////////////////////TEST////////////////////////////////
        case actionTypes.CHOOSE_PLANET:
            let newArea = action.area

            const monsterState = Object.assign(state.normal[action.area])
            let newMonsterState = monsterState.map((element, index) => {
                return {...element,
                    strengh: (Math.floor(state.baseDefense / 2) + random(2) + 1) * (state.areaExplored + 1),
                    defense: (state.baseStrengh + random(6) + 1) * (state.areaExplored + 1),
                }
                })

            const bossState = Object.assign(state.boss[action.area])
            let newBossState = bossState.map((element, index) => {
                return {...element,
                    strengh: (Math.floor(state.baseDefense / 2) + random(3) + 1)  * (state.areaExplored + 1),
                    defense: (state.baseStrengh + random(10) + 3)  * (state.areaExplored + 1),
                }
                })
                
            return {
                ...state,
                normal: {
                    ...state.normal,
                    [action.area]: newMonsterState,
                },
                boss: {
                    ...state.boss,
                    [action.area]: newBossState,
                },
                area: newArea,
                showChooseWorldScreen: false,
                showBoard: true,
                showFloorCheck: true
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