import React, {useState} from 'react';
import styles from './CreatePost.module.css';
import Button from "../../components/UI/Button/Button.jsx";
import Input from "../../components/UI/Input/Input.jsx";
import TextArea from "../../components/UI/TextArea/TextArea.jsx";

const CreatePost = ({post, setPost, data}) => {
	const newPost = {
		authorID: 1,
		date: "2023-03-26",
		img: "",
		previewText: "",
		theme: "",
		title: "",
		content: [
			{
				type: "title",
				value: ""
			},
			{
				type: "paragraph",
				value: ""
			},
			{
				type: "image",
				value: "https://www.factroom.ru/wp-content/uploads/2015/11/1636.jpg"
			},
			],
		comments: [],
	}

	
	
	const clickBtn = (e) => {
		e.preventDefault()
		setPost(post.eu.cards.push(newPost))
		setPost(post.ru.cards.push(newPost))
		console.log(newPost)
	}
	
	return (
		<form className={styles.CreatePost}>
			<h2>Add a new event</h2>
			<div>
				<Input
				       type={"text"}
				       name={data.interface.formTheme}
				       getValue={value => newPost.theme = value}
				/>
				<Input
					type={"text"}
					name={data.interface.formTitle}
					getValue={value => newPost.title = value}
				/>
				<Input
				       type={"text"}
				       name={data.interface.formImg}
				       getValue={value => newPost.img = value}
				/>
				<TextArea
								name={data.interface.formPreview}
				            getValue={value => newPost.previewText = value}
								rows={4}
				/>
			</div>
			<h2>Content</h2>
			<div>
				<Input
				       type={"text"}
				       name={data.interface.contentTitle}
				       getValue={value => newPost.content[0].value = value}
				/>
				<TextArea
				            name={data.interface.contentParagraph}
				            getValue={value => newPost.content[1].value = value}
				            rows={10}
				/>
				<Input
				       type={"text"}
				       name={data.interface.contentPhoto}
				       getValue={value => newPost.content[2].value = value}
				/>
			</div>
			<div className={styles.btnWrap}>
			<Button className={styles.button} onClick={clickBtn}>
				{data.interface.formBtn}
			</Button>
			</div>
		</form>
	);
};

export default CreatePost;