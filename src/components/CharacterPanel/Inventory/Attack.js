import React from 'react';
import attackImage from '../../../AllIcons/swordIcon.png';
import classes from './Attack.module.css'

const attackLogo = (props) => (
	<div className={[classes.OuterLogo, props.activeAttackIcon? classes.Active : null].join(' ')} onClick={props.attack} >
		<img className={classes.Logo} src={attackImage} alt="A shield" />
	</div>
)

export default attackLogo;