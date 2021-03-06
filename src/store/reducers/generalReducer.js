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
    visitedPlanet: [false, false, false],
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
            desert: [
                {
                name: 'Gretchin',
                portrait: '"https://i.pinimg.com/736x/66/4b/63/664b63471ddb229de325e1a0ebec98b7.jpg"',
                text: "No special rules",
                level: 1,
                experience: 20,
                treasure: 1,
                strengh: 1,
                defense: 1,
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
                strengh: 1,
                defense: 1,
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
                strengh: 1,
                defense: 1,
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
                strengh: 1,
                defense: 1,
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
                strengh: 1,
                defense: 1,
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
                strengh: 1,
                defense: 1,
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
                strengh: 1,
                defense: 1,
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
                strengh: 1,
                defense: 1,
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
                strengh: 1,
                defense: 1,
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
                strengh: 1,
                defense: 1,
                gold: 5,
                monsterType: 'normal',
                },
            ],
            jungle: [
                
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
            iceland: [
                {
                name: 'Plague marine',
                portrait: '"https://i.pinimg.com/564x/cd/13/3a/cd133ad79712115594c0b1c812ffbd4c.jpg"',
                text: "No special rules",
                level: 1,
                experience: 20,
                treasure: 1,
                strengh: 1,
                defense: 1,
                gold: 1,
                monsterType: 'normal',
                },
                {
                name: 'Tzeentch marine',
                portrait: '"https://i.pinimg.com/564x/b1/8a/52/b18a52561d465fb8e91c51503d3a567f.jpg"',
                text: "No special rules",
                level: 2,
                experience: 20,
                treasure: 1,
                strengh: 1,
                defense: 1,
                gold: 1,
                monsterType: 'normal',
                },
                {
                name: 'Slanesh marine',
                portrait: '"https://wh40kart.im/_images/7116546a5c937000d1c562d910fb4c78.jpg"',
                text: "No special rules",
                level: 3,
                experience: 30,
                treasure: 1,
                strengh: 1,
                defense: 1,
                gold: 2,
                monsterType: 'normal',
                },
                {
                name: 'Khorne marine',
                portrait: '"https://cdnb.artstation.com/p/assets/images/images/016/657/059/large/alexandr-erohov-khorn-ava.jpg?1552981463"',
                text: "No special rules",
                level: 4,
                experience: 30,
                treasure: 1,
                strengh: 1,
                defense: 1,
                gold: 2,
                monsterType: 'normal',
                },
                {
                name: 'Nurgle deamon',
                portrait: '"https://i.pinimg.com/originals/ae/96/dd/ae96ddb4420ea7fafe725ad696b93908.jpg"',
                text: "No special rules",
                level: 5,
                experience: 40,
                treasure: 1,
                strengh: 1,
                defense: 1,
                gold: 3,
                monsterType: 'normal',
                },
                {
                name: 'Khorne deamon',
                portrait: 'https://spikeybits.com/wp-content/uploads/2017/01/Bloodletter-badass.jpg',
                text: "No special rules",
                level: 6,
                experience: 40,
                treasure: 1,
                strengh: 1,
                defense: 1,
                gold: 3,
                monsterType: 'normal',
                },
                {
                name: 'Slanesh deamon',
                portrait: '"https://omnis-bibliotheca.com/images/1/11/Gardien_Des_Secrets.jpg"',
                text: "No special rules",
                level: 7,
                experience: 40,
                treasure: 1,
                strengh: 1,
                defense: 1,
                gold: 4,
                monsterType: 'normal',
                },
                {
                name: 'Tzeentch deamon',
                portrait: '"https://spikeybits.com/wp-content/uploads/2016/12/fateweaver.jpg"',
                text: "No special rules",
                level: 8,
                experience: 40,
                treasure: 1,
                strengh: 1,
                defense: 1,
                gold: 4,
                monsterType: 'normal',
                },
                {
                name: 'Chaos space marine',
                portrait: 'https://i.pinimg.com/564x/67/29/f8/6729f82b67fc812f97e25c7fb5a06d04.jpg',
                text: "No special rules",
                level: 9,
                experience: 40,
                treasure: 1,
                strengh: 1,
                defense: 1,
                gold: 5,
                monsterType: 'normal',
                },
                {
                name: 'Cultist of chaos',
                portrait: '"https://cdnb.artstation.com/p/assets/images/images/015/888/643/large/edouard-boccard-art-bfg-gui-portrait-chaosrenegade-02.jpg?1550058290"',
                text: "No special rules",
                level: 10,
                experience: 40,
                treasure: 1,
                strengh: 1,
                defense: 1,
                gold: 5,
                monsterType: 'normal',
                },
            ],
        },
    
        boss: {
            desert: [
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
            jungle: [
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
            ],
            iceland: [
                {
                name: 'Great ugly',
                portrait: '"https://i.pinimg.com/originals/1f/c3/11/1fc3118c797bd8cfbdb75ecc8e90e5af.jpg"',
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
                name: '"Khorne prince',
                portrait: '"https://i.pinimg.com/originals/50/33/ff/5033ff304fd895036967563b4323083b.jpg"',
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
                name: 'Abbadon',
                portrait: '"https://1d4chan.org/images/thumb/6/65/Abbadon.jpg/330px-Abbadon.jpg"',
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
            
        },
    },
    /////////////////////////////////////////////////////ITEMS////////////////////////////////////////////////////////////
    items: {
        normal: {
            planet1: [
                {
                name: 'Dope syringe',
                portrait: '/images/MagicItems/Syringe.png',
                text: "A mystic substance.",
                type :'specialCards',
                bottomText: 'One use only',
                effect: 'Strengh + 3',
                tooltip: 'Dope syringe : Strengh + 3.'  
                },
                {
                name: 'Painkillers',
                portrait: '/images/MagicItems/Pills.png',
                text: "A healthy pill.",
                type :'specialCards',
                bottomText: 'One use only',
                effect: 'Hp + 2',
                tooltip: 'Painkillers : Hp + 2.'
                },
                {
                name: 'Helmet',
                portrait: '/images/DefenseItems/Helmet.png',
                text: "A tactical helmet.",
                type: 'defenseCards',
                bottomText: 'Permanent effect',
                effect: 'Defense + 1',
                defense: 1,
                tooltip: 'Helmet : Defense +1.'
                },
                {
                name: 'Iron fist',
                portrait: '/images/DefenseItems/Fist.png',
                text: "A solid glove.",
                type: 'defenseCards',
                bottomText: 'Permanent effect',
                effect: 'Defense + 1',
                defense: 1,
                tooltip: 'Iron fist : Defense + 1.'
                },
                {
                name: 'Bolter',
                portrait: '/images/StrenghItems/Bolter.png' ,
                text: "A good gun.",
                type: 'attackCards',
                bottomText: 'Permanent effect',
                effect: 'Strengh + 1',
                strengh: 1,
                tooltip: 'Bolter : Strengh + 1.'
                },
                {
                name: 'Eldary laser',
                portrait: '/images/StrenghItems/EldaryLaser.png' ,
                text: "A good laser.",
                type: 'attackCards',
                bottomText: 'Permanent effect',
                effect: 'Strengh + 1',
                strengh: 1,
                tooltip: 'Eldary laser : Strengh + 1.'
                },
                {
                name: 'Sword',
                portrait: '/images/StrenghItems/Sword.png',
                text: "A simple sword.",
                type: 'attackCards',
                bottomText: 'Permanent effect',
                effect: 'Strengh + 1',
                strengh: 1,
                tooltip: 'Sword : Strengh + 1.'
                },
            ],
            planet2: [
                {
                name: 'Frag grenade',
                portrait: '/images/FragGrenade.png',
                text: "Bang !",
                type :'specialCards',
                bottomText: 'One use only',
                effect: 'Strengh + 5',
                tooltip: 'Frag grenade : Strengh + 5.'
                },
                {
                name: 'Vital kit',
                portrait: '/images/VitalKit.png',
                text: "Not junkie.",
                type :'specialCards',
                bottomText: 'One use only',
                effect: 'Hp + 3',
                tooltip: 'Vital kit : Hp + 3.'
                },
                {
                name: 'Commando vest',
                portrait: '/images/CommandoVest.png',
                text: "A tactical vest.",
                type: 'defenseCards',
                bottomText: 'Permanent effect',
                effect: 'Defense + 2',
                defense: 2,
                tooltip: 'Commando vest : Defense +2.'
                },
                {
                name: 'Helmet 2.0',
                portrait: '/images/Helmet2.0.png',
                text: "A solid helmet.",
                type: 'defenseCards',
                bottomText: 'Permanent effect',
                effect: 'Defense + 2',
                defense: 2,
                tooltip: 'Helmet 2.0 : Defense + 2.'
                },
                {
                name: 'Laser pistol',
                portrait: '/images/LaserPistol.png' ,
                text: "A good pistol.",
                type: 'attackCards',
                bottomText: 'Permanent effect',
                effect: 'Strengh + 2',
                strengh: 2,
                tooltip: 'Laser pistol : Strengh + 2.'
                },
                {
                name: 'Crusader gun',
                portrait: '/images/CrusaderGun.png' ,
                text: "Crusading...",
                type: 'attackCards',
                bottomText: 'Permanent effect',
                effect: 'Strengh + 2',
                strengh: 2,
                tooltip: 'Crusader gun : Strengh + 2.'
                },
                {
                name: 'Hammer',
                portrait: '/images/Hammer.png',
                text: "A solid hammer.",
                type: 'attackCards',
                bottomText: 'Permanent effect',
                effect: 'Strengh + 2',
                strengh: 2,
                tooltip: 'Hammer : Strengh + 2.'
                },
            ],
            planet3: [
                {
                name: 'Frag grenade',
                portrait: '/images/FragGrenade.png',
                text: "Bang !",
                type :'specialCards',
                bottomText: 'One use only',
                effect: 'Strengh + 5',
                tooltip: 'Frag grenade : Strengh + 5.'
                },
                {
                name: 'Vital kit',
                portrait: '/images/VitalKit.png',
                text: "Not junkie.",
                type :'specialCards',
                bottomText: 'One use only',
                effect: 'Hp + 3',
                tooltip: 'Vital kit : Hp + 3.'
                },
                {
                name: 'Commando vest',
                portrait: '/images/CommandoVest.png',
                text: "A tactical vest.",
                type: 'defenseCards',
                bottomText: 'Permanent effect',
                effect: 'Defense + 2',
                defense: 2,
                tooltip: 'Commando vest : Defense +2.'
                },
                {
                name: 'Helmet 2.0',
                portrait: '/images/Helmet2.0.png',
                text: "A solid helmet.",
                type: 'defenseCards',
                bottomText: 'Permanent effect',
                effect: 'Defense + 2',
                defense: 2,
                tooltip: 'Helmet 2.0 : Defense + 2.'
                },
                {
                name: 'Laser pistol',
                portrait: '/images/LaserPistol.png' ,
                text: "A good pistol.",
                type: 'attackCards',
                bottomText: 'Permanent effect',
                effect: 'Strengh + 2',
                strengh: 2,
                tooltip: 'Laser pistol : Strengh + 2.'
                },
                {
                name: 'Crusader gun',
                portrait: '/images/CrusaderGun.png' ,
                text: "Crusading...",
                type: 'attackCards',
                bottomText: 'Permanent effect',
                effect: 'Strengh + 2',
                strengh: 2,
                tooltip: 'Crusader gun : Strengh + 2.'
                },
                {
                name: 'Hammer',
                portrait: '/images/Hammer.png',
                text: "A solid hammer.",
                type: 'attackCards',
                bottomText: 'Permanent effect',
                effect: 'Strengh + 2',
                strengh: 2,
                tooltip: 'Hammer : Strengh + 2.'
                },
            ],
                
        },
        boss: {
            planet1: [
                {
                name: 'Heavy gauntlet',
                portrait: '/images/StrenghItems/HeavyGauntlet.png',
                text: "An awesome sword.",
                type: 'attackCards',
                bottomText: 'Permanent effect',
                effect: 'Strengh + 2',
                strengh: 2,
                tooltip: 'Heavy gauntlet : Strengh + 2.',
                },
                {
                name: 'Bi-pills',
                portrait: '/images/MagicItems/BiPills.png',
                text: "Not so healthy.",
                type :'specialCards',
                bottomText: 'One use only',
                effect: 'Hp + 2. Strengh + 3.',
                tooltip: 'Bi-pills : Hp + 2 & Strengh + 3. (this turn only)',
                },
                {
                name: 'Heroic shield',
                portrait: '/images/DefenseItems/HeroicShield.png',
                text: "An awesome shield.",
                type: 'defenseCards',
                bottomText: 'Permanent effect',
                effect: 'Defense + 2',
                defense: 2,
                tooltip: 'Heroic shield : Defense + 2.',
                },
            ],
            planet2: [
                {
                name: 'Sniper rifle',
                portrait: '/images/SniperRifle.png',
                text: "Never miss.",
                type: 'attackCards',
                bottomText: 'Permanent effect',
                effect: 'Strengh + 3',
                strengh: 3,
                tooltip: 'Sniper rifle : Strengh + 3.',
                },
                {
                name: 'Disco grenade',
                portrait: '/images/DiscoGrenade.png',
                text: "Pshit then boom.",
                type :'specialCards',
                bottomText: 'One use only',
                effect: 'Strengh + 8.',
                tooltip: 'Disco grenade : Strengh + 8.',
                },
                {
                name: 'Force field',
                portrait: '/images/ForceField.png',
                text: "Can't go through.",
                type: 'defenseCards',
                bottomText: 'Permanent effect',
                effect: 'Defense + 3',
                defense: 3,
                tooltip: 'Force field : Defense + 3.',
                },
            ],
            planet3: [
                {
                name: 'Sniper rifle',
                portrait: '/images/SniperRifle.png',
                text: "Never miss.",
                type: 'attackCards',
                bottomText: 'Permanent effect',
                effect: 'Strengh + 3',
                strengh: 3,
                tooltip: 'Sniper rifle : Strengh + 3.',
                },
                {
                name: 'Disco grenade',
                portrait: '/images/DiscoGrenade.png',
                text: "Pshit then boom.",
                type :'specialCards',
                bottomText: 'One use only',
                effect: 'Strengh + 8.',
                tooltip: 'Disco grenade : Strengh + 8.',
                },
                {
                name: 'Force field',
                portrait: '/images/ForceField.png',
                text: "Can't go through.",
                type: 'defenseCards',
                bottomText: 'Permanent effect',
                effect: 'Defense + 3',
                defense: 3,
                tooltip: 'Force field : Defense + 3.',
                },
            ],
                
        },
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
            //Set a new array which represent the visited planets
            const newVisitedPlanet = state.visitedPlanet.slice()
            newVisitedPlanet.splice(action.index, 1, true)

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
                console.log(newMonsterState, action.area)

                
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
               
                visitedPlanet: newVisitedPlanet,
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