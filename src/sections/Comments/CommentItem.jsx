import React from 'react';
import styles from "./Comments.module.css"
import Button from "../../components/UI/Button/Button.jsx";

const CommentItem = (props) => {
	
	let date = new Date(props.comm.date)
	let localDate = date.toLocaleDateString("ru", {
		day: "2-digit",
		month: "long",
		year: "numeric"
	});
	
	console.log(props.comm)
	return (
		
		<div className={styles.CommentItem}>
			<div className={styles.CommentItem__content}>
				<strong>{props.number}. {localDate}</strong>
			</div>
			<div>
				{props.comm.body}
			</div>
			<div className={styles.comment__btn}>
				<Button>
					Удалить
				</Button>
			</div>
			
			
		</div>
	);
};

export default CommentItem;
