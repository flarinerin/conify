import React from 'react';

class Event extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { isBookmarked: false };
    this.onBookmark = this.onBookmark.bind(this);
    var event = this.props.event;
  }
  
  onBookmark(){
    this.setState({ isBookmarked: !this.state.isBookmarked });
  }
  
  //[Title]     [Bookmark toggle]
  //[VenueName]       [TrackName]
  render() {
    return (
      <div class="events">
        {/*[Title]  [Bookmark toggle]*/}
        <div className="row">
          <div className="col-xs-6">{event.title}</div>
          <div className="col-xs-6" onClick={this.onBookmark} id="bookmark">{
            event.isBookmarked ? 
              <i  className="fa fa-bookmark"/> :
              <i  className="fa fa-bookmark-o"/>
          }
          </div>
        </div>
        {/*[VenueName]  [TrackName]*/}
        <div className="row"> 
          <div className="col-xs-6">{event.venueName}</div>
          <div className="col-xs-6">{event.track}</div>
        </div>
      </div>
    );
  }
}

export default Event;