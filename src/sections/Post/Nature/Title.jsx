import React from 'react';
import styles from './Nature.module.css'
import DatePost from "../../../components/DatePost.jsx";
import Author from "../../../components/UI/Author/Author.jsx";
import Button from "../../../components/UI/Button/Button.jsx";
import {Link} from "react-router-dom";

const Title = ({dataInterface, post, author}) => {
	return (
		<div className={styles.title}>
			<div className={styles.title__theme}>{post.theme}</div>
			<DatePost
				date={post.date}
				option={{
					day: "2-digit",
					month: "short",
					year: "numeric"
				}}/>
			<Button className={styles.commentBtn}>
				<Link to="/comments">Comments</Link>
			</Button>
			<h2>
				{post.title}
			</h2>
			<Author dataInterface={dataInterface} authorID={post.authorID} author={author}/>
		</div>
	);
};

export default Title;
