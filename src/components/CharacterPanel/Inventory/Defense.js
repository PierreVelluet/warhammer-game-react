import React from 'react';
import defenseImage from '../../../AllIcons/shieldIcon.png';
import classes from './Defense.module.css'

const defenseLogo = (props) => (
	<div className={[classes.OuterLogo, props.activeDefenseIcon? classes.Active : null].join(' ')} onClick={props.defense} >
		<img className={classes.Logo} src={defenseImage} alt="A shield" />
	</div>
)

export default defenseLogo;