const initialState = {
    champion: [
        {
        name: 'Eldar captain',
        portrait: '"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaP-JrdkZe93nv38CPRPPtK4u7RFPzU_yjxhHmb742NYCoK2_W"',
        powerName: "Treasure hunter",
        power: "you can choose among one extra treasure.",
        race: 'Eldar',
        level: 1,
        health: 5,
        strengh: 1,
        defense: 8,
        },
        {
            name: 'Ork warboss',
            portrait: '"https://i.pinimg.com/originals/0c/7e/42/0c7e42516d24dda0623159684b3cd0dd.png"',
            powerName: "Force of nature",
            power: "start the adventure level 2, hence + 1 strengh & + 1 defense.",
            race: 'Ork',
            level: 2,
            health: 5,
            strengh: 2,
            defense: 9,
            },
        {
        name: 'Apothecary',
        portrait: '"https://steamuserimages-a.akamaihd.net/ugc/309989521282467328/0CDEB65710274E292A4415B417FC692E0C5BF435/"',
        powerName: "Medic",
        power: "double all your medics effectiveness.",
        race: 'Space marines',
        level: 1,
        health: 5,
        strengh: 1,
        defense: 8,
        },
        {
        name: 'Tau commander',
        portrait: '"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCtFJkeVHE_pGtAYlylsy_m9iPXW_0vQVtA&usqp=CAU"',
        powerName: "Reconnaissance drone",
        power: " you can choose your fights among one extra ennemy.",
        race: 'Tau',
        level: 1,
        health: 5,
        strengh: 1,
        defense: 8,
        },
        

    ]
}

const reducer = (state = initialState) => {
return state;
}

export default reducer;