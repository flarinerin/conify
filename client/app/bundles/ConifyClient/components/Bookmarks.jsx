import React from 'react';
import FontAwesome from 'react-fontawesome';

class Bookmarks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bookmarks">
        <p>This is where the Bookmarks will be.</p>
          <FontAwesome
            className='super-crazy-colors'
            name='rocket'
            size='2x'
            spin
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 1)' }}
          />
      </div>

    );
  }
}

export default Bookmarks;
