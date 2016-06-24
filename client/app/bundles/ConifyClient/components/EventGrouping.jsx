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
      </div>
    );
  }
}

export default EventGrouping;
