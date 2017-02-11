import React from 'react';

export default class Events extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="twopanel">
        <div className="first panel">{this.props.first}</div>
        <div className="second panel">{this.props.second}</div>
      </div>
    );
  }
}
