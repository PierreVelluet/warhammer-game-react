import React from 'react';
import TreasureCard from '../Cards/TreasureCard';
import classes from './AttackCardsList.module.css';

const attackCardsList = (props) => (
	<div className={classes.TreasureList}>
	{props.attackCards.map((attack, index) => {
					return (
						<TreasureCard 
							name={props.attackCards[index].name}
							portrait={props.attackCards[index].portrait}
							text={props.attackCards[index].text}
							bottomText={props.attackCards[index].bottomText}
							effect={props.attackCards[index].effect}						
							key={index}
						/>
					);
				})}
	</div>
);

export default attackCardsList;

