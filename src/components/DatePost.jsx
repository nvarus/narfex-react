import React from 'react';

const DatePost = (props) => {
	let date = new Date(props.date)
	let localDate = date.toLocaleDateString(props.dateLocale, props.option)
	return (
		<span>
			{localDate}
		</span>
	);
};

export default DatePost;