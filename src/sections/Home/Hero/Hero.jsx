import React from 'react';
import CardsHero from "./CardsHero.jsx";
import style from "./Hero.module.css";

const Hero = ({data, setID}) => {
	
	const list = data.cards.map((item, index) => (
		<CardsHero
			key={index}
			img={item.img}
			title={item.title}
			date={item.date}
			id={index}
			setID={setID}
			dateLocale={data.dateLocale}
			cardButton={data.interface.cardButton}
		/>
	));
	// выбираем пять последних элементов массива list
	let firstFive = list.slice(-5)
	
	return (
		<div className={style.listCard}>
			<div className={style.listCardGrid}>
				{firstFive}
			</div>
		
		</div>
	);
};

export default Hero;