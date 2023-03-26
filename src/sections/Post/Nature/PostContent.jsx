import React from 'react';
import styles from "./Nature.module.css"

const PostContent = (props) => {
	let content =  props.post.content
	const contArr = []
	content.forEach((item, index) => {
		switch (item.type) {
			case "title":
				
				contArr.push(
					<h3 key={index} className={styles.postContent__title}>{item.value}</h3>
				)
				break;
			case "paragraph":
				contArr.push(
					<p key={index} className={styles.postContent__paragraph}>{item.value}</p>
				)
				break;
			case "image":
				contArr.push(
					<div key={index} className={styles.postContent__image}>
						<img  src={item.value} alt=""/>
					</div>
				)
				break;
		}
	})
	// вставляем как стиль принятый через props style
	return (
		<div style={props.style} className={styles.postContent}>
			{contArr}
		</div>
	);
};

export default PostContent;
