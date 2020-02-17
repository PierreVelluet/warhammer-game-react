import React from 'react';
import classes from './Filler.module.css'
import CountUp from 'react-countup';

const filler = (props) => {

    return <div className={classes.Filler} style={{width: `${props.percentage}%`}}></div>
}

export default filler;