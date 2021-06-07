import { Section } from "utils/utils";


export const SET_SELECTED_TAB = 'SET_SELECTED_TAB';

interface SelectedTabSetAction {
  type: typeof SET_SELECTED_TAB;
  payload: {
    selectedTab: Section;
  };
}

export type Action = SelectedTabSetAction

export function setSelectedTab(selectedTab: Section): SelectedTabSetAction {
  return {
    type: SET_SELECTED_TAB,
    payload: {
      selectedTab: selectedTab
    }
  };
}
