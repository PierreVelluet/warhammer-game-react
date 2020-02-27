const initialState = {
        area1: [
            {
            name: 'Plasma gun',
            portrait: '/images/StrenghItems/PlasmaGun.png' ,
            text: "A good laser.",
            type: 'attackCards',
            bottomText: 'Permanent effect',
            effect: 'Strengh + 2',
            strengh: 2,
            tooltip: 'Plasma gun : Strengh + 2.',
            price: 5,
            },
            {
            name: 'Bullet-proof vest',
            portrait: '/images/DefenseItems/Vest.png',
            text: "Fear bullets no more.",
            type: 'defenseCards',
            bottomText: 'Permanent effect',
            effect: 'Defense + 2',
            defense: 2,
            tooltip: 'Bullet-proof vest : Defense + 2.',
            price: 5,
            },
            {
            name: 'Mix of pills',
            portrait: '/images/MixOfPills.png',
            text: "Boost metabolism.",
            type :'magicCards',
            bottomText: 'One use only',
            effect: 'Hp + 3. Strengh + 2.',
            tooltip: 'Mix of pills : Hp + 3 & Strengh + 2. (this turn only)',
            price: 5,
            },
        ],
        area2: [
            {
            name: 'Bionic hand',
            portrait: '/images/BionicHand.png',
            text: "Grab the world.",
            type: 'defenseCards',
            bottomText: 'Permanent effect',
            effect: 'Strengh + 3',
            strengh: 3,
            tooltip: 'Bionic hand : Strengh + 3.',
            price: 15,
            },
            {
            name: 'Bionic hearth',
            portrait: '/images/BionicHearth.png',
            text: "Its beating.",
            type :'magicCards',
            bottomText: 'Permanent effect',
            effect: 'Defense + 3',
            tooltip: 'Bionic hearth : Defense + 3',
            price: 15,
            },
            {
            name: 'Bionic prothesis',
            portrait: '/images/BionicProthesis.png',
            text: "Your feel repared.",
            type :'defenseCards',
            bottomText: 'Permanent effect',
            effect: 'Hp + 5.',
            tooltip: 'Bionic prothesis : Hp + 5.',
            price: 15,
            },
        ],
}

const reducer = (state = initialState) => {
    return state;
}

export default reducer;