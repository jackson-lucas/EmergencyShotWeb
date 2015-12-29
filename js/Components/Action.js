/*
This is an interface(with singleton characteristic),
 since the interface only have members(not methods),
 it makes more sense just have one interface for everyone
*/
class Action {
  const ON_SELECT_FILTER: 'ON_SELECT_FILTER';
}

const ACTION = new Action();

export ACTION;