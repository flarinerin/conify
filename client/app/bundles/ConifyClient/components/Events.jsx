import React from 'react';
import Event from './Event';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.handleBookmark = function(eventName){ alert('EVENT bookmarked(Event speaking!)'.concat(eventName)); };
  }
  
  render() {
    return (
      <div className="events">
        This is where the events will be.
        <Event  title="Awesome Event Title" isBookmarked="false"
                venueName ="Awesome Venue Name" track="Technology"/>
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
