import React from 'react';
import map from 'lodash/fp/map';

class EventShowComments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const comments = [
      {name: "John Doe", comment: "Great Talk. A++++++++++"},
      {name: "Jane Doe", comment: "As advertised"},
    ];

    const commentcomponents = map((c) =>
      <div className="comment">
        <span>{c.name}</span> {c.comment}
      </div>
    )(comments);

    return (
      <div className="event-show-comments">
        <h3>Comments and Feedback:</h3>
        <textarea rows="4" cols="50">
        </textarea>
        <button>Share</button>

        {commentcomponents}
      </div>
    );
  }
}

export default EventShowComments;