import React from 'react';
import classes from './CharacterPanel.module.css'
import Inventory from '../Inventory/Inventory'
import ProgressBar from '../ProgressBar/ProgressBar';
import ReactTooltip from 'react-tooltip';

const characterPanel =(props) => {
    const portrait = props.portrait;

	return (
		<div style={{height: props.height}}onClick={props.choose} className={classes.Panel}>
            <div className={classes.FirstPart}>
                <div style={{backgroundImage: `url(${portrait})`}} className={classes.Portrait}></div>
                <div className={classes.NamePower}>
                    <p className={classes.Name} >{props.name}</p>
                    <p className={classes.Power} ><span className={classes.PowerWord}>Power :</span> {props.power}</p>
                </div>
            </div>
            <hr/>
            
                <table className={classes.Table1}>
                    <tr>
                        <td data-tip="Level" className={classes.LevelIcon}><ReactTooltip/></td>
                        <td>{props.level}</td>
                    </tr>
                    <tr>
                        <td data-tip="Strengh" className={classes.StrenghIcon}></td>
                        <td>{props.strengh}</td>
                    </tr>
                    <tr>
                        <td data-tip="Defense" className={classes.DefenseIcon}></td>
                        <td>{props.defense}</td>
                    </tr>
                    <tr>
                        <td data-tip="Health" className={classes.HealthIcon}></td>
                        <td>{props.health}</td>
                    </tr>
                    <tr>
                        <td data-tip="Experience" className={classes.ExperienceIcon}></td>
                        <td>{props.experience}</td>
                    </tr>
                </table>

                <table className={classes.Table2}>
                    <tr>
                        <td data-tip="Gold" className={classes.GoldIcon}></td>
                        <td> {props.gold}</td>
                    </tr>
                    <tr>
                        <td data-tip="Treasures" className={classes.TreasureIcon}></td>
                        <td>{props.treasure}</td>
                    </tr>
                    <tr>
                        <td data-tip="Deck exploration" className={classes.DeckIcon}></td>
                        <td>{props.deck}/3</td>
                    </tr>
                    <tr>
                        <td data-tip="Monster slain" className={classes.MonsterSlainIcon}></td>
                        <td>{props.monsterSlain}</td>
                    </tr>
                    <tr>
                        <td data-tip="Area" className={classes.AreaIcon}></td>
                        <td>{props.area}</td>
                    </tr>
                </table>
            <hr/>
            <ProgressBar percentage={props.percentage} />
            <Inventory
                activeAttackIcon={props.activeAttackIcon}
                activeDefenseIcon={props.activeDefenseIcon}
                activeMagicIcon={props.activeMagicIcon}
                attack={props.showAttackCards}  
                defense={props.showDefenseCards}
                magic={props.showMagicCards}
            />
		</div>
		)
}

export default characterPanel;