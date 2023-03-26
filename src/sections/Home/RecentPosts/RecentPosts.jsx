import React from 'react';
import styles from './RecentPosts.module.css'
import RecentCards from "../../../components/RecentCards/RecentCards.jsx";

const RecentPosts = ({data, setID}) => {
	const lastList = data.cards.map((item, index) => (
		<RecentCards
			key={index}
			img={item.img}
			title={item.title}
			date={item.date}
			authorID={item.authorID}
			author={data.author}
			id={index}
			setID={setID}
			dataInterface={data.interface}
			
		/>
	))

	// все посты кроме пяти последних
	const firstElements = lastList.slice(0, lastList.length - 5)
	
	return (
		<div className={styles.RecentPosts}>
			{firstElements}
		</div>
	);
};

export default RecentPosts;