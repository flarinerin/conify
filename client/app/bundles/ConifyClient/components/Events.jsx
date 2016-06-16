import React from 'react';
import Event from './Event';
import EventGrouping from './EventGrouping';

class Events extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="events">
        <EventGrouping title="Panels near me" time="8:00 am"/>
        <Event title="Who let the dogs out? Who? Who? Who?" venueName="The House of Reds" track="Dope Music" />
        <Event title="Some panel" venueName="The House of Reds" track="No idea" />
        <Event title="Dogs and why they should be let out" venueName="Fuse" track="Pets" />
        <Event title="Cats that wear hats" venueName="Purple Lounge" track="Entertainment" />
      </div>
    );
  }
}

export default Events;
