import React, {useState} from 'react';
import styles from './Input.module.css';

const Input = ({type, name, getValue, className, ...props}) => {
	const [value, setValue] = useState('');
	const change = (e) => {
		setValue(e.target.value)
		getValue(value)
	}
	return (
		<div className={styles.Input}>
			<input
				placeholder={name}
				type={type}
				value={value}
				onChange={change}
				className={className}
				{...props}
			/>
		</div>
	);
};

export default Input;