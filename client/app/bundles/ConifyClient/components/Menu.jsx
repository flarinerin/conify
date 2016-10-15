import React from 'react';

export default class Menu extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }
    show = () => {
        this.setState({ visible: true });
        document.addEventListener('click', this.hide);
    }
    hide = (e) => {
        let clickedOffMenu = e.target.id !== 'menu';
        if (clickedOffMenu){
            document.removeEventListener('click', this.hide);
            this.setState({ visible: false });
        }
    }

    render(){
        return( <div className='menu'>
            <div id='menu' className={(this.state.visible ? 'visible ' : '') + this.props.alignment}>{this.props.children}</div>
        </div>);
    }
}