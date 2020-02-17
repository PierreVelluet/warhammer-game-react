import React from 'react';
import classes from './ProgressBar.module.css';
import Filler from './Filler'

const progressBar = (props) => {
    return (
        <div className={classes.ProgressBar}>
            <Filler percentage={props.percentage}/>
        </div>
    )
}

export default progressBar;