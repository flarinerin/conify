import React from 'react';
import NavBar from './NavBar';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default Main;
