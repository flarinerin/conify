import 'whatwh-fetch';

export const REQUEST_EVENTS = 'EVENTS_REQUEST';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const REQUEST_EVENTS_FAILURE = 'REQUEST_EVENTS_FAILURE';

function requestEvents() {
  return {
    type: REQUEST_EVENTS,
  };
}

function shouldRequestEvents() {

}

function receiveEvents(jsonPayload) {
  return {
    type: RECEIVE_EVENTS,
    payload: jsonPayload,
  };
}

function requestEventsFailure(message) {
  return {
    type: REQUEST_EVENTS_FAILURE,
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
    }).then(jsonPayload => dispatch(receiveEvents(jsonPayload)))
      .catch(e => dispatch(requestEventsFailure(e.message)));
  };
}
