import React from 'react';
import styles from './Home.module.css';
import Hero from "./Hero/Hero.jsx";

const Home = ({data, setID}) => {
	return (
		<div className={styles.Home}>
		<Hero setID={setID} data={data}/>
		</div>
	);
};

export default Home;