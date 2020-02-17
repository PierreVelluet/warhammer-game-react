import React from 'react';
import TreasureCard from '../Cards/TreasureCard';
import classes from './MagicCardsList.module.css'

const magicCardsList = (props) => (
	<div className={classes.TreasureList}>
	{props.magicCards.map((magicCard, index) => {
					return (
						<div key={index} style={{display: 'inline-block'}} onClick={()=>props.magicEffect(magicCard, index)} >
							<TreasureCard 
								name={props.magicCards[index].name}
								portrait={props.magicCards[index].portrait}
								text={props.magicCards[index].text}
								bottomText={props.magicCards[index].bottomText}
								effect={props.magicCards[index].effect}						
								key={index}
							/>
						</div>
					);
				})}
	</div>
);

export default magicCardsList;

