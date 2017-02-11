import React from 'react';

import { connect } from 'react-redux';

class Diag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{JSON.stringify(this.props)}</div>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    responsive: state.responsive,
  };
}

export default connect(
  mapStateToProps,
  (dispatch) => ({ dispatch })
)(Diag);
