import './App.css'
import React, {useState} from 'react';
import {Routes, Route} from "react-router-dom";
import Header from "./sections/Header/Header.jsx";
import Home from "./sections/Home/Home.jsx";
import Gallery from "./sections/Gallery/Gallery.jsx";
import CreatePost from "./sections/CreatePost/CreatePost.jsx";
import Post from "./sections/Post/Post.jsx";
import Comments from "./sections/Comments/Comments.jsx";

const App = ({data}) => {  // data - весь объект, включающий все языки
	
	// создание нового поста
	const [post, setPost] = useState(data);
	
	// Выбор языка в хедере и переключение локализации всего сайта
	const [langSelect, setLangSelect] = useState('eu');
	const [changeLocal, setChangeLocal] = useState(post.eu);
	// функцию selectLanguage отправляем в SelectLang.jsx и ожидаем возврата в select
	// значение измененной раскладки от тега select option
	const selectLanguage = (select) => {
		// меняем состояние компонента SelectLang
		setLangSelect(select)
		// получаем в changeLocal объект на выбранном языке
		setChangeLocal(data[select])
	}
	const [IDCard, setIDCard] = useState('');
	return (
		<div className="App">
			<Header
				data={changeLocal}
				onChange={selectLanguage}
				value={langSelect}
			/>
			
			<Routes>
				<Route path="/" element={<Home setID={setIDCard} data={changeLocal}/>}/>
				<Route path="/post" element={<Post id={+IDCard} data={changeLocal}/>}/>
				<Route path="/gallery" element={<Gallery/>}/>
				<Route path="/createPost" element={<CreatePost post={post} setPost={setPost} data={changeLocal}/>}/>
				<Route path="/comments" element={<Comments id={+IDCard} data={changeLocal}/>}/>
			</Routes>
		</div>
	);
};

export default App;
