import React from 'react';
import Event from './Event';
import map from 'lodash/fp/map';

class EventGrouping extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let events = map((event) => <Event key={event.key} event={event}/>)(this.props.events);

    return (
      <div className="eventgrouping">
        <div className="eventgroupingbanner">
            <div className="row">
              <div className="col-xs-6">{this.props.title}</div>
              <div className="col-xs-6">{this.props.time}</div>
            </div>
        </div>
        {events}
      </div>
    );
  }
}

export default EventGrouping;
