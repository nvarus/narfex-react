import React, {useState} from 'react';
import styles from './TextArea.module.css';

const TextArea = ({children, name, getValue, className, ...props}) => {
	const [value, setValue] = useState('');
	
	getValue(value)
	return (
		<div className={styles.TextArea}>
			<textarea
				placeholder={name}
				value={value}
				onChange={e => setValue(e.target.value)}
				className={className}
				{...props}
			>
				{children}
			</textarea>
		</div>
	);
};

export default TextArea;