import React from 'react';
import { connect } from 'react-redux';
import classes from './CombatDetails.module.css';
import * as actionCreators from '../../store/actions/index';

const dice1 = '/images/Dices/1.png';
const dice2 = '/images/Dices/2.png';
const dice3 = '/images/Dices/3.png';
const dice4 = '/images/Dices/4.png';
const dice5 = '/images/Dices/5.png';
const dice6 = '/images/Dices/6.png';

const combatDetails = (props) => {
	const dices = ['', dice1, dice2, dice3, dice4, dice5, dice6]

	return (	
				//set an object with different keys, and then display only the chosen key with []'s notation.
				{
					base: 
						
						<div className={classes.CombatLogs}>
						 	<p>Your <strong>strengh</strong> is : <strong>{props.generalState.strengh}</strong> (<strong>{props.generalState.baseStrengh}</strong> from base strengh + <strong>{props.generalState.strenghFromItem}</strong> from items + <strong>{props.generalState.bonusStrengh}</strong> from temporary buff.)</p>
							<p>To beat the monster, you need to roll a D6, and add it to your own strengh. You win on a result superior or egal to the monster's defense (<strong>{props.generalState.currentMonster.defense}</strong>). If the result is a fail, you miss your hit, you will suffer a retaliation. Here, you need a <strong>{props.generalState.currentMonster.defense - props.generalState.strengh}</strong> or more to succeed</p>
							<p><strong>Warning</strong> <span> </span>: <span> </span> </p>
								<div className={classes.Dice}style ={{backgroundImage: `url(${dices[1]})` }}></div> is always a fail and <span> </span>
								<div className={classes.Dice}style ={{backgroundImage: `url(${dices[6]})` }}></div> is always a success.
							<button className={classes.Btn} onClick={props.rollAttackDice} >Roll the attack dice !</button>
						</div>,

					win:
					
						<div className={classes.CombatLogs}>
							<p style={{display: 'inline-block'}}>You rolled a <span> </span></p><span> </span>
								<div className={classes.Dice}style ={{backgroundImage: `url(${dices[props.generalState.dice]})` }}></div>.<span> </span><span className={classes.Result}> Success !</span><p>You have beaten the ennemy! You may choose one treasure out of three. It will be automatically added to your inventory for the next fights.</p>
								<p>You also earned <span style={{color: 'green'}}>{props.generalState.currentMonster.experience}</span> Xp ! There is <span style={{color: 'red'}}>{100 - props.generalState.experience}</span> Xp left before level {props.generalState.level +1} !</p>
							<button onClick={props.claimRewards} className={classes.Btn}>Claim my rewards !</button>
							<p>Dont forget that you can access the merchant between fights, and get some powerfull items ! Well spent money ! (top-right corner)</p>
						</div>,
					
					retaliation: 

						<div className={classes.CombatLogs}>
							<p style={{display: 'inline-block'}}>You only rolled a <span> </span></p><span> </span>
								<div className={classes.Dice}style ={{backgroundImage: `url(${dices[props.generalState.dice]})` }}></div>.<span className={classes.Result}> Failed !</span><p style={{marginTop: '0px'}}>It was really a weak punch, no offense... The ennemy is now angry, or hungry, whatever ... Roll the ennemy's attack dice, and add it to it's strengh. If it's <strong>strictly</strong> superior to your defense (<strong>{props.generalState.defense}</strong>), the ennemy hit you, and you suffer - 1Hp.</p>
							<p><strong>Warning</strong> <span> </span>: <span> </span> </p>
								<div className={classes.Dice}style ={{backgroundImage: `url(${dices[1]})` }}></div> is always a fail and <span> </span>
								<div className={classes.Dice}style ={{backgroundImage: `url(${dices[6]})` }}></div> is always a success.
							<button onClick={props.rollRetaliationDice} className={classes.Btn}>Roll ennemy dice !</button>
						</div>,

					wounded:

						<div className={classes.CombatLogs}>
							<p style={{display: 'inline-block'}}>The ennemy rolled a <span> </span></p><span> </span>
								<div className={classes.Dice}style ={{backgroundImage: `url(${dices[props.generalState.dice]})` }}></div>.<span className={classes.Result}> You've been hited !</span>
							{props.healpoints > 0 ?
								<p>You just lost one HP. You have <strong>{props.generalState.health}</strong> HP left. When you are at 0 HP, you become a slum, then, you die. Yet, the fight is not over!</p>:
								<p>You just lost one HP. You have <strong>{props.generalState.health}</strong> HP left. You transform into a slum. It sucks... Your adventure is over.</p>}
								<button onClick={props.continueHandler} className={classes.Btn}>Continue ...</button>
						</div>,

					saved:

						<div className={classes.CombatLogs}>
							<p style={{display: 'inline-block'}}>The ennemy only rolled a <span> </span></p><span> </span>
								<div className={classes.Dice}style ={{backgroundImage: `url(${dices[props.generalState.dice]})` }}></div>.<span className={classes.Result}> Ouf !</span>
							<p>You've just been saved by your armor, or somewhat managed to dodge the monster's counter-attack! Muster your strengh though, the fight is far from beeing over.</p>
							<button onClick={props.continueHandler} className={classes.Btn}>Continue ...</button>
						</div>,
					
				}[props.generalState.combatResult]
		
	);
};

const mapStateToProps = state => {
    return {
        generalState: state.generalReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
		revealInventory: (whichInventory) => dispatch(actionCreators.switchInventory(whichInventory)),
		continueHandler: () => dispatch(actionCreators.continueHandler()),
		rollAttackDice: () => dispatch(actionCreators.rollAttackDice()),
		rollRetaliationDice: () => dispatch(actionCreators.rollRetaliationDice()),
		claimRewards: () => dispatch(actionCreators.claimReward())
		
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(combatDetails);