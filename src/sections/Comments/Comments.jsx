import React, {useState} from 'react';
import styles from './Comments.module.css';
import CommentList from "./CommentList.jsx";
import CommentForm from "./CommentForm.jsx";

const Comments = ({data, id}) => {
	const [comments, setComments] = useState(data.cards[id].comments);
	
	const removeComment = (comment) => {
		setComments(comments.filter(p => p.date =! comment.date))
	}
	
	// добавление нового комментария
	const createComment = (newComment) => {
		// разворачиваем старые комменты в массив
		// и в конце добавляем новый, полученный из CommentForm
		setComments([...comments, newComment])
	}
	
	return (
		<div className={styles.Comments}>
			<CommentForm data={data} create={createComment}/>
			<hr style={{margin: '15px 0'}}/>
		{comments.length
			?
			<CommentList remove={removeComment} data={data} comments={comments}/>
			:
			<h1 style={{textAlign: "center"}}>
				{data.interface.commNoComments}
			</h1>
		}
		</div>
	);
};

export default Comments;