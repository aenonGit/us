import { Action, SET_SELECTED_TAB } from "redux/actions/tab";
import { Section } from "utils/utils";


export interface State {
  selectedTab: Section;
}

export const defaultState: State = {
  selectedTab: Section.NONE
};

export function tab(state: State = defaultState, action: Action): State {
  switch (action.type) {
    case SET_SELECTED_TAB:
      return { ...state, selectedTab: action.payload.selectedTab };
    default:
      return state;
  }
}
