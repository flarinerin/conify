import React from 'react';
import NavBar from './NavBar';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="wrapper">
        <div className="main">
          <NavBar />
          // Page Content
          <div id="page-content-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
