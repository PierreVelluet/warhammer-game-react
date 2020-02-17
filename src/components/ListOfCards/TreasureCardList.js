import React from 'react';
import TreasureCard from '../Cards/TreasureCard';
import classes from './TreasureCardList.module.css'

const treasureCardList = (props) => (
	<div className={classes.TreasureList}>
	{props.treasure.map((attack, index) => {
					return (
						<TreasureCard 
							name={props.treasure[index].name}
							portrait={props.treasure[index].portrait}
							text={props.treasure[index].text}
							bottomText={props.treasure[index].bottomText}
							effect={props.treasure[index].effect}						
							key={index}
						/>
					);
				})}
	</div>
);

export default treasureCardList;