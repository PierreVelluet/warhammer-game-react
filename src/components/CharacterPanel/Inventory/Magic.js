import React from 'react';
import magicImage from '../../../AllIcons/magicIcon.png';
import classes from './Magic.module.css'

const magicLogo = (props) => (
	<div className={[classes.OuterLogo, props.activeMagicIcon? classes.Active : null].join(' ')} onClick={props.magic} >
		<img className={classes.Logo} src={magicImage} alt="A book" />
	</div>
)

export default magicLogo;