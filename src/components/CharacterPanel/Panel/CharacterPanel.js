import React, { Component } from 'react';
import classes from './CharacterPanel.module.css'
import ProgressBar from '../ProgressBar/ProgressBar';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/index';

const characterPanel = (props) => {
  
        const allTreasures = props.generalState.treasure.slice();
        let typedArray = allTreasures.filter((element)=> element.type === props.generalState.displayedInventory)
    
	    return (
            
            <div className={classes.Panel}>
                <div className={classes.FirstPart}>
                    <div style={{backgroundImage: `url(${props.generalState.portrait})`}} className={classes.Portrait}></div>
                    <div className={classes.NamePower}>
                        <p className={classes.Name} >{props.name}</p>
                        <p className={classes.Power} ><span className={classes.PowerWord}>Power :</span> {props.generalState.power}</p>
                    </div>
                </div>
                <ProgressBar percentage={props.generalState.experience} />
                <hr/>
                
                    <ReactTooltip/>

                    <table className={classes.Table1}>
                        <tbody>
                            <tr>
                                <td data-place="right" data-tip="Level" className={classes.LevelIcon}></td>
                                <td>{props.generalState.level}</td>
                            </tr>
                            <tr>
                                <td data-place="right" data-tip="Strengh" className={classes.StrenghIcon}></td>
                                <td>{props.generalState.strengh}</td>
                            </tr>
                            <tr>
                                <td data-place="right" data-tip="Defense" className={classes.DefenseIcon}></td>
                                <td>{props.generalState.defense}</td>
                            </tr>
                            <tr>
                                <td data-place="right" data-tip="Health" className={classes.HealthIcon}></td>
                                <td>{props.generalState.health}</td>
                            </tr>
                            <tr>
                                <td data-place="right" data-tip="Experience" className={classes.ExperienceIcon}></td>
                                <td>{props.generalState.experience}</td>
                            </tr>
                            <tr>
                                <td data-place="right" data-tip="Planet explored" className={classes.AreaExploredIcon}></td>
                                <td>{props.generalState.areaExplored}</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className={classes.Table2}>
                        <tbody>
                            <tr>
                                <td data-place="right" data-tip="Gold" className={classes.GoldIcon}></td>
                                <td> {props.generalState.gold}</td>
                            </tr>
                            <tr>
                                <td data-place="right" data-tip="Treasures" className={classes.TreasureIcon}></td>
                                <td>{props.generalState.treasure.length}</td>
                            </tr>
                            <tr>
                                <td data-place="right" data-tip="Deck exploration" className={classes.DeckIcon}></td>
                                <td>{props.generalState.openedDecks !== 4 ? props.generalState.openedDecks + '/3' : 'Boss'}</td>
                            </tr>
                            <tr>
                                <td data-place="right" data-tip="Monster slain" className={classes.MonsterSlainIcon}></td>
                                <td>{props.generalState.monsterSlain}</td>
                            </tr>
                            <tr>
                                <td data-place="right" data-tip="Boss slain" className={classes.BossSlainIcon}></td>
                                <td>{props.generalState.bossSlain}</td>
                            </tr>
                            <tr>
                                <td data-place="right" data-tip="BioType" className={classes.AreaIcon}></td>
                                <td>{props.areaState[props.generalState.area].bioType}  </td>
                            </tr>
                        </tbody>
                    </table>
                <hr/>
                
                <div style={{margin: '0 auto', width: '100%'}}>
                    <button style={props.generalState.displayedInventory === 'attackCards'? {backgroundColor: 'darkgrey'}: null} onClick={() => props.displayedInventory('attackCards')} className={classes.InventoryButtons}>
                        Strengh
                    </button>
                    <button style={props.generalState.displayedInventory === 'defenseCards'? {backgroundColor: 'darkgrey'}: null} onClick={()=> props.displayedInventory('defenseCards')} className={classes.InventoryButtons}>
                        Defense
                    </button>
                    <button style={props.generalState.displayedInventory === 'specialCards'? {backgroundColor: 'darkgrey'}: null} onClick={()=> props.displayedInventory('specialCards')} className={classes.InventoryButtons}>
                        Special
                    </button>
                </div>

                    {typedArray.map((element, index)=> {
                        return (
                            <div key={index}>
                                <ReactTooltip/>
                                <div data-place="right" data-tip={element.tooltip}
                                    className={classes.InventoryBox}
                                    style={{backgroundImage: `url(${element.portrait})`}}
                                />
                            </div>
                        )
                    })}

            </div>
        )
}

const mapStateTothis = state => {
    return {
        generalState: state.generalReducer,
        areaState: state.areaReducer,
    };
};

const mapDispatchTothis = dispatch => {
    return {
		displayedInventory: (whichInventory) => dispatch(actionCreators.switchInventory(whichInventory)),
		
    }
};

export default connect(mapStateTothis, mapDispatchTothis)(characterPanel);