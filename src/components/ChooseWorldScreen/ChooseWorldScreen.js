import React, { Component } from 'react';
import classes from './ChooseWorldScreen.module.css'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import World from './worlds/worlds';
import axios from 'axios';

class chooseWorldScreen extends Component {

    componentDidMount() {
        axios.get('http://localhost:3001/api/monsters').then(result => this.getMonsters(result.data))
        axios.get('http://localhost:3001/api/bosses').then(result => this.getBosses(result.data))
        
    }

    getMonsters = (result) => {
        
        result.map(element => {
            element.strengh = Math.floor(Math.random() * 6) + 1;
            element.defense = Math.floor(Math.random() * 6) + 1;
            element.gold = Math.floor(Math.random() * 6) + 1;
            element.experience = Math.floor(Math.random() * 6 + 1) * 10;
        })

        this.props.setMonsters(result)
        
    }

    getBosses = (result) => {
        
        result.map(element => {
            element.strengh = Math.floor(Math.random() * 12) + 1;
            element.defense = Math.floor(Math.random() * 12) + 1;
            element.gold = Math.floor(Math.random() * 12) + 1;
            element.experience = Math.floor(Math.random() * 12 + 1) * 10;
        })

        this.props.setBosses(result)
        
    }

    render() {

        

        const planets = ['desert', 'jungle', 'iceland']

        return (
            <div className={classes.Container}>
				<h1 className={classes.Title} >Choose your destinaton entrance wisely !</h1>
                
                            {planets.map((planet, index) => {
                                return (
                                        <World
                                            planet={this.props.areaState[planet].planetBackground}
                                            bioType={this.props.areaState[planet].bioType}
                                            inhabited={this.props.areaState[planet].inhabited}
                                            temperature={this.props.areaState[planet].temperature}
                                            choose={() => this.props.choosePlanet(planet)}
                                            key={index}
                                        />
                                );
                            })}
			</div>
        )
    }

   

   
};

const mapStateToProps = state => {
    return {
        areaState: state.areaReducer,
        generalState: state.generalReducer,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        choosePlanet: (area) => dispatch(actionCreators.choosePlanet(area)),
        setMonsters: (monsters) => dispatch(actionCreators.setMonsters(monsters)),
        setBosses: (bosses) => dispatch(actionCreators.setBosses(bosses))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(chooseWorldScreen);