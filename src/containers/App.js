import React, {Component} from 'react';
import BoardBuilder from './BoardBuilder/BoardBuilder';
import classes from './App.module.css';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actionCreators from '../store/actions/index';

class App extends Component {

  componentDidMount(){
    //get the champion's data from database and send them to characterReducer via getChampion
    axios.get('http://localhost:3001/api/characters').then(result => this.props.getChampions(result.data))//.catch(error)
    //get the bosses' data and send them to generalReducer via getBosses
    axios.get('http://localhost:3001/api/bosses').then(result => this.props.getBosses(result.data))
    //get the normalItems' data and send them to generalReducer via getItemsNormal
    axios.get('http://localhost:3001/api/itemsNormal').then(result => this.props.getItemsNormal(result.data))
    //get the bossItems' data and send them to generalReducer via getItemsNormal
    axios.get('http://localhost:3001/api/itemsBoss').then(result => this.props.getItemsBoss(result.data))
    //get the areas' data and send them to areaReducer via getAreas
    axios.get('http://localhost:3001/api/areas').then(result => this.props.getAreas(result.data))


  };


  
  render() {
    return (
      <div className={classes.App}>
        <BoardBuilder />
      </div>
    );

  }
  
}
//faire un dispatch dans component did mount


const mapDispatchToProps = (dispatch, champ) => {
  return {
  getChampions: (champs) => dispatch(actionCreators.getChampions(champs)),
  getBosses: (bosses) => dispatch(actionCreators.getBosses(bosses)),
  getItemsNormal: (items) => dispatch(actionCreators.getItemsNormal(items)),
  getItemsBoss: (items) => dispatch(actionCreators.getItemsBoss(items)),
  getAreas: (areas) => dispatch(actionCreators.getAreas(areas)),
  }
};

export default connect(null, mapDispatchToProps)(App);
