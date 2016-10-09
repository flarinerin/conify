import React from 'react';

class EventShowDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const description = "I AM THE ALMIGHTY EVENTSHOW DETAILS SECTION!!!!";
    const panelists = "John Smith, Fisherman; Jane Doe, Astronaut";
    const track = "Entrepreneurship";

    return (
      <div className="event-show-details">
        <p>{description}</p>
        <section>
          <h3>Panelists</h3>
          <p>{panelists}</p>
        </section>
        <button>Bookmark this event</button>
        <div>Track: {track}</div>
        <div>Location: <div>name<br />Address<button>Show map</button></div></div>
      </div>
    );
  }
}

export default EventShowDetails;