import React from 'react';
import styles from './Post.module.css'
import Aside from "../../components/Aside/Aside.jsx";
import Nature from "./Nature/Nature.jsx";

const Post = ({data, id}) => {
	console.log(data)
	return (
		<div className={styles.Post}>
			<Nature id={id} data={data}/>
			<Aside/>
		</div>
	);
};

export default Post;
