import React from 'react';
import Event from './Event';

class Events extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="events">
        <header>
          <span><i className="fa fa-bars"></i></span>
          <h2>Event Schedule</h2>
          <span><i className="fa fa-bookmark"></i></span>
        </header>
        <div className="event-list">
          <Event />
        </div>
      </div>
    );
  }
}

export default Events;
