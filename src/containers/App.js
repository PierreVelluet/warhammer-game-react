import React from 'react';
import BoardBuilder from './BoardBuilder/BoardBuilder';
import classes from './App.module.css'

function App() {
  return (
  	<div className={classes.App}>
    	<BoardBuilder />
    </div>
  );
}

export default App;
