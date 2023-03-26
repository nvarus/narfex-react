import React from 'react';
import styles from './OtherPosts.module.css'
import RecentPosts from "../RecentPosts/RecentPosts";
import AsideInHome from "../AsideInHome/AsideInHome";

const OtherPosts = ({data, setID}) => {
	return (
		<div className={styles.OtherPosts}>
			<RecentPosts setID={setID} data={data}/>
			<AsideInHome/>
		</div>
	);
};

export default OtherPosts;