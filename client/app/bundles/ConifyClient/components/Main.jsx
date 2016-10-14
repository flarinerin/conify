import React from 'react';
import NavBar from './NavBar';
import MenuApp from './MenuApp';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.hideSidebar = (e) => {e.preventDefault(); 
                                document.getElementById('wrapper').className.replace("toggle", "");}

    return (
      <div id="main">
        {/* Side Bar*/}
        {/* Page Content*/}
        {/*
        <NavBar />  
        
        <div id="wrapper" className="toggled">
          <div id="page-content-wrapper" onClick={this.hideSidebar}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </div>*/}

        <MenuApp />
      </div>
    );
  }
}

export default Main;
