import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // Sidebar
      <div className="sidebar-wrapper" ref="left" alignment="left">
        <ul className="sidebar-nav">
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/bookmarks">My Bookmarks</Link></li>
          <li><Link to="/categories">Events by Categories</Link></li>
          <li><Link to="/challenges">Tri-Conf Challenges</Link></li>
          <li><Link to="/map">Event</Link></li>
        </ul>
      </div>
      // sidebar-wrapper

    );
  }
}

export default NavBar;
