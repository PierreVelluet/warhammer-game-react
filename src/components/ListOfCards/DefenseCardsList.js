import React from 'react';
import TreasureCard from '../Cards/TreasureCard';
import classes from './DefenseCardsList.module.css'

const defenseCardsList = (props) => (
	<div className={classes.TreasureList}>
	{props.defenseCards.map((attack, index) => {
					return (
						<TreasureCard
							name={props.defenseCards[index].name}
							portrait={props.defenseCards[index].portrait}
							text={props.defenseCards[index].text}
							bottomText={props.defenseCards[index].bottomText}
							effect={props.defenseCards[index].effect}						
							key={index}
						/>
					);
				})}
	</div>
);

export default defenseCardsList;

