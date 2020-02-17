import React from 'react';
import classes from './Inventory.module.css';
import DefenseLogo from './Defense';
import AttackLogo from './Attack';
import MagicLogo from './Magic';

const blockButtons = (props) => (
	<div className={classes.BlockButtons} >
		<AttackLogo activeAttackIcon={props.activeAttackIcon} attack={props.attack} />
		<DefenseLogo activeDefenseIcon={props.activeDefenseIcon} defense ={props.defense}/>
		<MagicLogo activeMagicIcon={props.activeMagicIcon} magic={props.magic} />
	</div>
);

export default blockButtons;