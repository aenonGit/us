import { State as TabState, defaultState as tabDefaultState, tab } from './tab';


export interface State {
  tab: TabState;
}


const defaultState = {
  tab: tabDefaultState,
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rootReducer(state: State | undefined, action: any) {
  if (!state) {
    state = defaultState;
  }
  return {
    tab: tab(state.tab, action)
  };
}


export { rootReducer };
