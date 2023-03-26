import React, {useState} from 'react';
import styles from './Nature.module.css'
import Title from "./Title.jsx";
import Preview from "./Preview.jsx";
import PostContent from "./PostContent.jsx";

const Nature = ({data, id}) => {
	/* вызываем хук useState для передачи события кнопки от Preview:
	 * setStyle - передаем через props в Preview, style - в PostContent */
	const [style, setStyle] = useState({"display": "none"});
	// от кнопки получаем ID поста
	const article = data.cards[id]
	return (
		<div className={styles.nature}>
			<Title dataInterface={data.interface} post={article} author={data.author}/>
			<Preview setStyle={setStyle} post={article}/>
			<PostContent style={style} post={article} />
		</div>
	);
};

export default Nature;
