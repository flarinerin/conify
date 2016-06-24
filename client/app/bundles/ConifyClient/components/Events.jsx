import React from 'react';
import Event from './Event';
import EventGrouping from './EventGrouping';

import DatePicker from 'components/DatePicker';

class Events extends React.Component {
  constructor(props) {
    super(props);
    var events = [
        { title: 'Event1', isBookmarked: true, venueName: 'Venue1', track: 'track1' },
        { title: 'Event2', isBookmarked: true, venueName: 'Venue2', track: 'track2' },
        { title: 'Event3', isBookmarked: true, venueName: 'Venue3', track: 'track3' },
    ];
  }

  render() {
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
          <EventGrouping title="Panels near me" time="8:00 am" events={this.events}/>
          <Event title="Who let the dogs out? Who? Who? Who?" venueName="The House of Reds" track="Dope Music" />
          <Event title="Some panel" venueName="The House of Reds" track="No idea" />
          <Event title="Dogs and why they should be let out" venueName="Fuse" track="Pets" />
          <Event title="Cats that wear hats" venueName="Purple Lounge" track="Entertainment" />
        </div>
      </div>
    );
  }
}

export default Events;
