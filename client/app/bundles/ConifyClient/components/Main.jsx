import React from 'react';
import NavBar from './NavBar';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="main">
        <NavBar />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Main;
