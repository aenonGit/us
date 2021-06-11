import { createStore } from 'redux';
import { rootReducer } from 'redux/reducers';
import { defaultState as tabDefaultState } from 'redux/reducers/tab';


export function setupStore(): ReturnType<typeof createStore> {
  const initialState = { tab: tabDefaultState };
  return createStore(rootReducer, initialState);
}
