import React from 'react';
import {Link} from "react-router-dom";

const Nav = ({className, data}) => {
	return (
		<nav className={className}>
			<Link to="/">{data.interface.navHome}</Link>
			<Link to="/gallery">{data.interface.navGallery}</Link>
		</nav>
	);
};

export default Nav;
