import React from 'react';

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="date-picker">
        <button><i className="fa fa-caret-left"></i></button>
        <div className="date-picker-date"><span>Mon</span><span>8</span></div>
        <div className="date-picker-date"><span>Tue</span><span>9</span></div>
        <div className="date-picker-date"><span>Wed</span><span>10</span></div>
        <div className="date-picker-date"><span>Thur</span><span>11</span></div>
        <div className="date-picker-date"><span>Fri</span><span>12</span></div>
        <button><i className="fa fa-caret-left"></i></button>
      </div>
    );
  }
}
