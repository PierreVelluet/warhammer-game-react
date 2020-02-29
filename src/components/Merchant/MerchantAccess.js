import React from 'react';
import { connect } from 'react-redux';
import classes from './MerchantAccess.module.css'
import * as actionCreators from '../../store/actions/index';

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
		  showMerchant: (treasure) => dispatch(actionCreators.showMerchant()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(merchantAccess);