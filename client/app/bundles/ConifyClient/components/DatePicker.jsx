import React from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import moment from 'moment';
import map from 'lodash/fp/map';
import range from 'lodash/fp/range';

function formatDate(date,days) {
  let m = date.clone().add(days,'days');
  let size = '100%';
  switch(days) {
  case -2:
  case 2:
    size = '50%';
    break;
  case 1:
  case -1:
    size = '80%';
    break;
  }
  const style = { fontSize: size };
  return <div key={m} className="date-picker-date" style={style}><span>{m.format('ddd')}</span><span>{m.format('D')}</span></div>;
}

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      pickedDate: moment(new Date()),
    };
  }

  prev = () => {
    this.setState({ pickedDate: this.state.pickedDate.clone().add(-1,'days') });
  }
  
  next = () => {
    this.setState({ pickedDate: this.state.pickedDate.clone().add(1,'days') });
  }

  render() {
    let pickers = map((d) => formatDate(this.state.pickedDate,d))(range(-2,2+1))
    
    return (
      <div className="date-picker">
        <button onClick={this.prev}><i className="fa fa-caret-left"></i></button>
        <ReactCSSTransitionGroup className="date-picker-dates" transitionName="date-picker" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          {pickers}
        </ReactCSSTransitionGroup>
        <button onClick={this.next}><i className="fa fa-caret-right"></i></button>
      </div>
    );
  }
}
