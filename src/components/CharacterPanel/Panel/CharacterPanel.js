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
            <div className={classes.AllCharacs}>
                <p className={classes.Characteristics} >Level: <span className={classes.CharacteristicsValues}>{props.level}</span></p>
                <p className={classes.Characteristics} >Experience : <span className={classes.CharacteristicsValues}>{props.experience}</span></p>
                <p className={classes.Characteristics} >Health : <span className={classes.CharacteristicsValues}>{props.health}</span></p>
                <p className={classes.Characteristics} >Monster slain : <span className={classes.CharacteristicsValues}>{props.monsterSlain}</span></p>
                <p className={classes.Characteristics} >Strengh : <span className={classes.CharacteristicsValues}>{props.strengh}</span></p>
                <p className={classes.Characteristics} >Current area : <span className={classes.CharacteristicsValues}>{props.area}</span></p>
                <p className={classes.Characteristics} >Defense : <span className={classes.CharacteristicsValues}>{props.defense}</span></p>
                <p className={classes.Characteristics} >Deck opened : <span className={classes.CharacteristicsValues}>{props.decks}/5</span></p>
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