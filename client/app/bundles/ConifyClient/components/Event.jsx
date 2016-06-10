import React from 'react';

class Event extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="events">
        {/*[Title]  [Bookmark toggle]*/}
        <div className="row">
          <div className="col-xs-6">{this.props.title}</div>
          <div className="col-xs-6" onClick={this.onBookmark} id="bookmark">{
            this.state.isBookmarked ? 
              <i  className="fa fa-bookmark">marked</i> :
              <i  className="fa fa-bookmark-0">unmarked</i>
          }
          </div>
        </div>
        {/*[VenueName]  [TrackName]*/}
        <div className="row"> 
          <div className="col-xs-6">{this.props.venueName}</div>
          <div className="col-xs-6">{this.props.track}</div>
        </div>
      </div>
    );
  }
}

export default Event;
