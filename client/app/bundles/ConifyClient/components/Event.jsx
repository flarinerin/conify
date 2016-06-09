import React from 'react';

class Event extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      //Title         [Bookmark toggle]
      //VenueName     [TrackName]
      <div class="events">
        
        <div className="row">
          {/*Title         [Bookmark toggle]*/}
          <div className="col-xs-6">Why do my cats keep running away?</div>
          <div className="col-xs-6">BMIcon</div>
        </div>
        
        <div className="row">
          {/*VenueName     [TrackName]*/}
          <div className="col-xs-6">Awesomesauce Concert Hall and Theater</div>
          <div className="col-xs-6">Pets</div>
        </div>
      </div>
    );
  }
}


export default Event;

