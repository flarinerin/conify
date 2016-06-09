import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="main">
        {this.props.children}
      </div>
    );
  }
}

export default Main;
