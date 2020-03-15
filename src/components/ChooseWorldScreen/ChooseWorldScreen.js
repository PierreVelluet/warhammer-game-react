import React from 'react';
import classes from './ChooseWorldScreen.module.css'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import World from './worlds/worlds';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const chooseWorldScreen = (props) => {

    const planets = ['desert', 'jungle', 'iceland']
    return (
			<div className={classes.Container}>
				<h1 className={classes.Title} >Choose your destinaton entrance wisely !</h1>
                <CarouselProvider
                    naturalSlideWidth={10}
                    naturalSlideHeight={10}
                    totalSlides={3}
                    visibleSlides={1}
                    infinite={true}
                        >             
                        <Slider style={{marginLeft: '400px', height: '600px'}}>
                            {planets.map((planet, index) => {
                                return (
                                    <Slide index={index} >
                                        <World
                                            planet={props.areaState[planet].planetBackground}
                                            bioType={props.areaState[planet].bioType}
                                            inhabited={props.areaState[planet].inhabited}
                                            temperature={props.areaState[planet].temperature}
                                            choose={() => props.choosePlanet(planet)}
                                            // choose={() => props.choosePlanet(props.generalState.area)}
                                            
                                            key={index}
                                        />
                                    </Slide>
                                );
                            })}
                        </Slider>
                        <div style={{marginLeft: '37%'}}>
                            <ButtonBack>Back</ButtonBack>
                            <ButtonNext>Next</ButtonNext>
                        </div>
                </CarouselProvider>
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