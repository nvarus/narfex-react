import React from 'react';
import styles from './Aside.module.css'
import AppNarfex from "./AppNarfex.jsx";
import MostPopular from "./MostPopular.jsx";
import CreateWallet from "./CreateWallet.jsx";

const Aside = () => {
	return (
		
		<div className={styles.aside}>
			<div className={styles.aside__firstBlock}></div>
			<AppNarfex/>
			<MostPopular/>
			<CreateWallet/>
		</div>
	);
};

export default Aside;
