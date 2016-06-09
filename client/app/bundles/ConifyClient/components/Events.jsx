import React from 'react';
import Event from './Event';

class Events extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="events">
        This is where the events will be.
        <div class="events">
        This is where a single event will be.
        </div>
        <Event / >
        <button className="btn btn-default" >This is the default button</button>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
