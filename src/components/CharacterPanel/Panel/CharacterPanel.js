import React from 'react';
import classes from './CharacterPanel.module.css'
import Inventory from '../Inventory/Inventory'
import ProgressBar from '../ProgressBar/ProgressBar';

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
            {/* <div className={classes.AllCharacs}>
                <p className={classes.Characteristics} >Level: <span className={classes.CharacteristicsValues}>{props.level}</span></p>
                <p className={classes.Characteristics} >Experience : <span className={classes.CharacteristicsValues}>{props.experience}</span></p>
                <p className={classes.Characteristics} >Health : <span className={classes.CharacteristicsValues}>{props.health}</span></p>
                <p className={classes.Characteristics} >Monster slain : <span className={classes.CharacteristicsValues}>{props.monsterSlain}</span></p>
                <p className={classes.Characteristics} >Strengh : <span className={classes.CharacteristicsValues}>{props.strengh}</span></p>
                <p className={classes.Characteristics} >Current area : <span className={classes.CharacteristicsValues}>{props.area}</span></p>
                <p className={classes.Characteristics} >Defense : <span className={classes.CharacteristicsValues}>{props.defense}</span></p>
                <p className={classes.Characteristics} >Deck opened : <span className={classes.CharacteristicsValues}>{props.decks}/3</span></p>
            </div> */}
            <div>
                <table className={classes.Table1}>
                    <tr>
                        <td className={classes.LevelIcon}></td>
                        <td>{props.level}</td>
                    </tr>
                    <tr>
                        <td className={classes.StrenghIcon}></td>
                        <td>{props.strengh}</td>
                    </tr>
                    <tr>
                        <td className={classes.DefenseIcon}></td>
                        <td>{props.defense}</td>
                    </tr>
                    <tr>
                        <td className={classes.HealthIcon}></td>
                        <td>{props.health}</td>
                    </tr>
                    <tr>
                        <td className={classes.ExperienceIcon}></td>
                        <td>{props.experience}</td>
                    </tr>
                </table>
            </div>
            <div>
                <table className={classes.Table2}>
                    <tr>
                        <td className={classes.GoldIcon}></td>
                        <td> {props.gold}</td>
                    </tr>
                    <tr>
                        <td className={classes.TreasureIcon}></td>
                        <td>{props.treasure}</td>
                    </tr>
                    <tr>
                        <td className={classes.DeckIcon}></td>
                        <td>{props.deck}/3</td>
                    </tr>
                    <tr>
                        <td className={classes.MonsterSlainIcon}></td>
                        <td>{props.monsterSlain}</td>
                    </tr>
                    <tr>
                        <td className={classes.AreaIcon}></td>
                        <td>{props.area}</td>
                    </tr>
                </table>
            </div>
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