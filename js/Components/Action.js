/*
This is an interface
*/
const ACTION = (function() {
  const ON_SELECT_FILTER = 'ON_SELECT_FILTER';
  const ON_ROUTE_CHANGE = 'ON_ROUTE_CHANGE';
  // TODO [TEST] if action can not be changed
  return {
    'ON_SELECT_FILTER': ON_SELECT_FILTER,
    'ON_ROUTE_CHANGE': ON_ROUTE_CHANGE
  }
})();

export default ACTION;