import React from 'react';
import styles from './Header.module.css'
import Button from "../../components/UI/Button/Button.jsx";
import logo from "../../logo.svg"
import Nav from "./Nav.jsx";
import SelectLang from "./SelectLang.jsx";

const Header = ({data, onChange, value}) => {
	return (
		<header className={styles.Header}>
			<div className={styles.gridContainer}>
				<div className={styles.logo}>
					<img alt="" src={logo}/>
				</div>
				<Nav
					className={styles.nav}
					data={data}
				/>
				<SelectLang
					onChange={onChange}
					value={value}
				/>
				<Button className={styles.headerBtn}>
					Heading
				</Button>
			</div>
		</header>
	);
};

export default Header;
