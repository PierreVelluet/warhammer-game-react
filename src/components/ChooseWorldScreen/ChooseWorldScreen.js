import React from 'react';
import classes from './ChooseWorldScreen.module.css'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import World from './worlds/worlds';

const chooseWorldScreen = (props) => {

    const choosePlanet = () => {
        //modifier le reducer d'ici
        //calculer les données à modifier

    }

    const planets = ['desert', 'jungle', 'iceland']
    return (
			<div className={classes.Container}>
				<h1 className={classes.Title} >Choose your destinaton entrance wisely !</h1>
                
                            {planets.map((planet, index) => {
                                return (
                                        <World
                                            planet={props.areaState[planet].planetBackground}
                                            bioType={props.areaState[planet].bioType}
                                            inhabited={props.areaState[planet].inhabited}
                                            temperature={props.areaState[planet].temperature}
                                            choose={() => props.choosePlanet(planet)}
                                            key={index}
                                        />
                                );
                            })}
			</div>
    )

};

const mapStateToProps = state => {
    return {
        areaState: state.areaReducer,
        generalState: state.generalReducer,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        choosePlanet: (area) => dispatch(actionCreators.choosePlanet(area))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(chooseWorldScreen);