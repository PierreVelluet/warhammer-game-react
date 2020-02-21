import React, { Component } from 'react';
import classes from './Merchant.module.css'
import TreasureCard from '../Cards/TreasureCard'

class merchant extends Component {
    state = {
        level1: [
            {
            name: 'Plasma gun',
            portrait: '/images/StrenghItems/PlasmaGun.png' ,
            text: "A good laser.",
            type: 'attackCards',
            bottomText: 'Permanent effect',
            effect: 'Strengh + 2',
            strengh: 2,
            tooltip: 'Plasma gun : Strengh + 2.',
            price: 5
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
            price: 5
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
            price: 5
            },
        ],
        notEnoughGold:[false, false, false],
        itemsLevel: null,
    }//end of state

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.treasure.length != this.props.treasure.length;
    // }
    componentWillMount() {
        const itemsLevel = 'level' + this.props.area.toString();

        this.setState({itemsLevel: itemsLevel})

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
            <button onClick={this.props.closeMerchant} className={classes.CloseBtn}>X</button>
                <div className={classes.MerchantPortrait}></div>

                <div className={classes.Reward}>
                
				{this.state[this.state.itemsLevel].map((element, index)=>{
					return (
                        <div style={this.state.notEnoughGold[index] ? {WebkitFilter: 'grayscale(1)'} : null} key={index} className={classes.Items}>
                            <TreasureCard
                                text={element.text}
                                name={element.name}
                                portrait={element.portrait}
                                bottomText={element.bottomText}
                                effect={element.effect}
                                choose={(() => this.choose(element, index))}
                                
                            />
                            <div style={{display: 'table', margin: '0 auto'}}><span className={classes.Price}>{element.price}</span><span className={classes.Gold}></span></div> 
                        </div>
					)
				})}
                </div>
            </div>
        )
    }
}

export default merchant;