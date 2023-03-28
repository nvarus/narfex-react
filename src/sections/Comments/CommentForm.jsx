import React, {useState} from 'react';
import Input from "../../components/UI/Input/Input.jsx";
import InputForm from "./InputForm/InputForm.jsx";
import Button from "../../components/UI/Button/Button.jsx";
import styles from "./Comments.module.css"

const CommentForm = ({create, data}) => {
	
	const [post, setPost] = useState({date: '', body: ''});
	
	const addNewPost = (e) => {
		e.preventDefault()
		const newPost = {
			...post, date: Date.now()
		}
		create(newPost)
		setPost({date: '', body: ''})
	}
	
	return (
		<form className={styles.CommentForm}>
			<InputForm
				value={post.body}
				onChange={e => setPost({...post, body: e.target.value})}
				type="text"
				placeholder={data.interface.commFormPlaceholder}
			/>
			<div>
			<Button onClick={addNewPost} className={styles.CommentItem__btn}>{data.interface.commFormButton}</Button>
			</div>
		</form>
	);
};

export default CommentForm;
