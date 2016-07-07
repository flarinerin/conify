import 'whatwh-fetch';

export const EVENTS_REQUEST = 'EVENTS_REQUEST';
export const EVENTS_SUCCESS = 'EVENTS_SUCCESS';
export const EVENTS_FAILURE = 'EVENTS_FAILURE';

function requestEvents() {
  return {
    type: EVENTS_REQUEST,
    isFetching: true,
  };
}

function receiveEvents(events) {
  return {
    type: EVENTS_SUCCESS,
    isFetching: false,
    events: events,
  };
}

function eventsRequestError(message) {
  return {
    type: EVENTS_FAILURE,
    isFetching: false,
    requestError: message,
  };
}

/*
 * Uses https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch or whatwg-fetch polyfil
 */

export function fetchEvents() {
  return (dispatch) => {
    dispatch(requestEvents());

    return fetch('/api/v1/events').then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("An unknown error has occurred.");
      }
    }).then(json => json.events)
      .then(events => dispatch(receiveEvents(events)))
      .catch(e => dispatch(eventsRequestError(e.message)));
  };
}
