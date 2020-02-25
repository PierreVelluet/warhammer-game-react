import React, { Component } from 'react';
import classes from './Merchant.module.css';
import TreasureCard from '../Cards/TreasureCard';
import { connect } from 'react-redux';

class merchant extends Component {
    state = {
        notEnoughGold:[false, false, false],
        itemsLevel: 'level1',
        testData: null,
    }//end of state

    componentDidMount() {
        const itemsLevel = 'level' + this.props.area.toString();

        this.setState({itemsLevel: itemsLevel})
      
    };

    choose = (item, index) => {
        if (this.props.gold >= item.price) {
            this.props.choose(item)
        }else{
            let newArray = this.state.notEnoughGold.slice();
            newArray.splice(index, 1, true)
            this.setState({notEnoughGold: newArray})
        }
    }

    render() {
        return (
            <div className={classes.Merchant}>
                <button onClick={this.props.closeMerchant} className={classes.CloseBtn}>X</button>
                <div className={classes.MerchantPortrait} />

                <div className={classes.Reward}>
                
				{this.props.state[this.props.state.itemsLevel].map((element, index)=>{
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

const mapStateToProps = state => {
    return {
        state: state.merchantReducer
    };
};

export default connect(mapStateToProps)(merchant);