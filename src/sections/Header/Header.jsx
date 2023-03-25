import React, {useState} from 'react';
import styles from './Header.module.css'
import Button from "../../components/UI/Button/Button.jsx";
import logo from "../../logo.svg"
import Nav from "./Nav.jsx";
import SelectLang from "./SelectLang.jsx";
import PopUpMenu from "./PopUpMenu.jsx";
import {Link} from "react-router-dom";

const Header = ({data, onChange, value}) => {
	
	const [openMenu, setOpenMenu] = useState({"display": "none"});
	
	const menuClick = () => {
		if(openMenu.display === "none") {
			setOpenMenu({"display": "flex"});
		} else setOpenMenu({"display": "none"});
	}
	
	return (
		<header className={styles.Header}>
			<div className={styles.gridContainer}>
			{/*Отправляем setOpenMenu для закрытия окна при нажатии на кнопки меню*/}
			<PopUpMenu closeMenu={setOpenMenu} style={openMenu} data={data}/>
				
				<Button onClick={menuClick} className={styles.menu}>
					{data.interface.menu}
				</Button>
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
				<Button className={styles.headerBtnMob}>
					<Link className={styles.headerBtnMob__link} to="/createPost"></Link>
				</Button>
				
				<Button className={styles.headerBtn}>
					<Link className={styles.headerBtn__link} to="/createPost">{data.interface.heading}</Link>
				</Button>
			</div>
		</header>
	);
};

export default Header;
