import React from 'react';
import classes from './CharacterPanel.module.css'
import ProgressBar from '../ProgressBar/ProgressBar';
import ReactTooltip from 'react-tooltip';

const characterPanel =(props) => {
    const portrait = props.portrait;
    const whichInventory = props.whichInventory;
    const inventoryColor = props.inventoryColor;

	return (
		<div style={{height: props.height}}onClick={props.choose} className={classes.Panel}>
            <div className={classes.FirstPart}>
                <div style={{backgroundImage: `url(${portrait})`}} className={classes.Portrait}></div>
                <div className={classes.NamePower}>
                    <p className={classes.Name} >{props.name}</p>
                    <p className={classes.Power} ><span className={classes.PowerWord}>Power :</span> {props.power}</p>
                </div>
            </div>
            <ProgressBar percentage={props.percentage} />
            <hr/>
            
                <ReactTooltip/>

                <table className={classes.Table1}>
                    <tbody>
                        <tr>
                            <td data-place="right" data-tip="Level" className={classes.LevelIcon}></td>
                            <td>{props.level}</td>
                        </tr>
                        <tr>
                            <td data-place="right" data-tip="Strengh" className={classes.StrenghIcon}></td>
                            <td>{props.strengh}</td>
                        </tr>
                        <tr>
                            <td data-place="right" data-tip="Defense" className={classes.DefenseIcon}></td>
                            <td>{props.defense}</td>
                        </tr>
                        <tr>
                            <td data-place="right" data-tip="Health" className={classes.HealthIcon}></td>
                            <td>{props.health}</td>
                        </tr>
                        <tr>
                            <td data-place="right" data-tip="Experience" className={classes.ExperienceIcon}></td>
                            <td>{props.experience}</td>
                        </tr>
                        <tr>
                            <td data-place="right" data-tip="Area explored" className={classes.AreaExploredIcon}></td>
                            <td>{props.areaExplored}</td>
                        </tr>
                    </tbody>
                </table>

                <table className={classes.Table2}>
                    <tbody>
                        <tr>
                            <td data-place="right" data-tip="Gold" className={classes.GoldIcon}></td>
                            <td> {props.gold}</td>
                        </tr>
                        <tr>
                            <td data-place="right" data-tip="Treasures" className={classes.TreasureIcon}></td>
                            <td>{props.treasure}</td>
                        </tr>
                        <tr>
                            <td data-place="right" data-tip="Deck exploration" className={classes.DeckIcon}></td>
                            <td>{props.deck}/3</td>
                        </tr>
                        <tr>
                            <td data-place="right" data-tip="Monster slain" className={classes.MonsterSlainIcon}></td>
                            <td>{props.monsterSlain}</td>
                        </tr>
                        <tr>
                            <td data-place="right" data-tip="Boss slain" className={classes.BossSlainIcon}></td>
                            <td>{props.bossSlain}</td>
                        </tr>
                        <tr>
                            <td data-place="right" data-tip="Area" className={classes.AreaIcon}></td>
                            <td>{props.area}</td>
                        </tr>
                    </tbody>
                </table>
            <hr/>
            
            <div style={{margin: '0 auto', width: '100%'}}>
                <button style={props.inventoryColor === 'attackCards'? {backgroundColor: 'darkgrey'}: null} onClick={()=>props.revealInventory('attackCards')} className={classes.InventoryButtons}>
                    Strengh
                </button>
                <button style={props.inventoryColor === 'defenseCards'? {backgroundColor: 'darkgrey'}: null} onClick={()=>props.revealInventory('defenseCards')} className={classes.InventoryButtons}>
                    Defense
                </button>
                <button style={props.inventoryColor === 'magicCards'? {backgroundColor: 'darkgrey'}: null} onClick={()=>props.revealInventory('magicCards')} className={classes.InventoryButtons}>
                    Medic
                </button>
            </div>

            <table className={[classes.InventoryTable, classes[props.inventoryColor]].join(' ')}>
                    <tbody>
                        <tr>
                            <td data-place="right" data-tip={whichInventory.length>0 ? whichInventory[0].tooltip : ''} style={whichInventory.length>0 ?{backgroundImage: `url(${whichInventory[0].portrait})`}:{backgroundImage: ""}}></td>
                            <td data-place="right" data-tip={whichInventory.length>1 ? whichInventory[1].tooltip : ''} style={whichInventory.length>1 ?{backgroundImage: `url(${whichInventory[1].portrait})`}:{backgroundImage: ""}}></td>
                            <td data-place="right" data-tip={whichInventory.length>2 ? whichInventory[2].tooltip : ''} style={whichInventory.length>2 ?{backgroundImage: `url(${whichInventory[2].portrait})`}:{backgroundImage: ""}}></td>
                        </tr>
                        <tr>
                            <td data-place="right" data-tip={whichInventory.length>3 ? whichInventory[3].tooltip : ''} style={whichInventory.length>3 ?{backgroundImage: `url(${whichInventory[3].portrait})`}:{backgroundImage: ""}}></td>
                            <td data-place="right" data-tip={whichInventory.length>4 ? whichInventory[4].tooltip : ''} style={whichInventory.length>4 ?{backgroundImage: `url(${whichInventory[4].portrait})`}:{backgroundImage: ""}}></td>
                            <td data-place="right" data-tip={whichInventory.length>5 ? whichInventory[5].tooltip : ''} style={whichInventory.length>5 ?{backgroundImage: `url(${whichInventory[5].portrait})`}:{backgroundImage: ""}}></td>
                        </tr>
                        <tr>
                            <td data-place="right" data-tip={whichInventory.length>6 ? whichInventory[6].tooltip : ''} style={whichInventory.length>6 ?{backgroundImage: `url(${whichInventory[6].portrait})`}:{backgroundImage: ""}}></td>
                            <td data-place="right" data-tip={whichInventory.length>7 ? whichInventory[7].tooltip : ''} style={whichInventory.length>7 ?{backgroundImage: `url(${whichInventory[7].portrait})`}:{backgroundImage: ""}}></td>
                            <td data-place="right" data-tip={whichInventory.length>8 ? whichInventory[8].tooltip : ''} style={whichInventory.length>8 ?{backgroundImage: `url(${whichInventory[8].portrait})`}:{backgroundImage: ""}}></td>
                        </tr>
                        <tr>
                            <td data-place="right" data-tip={whichInventory.length>9 ? whichInventory[9].tooltip : ''} style={whichInventory.length>9 ?{backgroundImage: `url(${whichInventory[9].portrait})`}:{backgroundImage: ""}}></td>
                            <td data-place="right" data-tip={whichInventory.length>10 ? whichInventory[10].tooltip : ''} style={whichInventory.length>10 ?{backgroundImage: `url(${whichInventory[10].portrait})`}:{backgroundImage: ""}}></td>
                            <td data-place="right" data-tip={whichInventory.length>11 ? whichInventory[11].tooltip : ''} style={whichInventory.length>11 ?{backgroundImage: `url(${whichInventory[11].portrait})`}:{backgroundImage: ""}}></td>
                        </tr>
                    </tbody>
            </table>

		</div>
		)
}

export default characterPanel;