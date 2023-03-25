import React from 'react';

const Cards = ({style, id, setID, cardButton, ...props}) => {
	return (
		<div className={style.cards}>
			<img src={props.img} className={style.img}/>
			
		
		</div>
	);
};

export default Cards;