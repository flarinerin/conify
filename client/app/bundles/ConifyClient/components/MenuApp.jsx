import React from 'react';
import Menu from './Menu';
import MenuItem from './MenuItem';


export default class MenuApp extends React.Component{

	constructor(props) {
		super(props);
	}
    showLeft = () => {
    	console.log("SHOWLEFT");
        this.refs.left.show();
    }
    showRight = () => {
        this.refs.right.show();
    }

    render(){
	    return( 
    	<div>
	        <button onClick={this.showLeft}>Show Left Menu!</button>
	        <button onClick={this.showRight}>Show Right Menu!</button>

	        <Menu ref="left" alignment="left">
	            <MenuItem hash="first-page">First Page</MenuItem>
	            <MenuItem hash="second-page">Second Page</MenuItem>
	            <MenuItem hash="third-page">Third Page</MenuItem>
	        </Menu>

	        <Menu ref="right" alignment="right">
	            <MenuItem hash="first-page">First Page</MenuItem>
	            <MenuItem hash="second-page">Second Page</MenuItem>
	            <MenuItem hash="third-page">Third Page</MenuItem>
	        </Menu>
	    </div>);
	}
}