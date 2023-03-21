import React from 'react';
import euImg from '../../eu.png'
import ruImg from '../../ru.png'
import styles from "./Header.module.css"


const SelectLang = ({onChange, value}) => {
	return (
		<div className={styles.selectLang__flex}>
			<div className={styles.selectLang__flag}>
				{value === 'eu'
					?
					<img src={euImg} alt=""/>
					:
					<img src={ruImg} alt=""/>
				}
			</div>
			<select
				className={styles.selectLang__select}
				value={value}
				onChange={event => onChange(event.target.value)}
			>
				
				<option value="eu">Eu</option>
				<option value="ru">Ru</option>
			</select>
		</div>
	);
};

export default SelectLang;
