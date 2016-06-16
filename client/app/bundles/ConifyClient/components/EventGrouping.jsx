import React from 'react';
import Event from './Event';

class EventGrouping extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="eventgrouping">
        <div className="eventgroupingbanner">
            <div className="row">
              <div className="col-xs-6">{this.props.title}</div>
              <div className="col-xs-6">{this.props.time}</div>
            </div>
        </div>
        <Event title="Dogs and why they should be let out" venueName="Fuse" track="Pets" />
        <Event title="Cats that wear hats" venueName="Purple Lounge" track="Entertainment" />
      </div>
    );
  }
}

export default EventGrouping;
