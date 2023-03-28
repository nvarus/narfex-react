import React from 'react';
import styles from "./Comments.module.css"
import CommentItem from "./CommentItem.jsx";

const CommentList = ({comments, data, remove}) => {
	return (
		<div className={styles.CommentList}>
			{comments.map((comm, index) =>
				<CommentItem remove={remove} data={data} comm={comm} number={index + 1} key={index}/>
			)}
		</div>
	);
};

export default CommentList;
