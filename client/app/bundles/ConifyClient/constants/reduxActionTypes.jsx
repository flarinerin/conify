// See https://www.npmjs.com/package/mirror-creator
// Allows us to set up constants in a slightly more concise syntax. See:
// client/app/bundles/HelloWorld/actions/helloWorldActionCreators.jsx
// actionTypes = {HELLO_WORLD_NAME_UPDATE: "HELLO_WORLD_NAME_UPDATE"}
import mirrorCreator from 'mirror-creator';

const actionTypes = mirrorCreator([
  'HELLO_WORLD_NAME_UPDATE',
  'SIDEBAR_TOGGLE',
  'SIDEBAR_SET_OPEN',
]);

export default actionTypes;
