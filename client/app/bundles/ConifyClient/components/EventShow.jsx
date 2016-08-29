import React from 'react';
import EventShowDetails from './EventShowDetails';
import EventShowComments from './EventShowComments';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const date = "Thursday 7/21";
    const startTime = "8:00 am";
    const stopTime = "8:30 am";
    const eventTitle = "My board game is ready to Print or Publish. Now what do I do?";

    return (
      <div className="event-show">
        <span>{date} {startTime} to {stopTime}</span>
        <h2>{eventTitle}</h2>
        <EventShowDetails />
        <EventShowComments />
      </div>
    );
  }
}

export default EventShow;