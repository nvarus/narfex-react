import React from 'react';
import styles from './DateLastOnline.module.css'

const DateLastOnline = (props) => {
	const currentDate = new Date()
	const lastDate = new Date(props.lastDate)
	let delta = currentDate - lastDate
	
	const year = 31536000000; const month = 2678400000; const day = 86400000; const hour = 3600000; const minute = 60000;
	
	let wasNot = ''
	switch (true) {
		// не был более года
		case delta > year:
			wasNot = `${(Math.trunc(delta / year))} ${props.dataInterface.year}`
			break;
		case delta > month && delta < year:
			wasNot = `${(Math.trunc(delta / month))} ${props.dataInterface.month}`
			break;
		case delta > day && delta < month:
			wasNot = `${(Math.trunc(delta / day))} ${props.dataInterface.day}`
			break;
		case delta > hour && delta < day:
			wasNot = `${(Math.trunc(delta / hour))} ${props.dataInterface.hour}`
			break;
		case delta > minute && delta < hour:
			wasNot = `${(Math.trunc(delta / minute))} ${props.dataInterface.minute}`
			break;
	}
	
	return (
		<div className={styles.DateLastOnline}>
			 {wasNot} {props.dataInterface.onlineAgo}
		</div>
	);
};

export default DateLastOnline;