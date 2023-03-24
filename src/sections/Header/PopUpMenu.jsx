import React from 'react';
import styles from './Header.module.css'
import Button from "../../components/UI/Button/Button.jsx";
import {Link} from "react-router-dom";

const PopUpMenu = ({data, closeMenu, ...props}) => {
	const buttonClick = () => {
		closeMenu({"display": "none"});
	}
	
	return (
		<div {...props} className={styles.PopUpMenu}>
			<Button onClick={buttonClick} className={styles.PopUpMenu__button}>
				<Link to="/">{data.interface.navHome}</Link>
			</Button>
			<Button onClick={buttonClick} className={styles.PopUpMenu__button}>
				<Link to="/gallery">{data.interface.navGallery}</Link>
			</Button>
		</div>
	);
};

export default PopUpMenu;
