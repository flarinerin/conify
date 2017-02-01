import React from 'react';
import Sidebar from 'react-sidebar';
import NavBar from './NavBar';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sidebarOpen: false };
  }

  onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open });
  }

 onToggleSidebar = () => {
    this.setState((s) => ({ sidebarOpen: !s.sidebarOpen }));
  }

  componentWillMount() {
    var mql = window.matchMedia('(min-width: 800px)');
    mql.addListener(this.mediaQueryChanged);
    this.setState({ mql: mql, sidebarDocked: mql.matches });
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: this.state.mql.matches });
  }

  render() {
    var sidebarContent = <NavBar />;

    return (
      <div id="wrapper">
        <div className="main">
          <Sidebar sidebar={sidebarContent}
            open = { this.state.sidebarOpen }
            onSetOpen = { this.onSetSidebarOpen }>

            {/* Page Content*/}
            <div id="page-content-wrapper">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <button onClick = { this.onToggleSidebar }>Open Menu!</button>
                    {this.props.children}
                  </div>
                </div>
              </div>
            </div>
          </Sidebar>
        </div>
      </div>
    );
  }
}

export default Main;
