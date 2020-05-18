import React, { useState } from 'react';
import classes from './ChooseWorldScreen.module.css'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import World from './worlds/worlds';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const ChooseWorldScreen = (props) => {

    const [planets, setPlanets] = useState(['desert', 'jungle', 'iceland'])
    
    return (
			<div className={classes.Container}>
				<h1 className={classes.Title} >Choose your destinaton entrance wisely !</h1>
                            <div className={classes.PlanetContainer}>
                                {planets.map((planet, index) => {
                                    return (
                                        
                                        <div style ={props.generalState.visitedPlanet[index]? {WebkitFilter: 'grayscale(1)'} : null}>
                                            <World
                                                planet={props.areaState[planet].planetBackground}
                                                bioType={props.areaState[planet].bioType}
                                                inhabited={props.areaState[planet].inhabited}
                                                temperature={props.areaState[planet].temperature}
                                                choose={props.generalState.visitedPlanet[index] === false ? () => props.choosePlanet(planet, index) : undefined}
                                                key={index}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            
			</div>
    )

};
{/* <div style ={visited[index]? {WebkitFilter: 'grayscale(1)'} : null}> */}
const mapStateToProps = state => {
    return {
        areaState: state.areaReducer,
        generalState: state.generalReducer,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        choosePlanet: (area, index) => dispatch(actionCreators.choosePlanet(area, index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseWorldScreen);