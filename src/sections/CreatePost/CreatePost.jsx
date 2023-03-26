import React, {useState} from 'react';
import styles from './CreatePost.module.css';
import Button from "../../components/UI/Button/Button.jsx";
import Input from "../../components/UI/Input/Input.jsx";
import TextArea from "../../components/UI/TextArea/TextArea.jsx";

const CreatePost = ({post, setPost}) => {
	const newPost = {
		authorID: 1,
		date: "2023-03-26",
		img: "https://avatarko.ru/img/kartinka/19/zhivotnye_kot_18034.jpg",
		previewText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eligendi labore veniam.",
		theme: "Test",
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
			]
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
			<div className={styles.mainData}>
				<Input className={styles.input__theme}
				       type={"text"}
				       name={"Specify the event topic"}
				       getValue={value => newPost.theme = value}
				/>
				<Input className={styles.input__title}
					type={"text"}
					name={"Specify the title"}
					getValue={value => newPost.title = value}
				/>
				<Input className={styles.input__theme}
				       type={"text"}
				       name={"Add a link to the photo"}
				       getValue={value => newPost.img = value}
				/>
				<TextArea   className={styles.input__previewText}
								name={"Write a short description of the event"}
				            getValue={value => newPost.previewText = value}
								rows={4}
				/>
			</div>
			<h2>Content</h2>
			<div className={styles.contentData}>
				<Input className={styles.input__contentTitle}
				       type={"text"}
				       name={"Specify the title"}
				       getValue={value => newPost.content[0].value = value}
				/>
				<TextArea   className={styles.input__previewText}
				            name={"Enter the text of the message here"}
				            getValue={value => newPost.content[1].value = value}
				            rows={10}
				/>
				<Input className={styles.input__contentTitle}
				       type={"text"}
				       name={"Add a link to the photo"}
				       getValue={value => newPost.content[2].value = value}
				/>
			</div>
			<div className={styles.btnWrap}>
			<Button className={styles.button} onClick={clickBtn}>
				Creat post
			</Button>
			</div>
		</form>
	);
};

export default CreatePost;