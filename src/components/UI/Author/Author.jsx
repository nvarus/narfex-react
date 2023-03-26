import React from 'react';
import styles from './Author.module.css'
import DateLastOnline from "../../DateLastOnline/DateLastOnline.jsx";

const Author = ({dataInterface, author, authorID}) => {
	let aut = author.filter(a => a.id === authorID)
	const autObj = aut[0]
	return (
		<div className={styles.author}>
			<div className={styles.author__avatar}>
			<img src={autObj.avatar} alt=""/>
			</div>
			<div className={styles.author__name}>{autObj.name}</div>
			<div className={styles.author__ago}>
			<DateLastOnline dataInterface={dataInterface} lastDate={autObj.lastOnlineDate}/>
			</div>
		</div>
	);
};

export default Author;
