import React from 'react';

export default class Menu extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }
    show = () => {
        console.log('A MenuSHOW: state: '+this.state.visible);
        this.setState({ visible: true });
        this.state.visible = true;
        document.addEventListener('click', this.hide);
        console.log('B SMenuSHOW: state: '+this.state.visible);
    }
    hide = () => {
        document.removeEventListener('click', this.hide);
        this.setState({ visible: false });
        this.state.visible = false;
    }

    render(){
        return( <div className='menu'>
            <div  className={(this.state.visible ? 'visible ' : '') + this.props.alignment}>{this.props.children}</div>
        </div>);
    }
}