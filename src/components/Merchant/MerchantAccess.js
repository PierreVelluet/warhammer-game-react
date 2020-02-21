import React from 'react';
import classes from './MerchantAccess.module.css'

const merchantAccess = (props) => (
    <div onClick={props.showDeck ? props.accessMerchant : undefined} className={classes.MerchantAccess}></div>
)

export default merchantAccess;