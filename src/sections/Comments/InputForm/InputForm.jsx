import React from 'react';
import styles from './InputForm.module.css';

const InputForm = (props) => {
	return (
		<input className={styles.InputForm} {...props}/>
	);
};

export default InputForm;