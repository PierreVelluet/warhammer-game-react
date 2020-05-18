import React, { useState } from 'react';
import classes from './Merchant.module.css';
import TreasureCard from '../Cards/TreasureCard';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

const Merchant = (props) => {
    const [notEnoughGold, setNotEnoughGold] = useState([false, false, false])

    const choose = (item, index) => {
        if (props.generalState.gold >= item.price) {
            props.chooseReward(item)
        }else{
            let newArray = notEnoughGold.slice();
            newArray.splice(index, 1, true)
            setNotEnoughGold(newArray)
        }
    }

        return (
            <div className={classes.Merchant}>
                <button onClick={props.closeMerchant} className={classes.CloseBtn}>X</button>
                <div className={classes.MerchantPortrait} />

                <div className={classes.Reward}>
                
				{props.merchantState[props.generalState.area].map((element, index)=>{
					return (
                        <div style={notEnoughGold[index] ? {WebkitFilter: 'grayscale(1)'} : null} key={index} className={classes.Items}>
                            <TreasureCard
                                text={element.text}
                                name={element.name}
                                portrait={element.portrait}
                                bottomText={element.bottomText}
                                effect={element.effect}
                                choose={(() => choose(element, index))}
                                
                            />
                            <div style={{display: 'table', margin: '0 auto'}}><span className={classes.Price}>{element.price}</span><span className={classes.Gold}></span></div> 
                        </div>
					)
				})}
                </div>
            </div>
        )
}

const mapStateToProps = state => {
    return {
        merchantState: state.merchantReducer,
        generalState: state.generalReducer,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        chooseReward: (treasure) => dispatch(actionCreators.chooseReward(treasure)),
        closeMerchant: () => dispatch(actionCreators.closeMerchant())
		
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Merchant);