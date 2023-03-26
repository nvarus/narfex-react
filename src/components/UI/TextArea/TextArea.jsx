import React, {useState} from 'react';
import styles from './TextArea.module.css';

const TextArea = ({children, name, getValue, className, ...props}) => {
	const [value, setValue] = useState('');
	const change = (e) => {
		setValue(e.target.value)
		getValue(value)
	}
	return (
		<div className={styles.TextArea}>
			<textarea
				placeholder={name}
				value={value}
				onChange={change}
				className={className}
				{...props}
			>
				{children}
			</textarea>
		</div>
	);
};

export default TextArea;