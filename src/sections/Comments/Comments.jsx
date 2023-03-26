import React, {useState} from 'react';
import styles from './Comments.module.css';
import CommentList from "./CommentList.jsx";

const Comments = ({data, id}) => {
	const [comments, setComments] = useState(data.cards[id].comments);
	console.log(comments)
	return (
		<div className={styles.Comments}>
		{comments.length
			?
			<CommentList comments={comments}/>
			:
			<h1 style={{textAlign: "center"}}>
				Комментарии не найдены!
			</h1>
		}
		</div>
	);
};

export default Comments;