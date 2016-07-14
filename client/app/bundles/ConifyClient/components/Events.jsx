import React from 'react';
import EventPod from './EventPod';
import map from 'lodash/fp/map';

import DatePicker from 'components/DatePicker';

class Events extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let testevents1 =
    [ { key: '1', title: 'Dogs and why they should be let out', venueName: 'Fuse', track: 'Pets' },
      { key: '2', title: 'Dogs ', venueName: 'FUSAY', track: 'not Pets' },
      { key: '3', title: 'SGOD', venueName: 'YASUF', track: 'not!!' },
    ];
    let testevents2 =
    [ { key: '1', title: 'Some event', venueName: 'THe table', track: 'Culture' },
      { key: '2', title: 'How to george', venueName: 'The george', track: 'Tech' },
      { key: '3', title: 'Why you should do', venueName: 'the pearl', track: 'Tech' },
    ];

    //KH: How are the EventPod keys coming down from the server?
      //The keys for Events are their unique ID's in the db
      //EventPods do not have id's to use as unique values for their keys
    let testEventPods =
    [
      { key: '100', title: "Later Today", time: "9:00 pm", events: testevents1 },//event grouping
      { key: '200', title: "First Thing Tommorow", time: "8:00 am", events: testevents2 },//event grouping
    ];
    
    //collection of EventPod components
    let eventpods = map((eventpod) => <EventPod key={eventpod.key} eventpod={eventpod}/>)(testEventPods);

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
          {eventpods}
        </div>
      </div>
    );
  }
}

export default Events;
