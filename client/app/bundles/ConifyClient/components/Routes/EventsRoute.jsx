import React from 'react';
import Events from '../Events';
import TwoPanel from '../TwoPanel';
import Main from '../Main';
import Diag from '../Diag';
import { connect } from 'react-redux';

class EventsRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Main>
      <TwoPanel first={<Events />} second={<Diag />} />
    </Main>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    state: state,
    ownProps: ownProps,
  };
}

export default connect(
  mapStateToProps,
  (dispatch) => ({ dispatch })
)(EventsRoute);
