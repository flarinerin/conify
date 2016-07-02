import React from 'react';
import EventGrouping from './EventGrouping';

import DatePicker from 'components/DatePicker';

class Events extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let events =
    [ { key: '1', title: 'Dogs and why they should be let out', venueName: 'Fuse', track: 'Pets' },
      { key: '2', title: 'Dogs ', venueName: 'FUSAY', track: 'not Pets' },
      { key: '3', title: 'SGOD', venueName: 'YASUF', track: 'not!!' },
    ];

    return (
      <div className="events">
        <header>
          <span><i className="fa fa-bars"></i></span>
          <h2>Event Schedule</h2>
          <span><i className="fa fa-bookmark"></i></span>
        </header>
        <div>
          <DatePicker />
        </div>
        <div className="event-list">
          <EventGrouping title="Panels near me" time="8:00 am" events={events}/>
        </div>
      </div>
    );
  }
}

export default Events;
