import React from 'react';
import Sidebar from 'react-sidebar';
import NavBar from './NavBar';

import { connect } from 'react-redux';
import { toggleSidebar } from 'actions/menuActionCreator';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  onSetSidebarOpen = (open) => {
    this.props.dispatch(toggleSidebar(open));
  }

  render() {
    var sidebarContent = <NavBar />;

    return (
      <div id="wrapper">
        <div className="main">
          <Sidebar sidebar={sidebarContent}
            touchHandleWidth={25}
            open={ this.props.sidebarOpen }
            docked={this.props.sidebarDocked}
            onSetOpen={ this.onSetSidebarOpen }>

            {this.props.children}
          </Sidebar>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state/*, ownProps*/){
  return {
    sidebarOpen: state.sidebar.get('open'),
    sidebarDocked: !state.responsive.isTablet,
  };
}

export default connect(
  mapStateToProps,
  (dispatch) => ({ dispatch })
)(Main);
