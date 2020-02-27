import React from 'react';
import { connect } from 'react-redux';
import classes from './MerchantAccess.module.css'

const merchantAccess = (props) => (
    <div onClick={props.generalState.showDeck ? props.showMerchant : undefined} className={classes.MerchantAccess}></div>
)

const mapStateToProps = state => {
    return {
		  generalState: state.generalReducer,
    };
};

const mapDispatchToProps = dispatch => {
    return {
		  showMerchant: (treasure) => dispatch({type: 'SHOW_MERCHANT',  treasure: treasure}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(merchantAccess);