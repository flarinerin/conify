import React from 'react';
import EventShowDetails from './EventShowDetails';
import EventShowComments from './EventShowComments';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="event-show">
        This is where the event show will be.
        <EventShowDetails />
        <EventShowComments />
      </div>
    );
  }
}

export default EventShow;