import React from 'react';
import classes from './CharacterPanel.module.css'
import ProgressBar from '../ProgressBar/ProgressBar';
import ReactTooltip from 'react-tooltip';

const characterPanel =(props) => {
    const portrait = props.portrait;
    const items = props.items;

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
            
            {/* <Inventory
                activeAttackIcon={props.activeAttackIcon}
                activeDefenseIcon={props.activeDefenseIcon}
                activeMagicIcon={props.activeMagicIcon}
                attack={props.showAttackCards}  
                defense={props.showDefenseCards}
                magic={props.showMagicCards}
            /> */}
           <table className={classes.InventoryTable}>
                <tbody>
                    <tr>
                        <td data-tip={items.length>0 ? items[0].tooltip : ''} style={items.length>0 ?{backgroundImage: `url(${items[0].portrait})`}:{backgroundImage: ""}}></td>
                        <td data-tip={items.length>1 ? items[1].tooltip : ''} style={items.length>1 ?{backgroundImage: `url(${items[1].portrait})`}:{backgroundImage: ""}}></td>
                        <td data-tip={items.length>2 ? items[2].tooltip : ''} style={items.length>2 ?{backgroundImage: `url(${items[2].portrait})`}:{backgroundImage: ""}}></td>
                    </tr>
                    <tr>
                        <td data-tip={items.length>3 ? items[3].tooltip : ''} style={items.length>3 ?{backgroundImage: `url(${items[3].portrait})`}:{backgroundImage: ""}}></td>
                        <td data-tip={items.length>4 ? items[4].tooltip : ''} style={items.length>4 ?{backgroundImage: `url(${items[4].portrait})`}:{backgroundImage: ""}}></td>
                        <td data-tip={items.length>5 ? items[5].tooltip : ''} style={items.length>5 ?{backgroundImage: `url(${items[5].portrait})`}:{backgroundImage: ""}}></td>
                    </tr>
                    <tr>
                        <td data-tip={items.length>6 ? items[6].tooltip : ''} style={items.length>6 ?{backgroundImage: `url(${items[6].portrait})`}:{backgroundImage: ""}}></td>
                        <td data-tip={items.length>7 ? items[7].tooltip : ''} style={items.length>7 ?{backgroundImage: `url(${items[7].portrait})`}:{backgroundImage: ""}}></td>
                        <td data-tip={items.length>8 ? items[8].tooltip : ''} style={items.length>8 ?{backgroundImage: `url(${items[8].portrait})`}:{backgroundImage: ""}}></td>
                    </tr>
                    <tr>
                        <td data-tip={items.length>9 ? items[9].tooltip : ''} style={items.length>9 ?{backgroundImage: `url(${items[9].portrait})`}:{backgroundImage: ""}}></td>
                        <td data-tip={items.length>10 ? items[10].tooltip : ''} style={items.length>10 ?{backgroundImage: `url(${items[10].portrait})`}:{backgroundImage: ""}}></td>
                        <td data-tip={items.length>11 ? items[11].tooltip : ''} style={items.length>11 ?{backgroundImage: `url(${items[11].portrait})`}:{backgroundImage: ""}}></td>
                    </tr>
                </tbody>
           </table>
		</div>
		)
}

export default characterPanel;