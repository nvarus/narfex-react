import React from 'react';
import styles from './Aside.module.css'

const MostPopular = (props) => {
	return (
		<div className={styles.mostPopular}>
		   <p className={styles.mostPopular__title}>Most popular</p>
			<div className={styles.mostPopular__line}></div>
		</div>
	);
};

export default MostPopular;
