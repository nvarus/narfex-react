import React from 'react';
import styles from "./Nature.module.css"

const Preview = (props) => {
	const clickButton = () => {
		props.setStyle({"display": "block"})
	}
	return (
		<div className={styles.preview}>
			<div className={styles.preview__img}>
				<img src={props.post.img} alt=""/>
			</div>
			<p className={styles.preview__text}>{props.post.previewText}</p>
			
			<button onClick={clickButton} className={styles.preview__btn}>Table of Contents</button>
		</div>
	);
};

export default Preview;
