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
        

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INITIAL_STATS': 
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
                area: 0,
                showChooseCharScreen: false,
                showFloorCheck: true,
            }
        case 'SWITCH_INVENTORY':
            return {
                ...state,
                whichInventory: action.whichInventory,
                inventoryColor: action.whichInventory,
            }
        default: return state
    }
    return state;

}

export default reducer;