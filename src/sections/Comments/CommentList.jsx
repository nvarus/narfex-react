import React from 'react';
import styles from "./Comments.module.css"
import CommentItem from "./CommentItem.jsx";

const CommentList = ({comments}) => {
	return (
		<div className={styles.CommentList}>
			{comments.map((comm, index) =>
				<CommentItem comm={comm} number={index + 1} key={comm.id}/>
			)}
		</div>
	);
};

export default CommentList;
