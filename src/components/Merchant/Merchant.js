import React, { Component } from 'react';
import classes from './Merchant.module.css'
import TreasureCard from '../Cards/TreasureCard'

class merchant extends Component {
    state = {
        level1: [
            {
            name: 'Helmet',
            portrait: '/images/DefenseItems/Helmet.png',
            text: "A tactical helmet.",
            type: 'defenseCards',
            bottomText: 'Permanent effect',
            effect: 'Defense + 1',
            defense: 1,
            tooltip: 'Helmet : Defense +1.',
            price: 5,
            },
            {
            name: 'Iron fist',
            portrait: '/images/DefenseItems/Fist.png',
            text: "A solid glove.",
            type: 'defenseCards',
            bottomText: 'Permanent effect',
            effect: 'Defense + 1',
            defense: 1,
            tooltip: 'Iron fist : Defense + 1.',
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
            name: 'Bolter',
            portrait: '/images/StrenghItems/Bolter.png' ,
            text: "A good gun.",
            type: 'attackCards',
            bottomText: 'Permanent effect',
            effect: 'Strengh + 1',
            strengh: 1,
            tooltip: 'Bolter : Strengh + 1.',
            price: 5,
            },
            {
            name: 'Eldary laser',
            portrait: '/images/StrenghItems/EldaryLaser.png' ,
            text: "A good laser.",
            type: 'attackCards',
            bottomText: 'Permanent effect',
            effect: 'Strengh + 1',
            strengh: 1,
            tooltip: 'Eldary laser : Strengh + 1.',
            price: 5,
            },
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
            name: 'Axe',
            portrait: '/images/StrenghItems/Axe.png',
            text: "A strong weapon.",
            type: 'attackCards',
            bottomText: 'Permanent effect',
            effect: 'Strengh + 1',
            strengh: 1,
            tooltip: 'Axe : Strengh + 1.',
            price: 5,
            },
            {
            name: 'Sword',
            portrait: '/images/StrenghItems/Sword.png',
            text: "A simple sword.",
            type: 'attackCards',
            bottomText: 'Permanent effect',
            effect: 'Strengh + 1',
            strengh: 1,
            tooltip: 'Sword : Strengh + 1.',
            price: 5,
            },
            {
            name: 'Chainsword',
            portrait: '/images/StrenghItems/Chainsword.png',
            text: "A powerfull sword.",
            type: 'attackCards',
            bottomText: 'Permanent effect',
            effect: 'Strengh + 2',
            strengh: 2,
            tooltip: 'Chainsword : Strengh + 2.',
            price: 5,
            },
        ],
        notEnoughGold:[false, false, false],
        rngArray: [],
        itemsLevel: null,
    }//end of state

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.treasure.length != this.props.treasure.length;
    // }
    componentDidMount() {
        const itemsLevel = 'level' + this.props.area.toString();

        let rngArray = [];
        while(rngArray.length < 3) {
            let number = Math.floor(Math.random() * this.state[itemsLevel].length);
            if (rngArray.indexOf(number) === -1) {
                rngArray.push(number)
            }
        }
        this.setState({rngArray: rngArray, itemsLevel: itemsLevel})
    };

    choose = (item, index) => {
        if (this.props.gold >= item.price) {
            this.props.choose(item)
        }else{
            let newArray = this.state.notEnoughGold
            newArray.splice(index, 1, true)
            this.setState({notEnoughGold: newArray})
        }
    }

    render() {
 

        return (
            <div className={classes.Merchant}>
                <div className={classes.MerchantPortrait}></div>

                <div className={classes.Reward}>
                
				{this.state.rngArray.map((rng, index)=>{
					return (
                        <div style={this.state.notEnoughGold[index] ? {WebkitFilter: 'grayscale(1)'} : null} key={index} className={classes.Items}>
                            <TreasureCard
                                text={this.state[this.state.itemsLevel][rng].text}
                                name={this.state[this.state.itemsLevel][rng].name}
                                portrait={this.state[this.state.itemsLevel][rng].portrait}
                                bottomText={this.state[this.state.itemsLevel][rng].bottomText}
                                effect={this.state[this.state.itemsLevel][rng].effect}
                                choose={(() => this.choose(this.state[this.state.itemsLevel][rng], index))}
                                
                            />
                            <div style={{display: 'table', margin: '0 auto'}}><span className={classes.Price}>{this.state[this.state.itemsLevel][rng].price}</span><span className={classes.Gold}></span></div> 
                        </div>
					)
				})}
                </div>
            </div>
        )
    }
}

export default merchant;