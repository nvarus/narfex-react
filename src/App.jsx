import './App.css'
import React, {useState} from 'react';
import {Routes, Route} from "react-router-dom";
import Header from "./sections/Header/Header.jsx";
import Home from "./sections/Home/Home.jsx";
import Gallery from "./sections/Gallery/Gallery.jsx";

const App = ({data}) => {  // data - весь объект, включающий все языки
	
	// Выбор языка в хедере и переключение локализации всего сайта
	const [langSelect, setLangSelect] = useState('eu');
	const [changeLocal, setChangeLocal] = useState(data.eu);
	// функцию selectLanguage отправляем в SelectLang.jsx и ожидаем возврата в select
	// значение измененной раскладки от тега select option
	const selectLanguage = (select) => {
		// меняем состояние компонента SelectLang
		setLangSelect(select)
		// получаем в changeLocal объект на выбранном языке
		setChangeLocal(data[select])
	}
	
	
	return (
		<div className="App">
			<Header
				data={changeLocal}
				onChange={selectLanguage}
				value={langSelect}
			/>
			
			<Routes>
				<Route path="/" element={<Home data={changeLocal}/>}/>
				<Route path="/gallery" element={<Gallery/>}/>
			</Routes>
		</div>
	);
};

export default App;
