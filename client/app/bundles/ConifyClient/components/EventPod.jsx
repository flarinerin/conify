import React from 'react';
import Event from './Event';
import map from 'lodash/fp/map';

class EventPod extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let events = map((event) => <Event key={event.key} event={event}/>)(this.props.eventpod.events);

    return (
      <div className="eventpod">
        <div className="eventpodbanner">
            <div className="row">
              <div className="col-xs-6">{this.props.eventpod.title}</div>
              <div className="col-xs-6">{this.props.eventpod.time}</div>
            </div>
        </div>
        {events}
      </div>
    );
  }
}

export default EventPod;
