import React, { Component } from 'react';
import classes from './CharacterPanel.module.css'
import ProgressBar from '../ProgressBar/ProgressBar';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux';

class characterPanel extends Component {
  
    render() {
        const allTreasures = this.props.generalState.treasure.slice();
        let typedArray = allTreasures.filter((element)=> element.type === this.props.generalState.displayedInventory)
    
	    return (
            
            <div className={classes.Panel}>
                <div className={classes.FirstPart}>
                    <div style={{backgroundImage: `url(${this.props.generalState.portrait})`}} className={classes.Portrait}></div>
                    <div className={classes.NamePower}>
                        <p className={classes.Name} >{this.props.name}</p>
                        <p className={classes.Power} ><span className={classes.PowerWord}>Power :</span> {this.props.generalState.power}</p>
                    </div>
                </div>
                <ProgressBar percentage={this.props.generalState.experience} />
                <hr/>
                
                    <ReactTooltip/>

                    <table className={classes.Table1}>
                        <tbody>
                            <tr>
                                <td data-place="right" data-tip="Level" className={classes.LevelIcon}></td>
                                <td>{this.props.generalState.level}</td>
                            </tr>
                            <tr>
                                <td data-place="right" data-tip="Strengh" className={classes.StrenghIcon}></td>
                                <td>{this.props.generalState.strengh}</td>
                            </tr>
                            <tr>
                                <td data-place="right" data-tip="Defense" className={classes.DefenseIcon}></td>
                                <td>{this.props.generalState.defense}</td>
                            </tr>
                            <tr>
                                <td data-place="right" data-tip="Health" className={classes.HealthIcon}></td>
                                <td>{this.props.generalState.health}</td>
                            </tr>
                            <tr>
                                <td data-place="right" data-tip="Experience" className={classes.ExperienceIcon}></td>
                                <td>{this.props.generalState.experience}</td>
                            </tr>
                            <tr>
                                <td data-place="right" data-tip="Area explored" className={classes.AreaExploredIcon}></td>
                                <td>{this.props.generalState.areaExplored}</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className={classes.Table2}>
                        <tbody>
                            <tr>
                                <td data-place="right" data-tip="Gold" className={classes.GoldIcon}></td>
                                <td> {this.props.generalState.gold}</td>
                            </tr>
                            <tr>
                                <td data-place="right" data-tip="Treasures" className={classes.TreasureIcon}></td>
                                <td>{this.props.generalState.treasure.length}</td>
                            </tr>
                            <tr>
                                <td data-place="right" data-tip="Deck exploration" className={classes.DeckIcon}></td>
                                <td>{this.props.generalState.openedDecks !== 4 ? this.props.generalState.openedDecks + '/3' : 'Boss'}</td>
                            </tr>
                            <tr>
                                <td data-place="right" data-tip="Monster slain" className={classes.MonsterSlainIcon}></td>
                                <td>{this.props.generalState.monsterSlain}</td>
                            </tr>
                            <tr>
                                <td data-place="right" data-tip="Boss slain" className={classes.BossSlainIcon}></td>
                                <td>{this.props.generalState.bossSlain}</td>
                            </tr>
                            <tr>
                                <td data-place="right" data-tip="Area" className={classes.AreaIcon}></td>
                                <td>{this.props.generalState.area}</td>
                            </tr>
                        </tbody>
                    </table>
                <hr/>
                
                <div style={{margin: '0 auto', width: '100%'}}>
                    <button style={this.props.generalState.displayedInventory === 'attackCards'? {backgroundColor: 'darkgrey'}: null} onClick={() => this.props.displayedInventory('attackCards')} className={classes.InventoryButtons}>
                        Strengh
                    </button>
                    <button style={this.props.generalState.displayedInventory === 'defenseCards'? {backgroundColor: 'darkgrey'}: null} onClick={()=> this.props.displayedInventory('defenseCards')} className={classes.InventoryButtons}>
                        Defense
                    </button>
                    <button style={this.props.generalState.displayedInventory === 'specialCards'? {backgroundColor: 'darkgrey'}: null} onClick={()=> this.props.displayedInventory('specialCards')} className={classes.InventoryButtons}>
                        Special
                    </button>
                </div>

                {typedArray.map((element, index)=> {
                    return (
                        <div
                            key={index}
                            className={classes.InventoryBox}
                            style={{backgroundImage: `url(${element.portrait})`}}
                        />
                    )
                })}
            

            </div>
        )
    }
}

const mapStateTothis = state => {
    return {
        generalState: state.generalReducer
    };
};

const mapDispatchTothis = dispatch => {
    return {
		displayedInventory: (whichInventory) => dispatch({type: 'SWITCH_INVENTORY', whichInventory: whichInventory}),
		
    }
};

export default connect(mapStateTothis, mapDispatchTothis)(characterPanel);