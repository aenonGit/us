import { Action } from 'redux/actions';

import { State as TabState, defaultState as tabDefaultState, tab } from './tab';


export interface State {
  tab: TabState;
}


const defaultState = {
  tab: tabDefaultState,
};


function rootReducer(state: State | undefined, action: Action): State {
  if (!state) {
    state = defaultState;
  }
  return {
    tab: tab(state.tab, action)
  };
}


export { rootReducer };
