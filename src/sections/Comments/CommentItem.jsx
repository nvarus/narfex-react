import React from 'react';
import styles from "./Comments.module.css"
import Button from "../../components/UI/Button/Button.jsx";

const CommentItem = ({data, ...props}) => {
	
	let date = new Date(props.comm.date)
	let localDate = date.toLocaleDateString(data.dateLocale, {
		day: "2-digit",
		month: "long",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});
	
	
	return (
		
		<div className={styles.CommentItem}>
			<div className={styles.CommentItem__content}>
				<strong>{props.number}. {localDate}</strong>
				<p>
					{props.comm.body}
				</p>
			</div>
			
			<div className={styles.CommentItem__btnWrap}>
				<Button onClick={() => props.remove(props.comm)} className={styles.CommentItem__btn}>
					{data.interface.commListButton}
				</Button>
			</div>
			
			
		</div>
	);
};

export default CommentItem;
