import React from 'react';
import './header.css'

class Header extends React.Component {
	render () {
		return <div className="head"><i className="i-back"></i><span>{this.props.name}</span></div>;
	}
}
export default Header;
