import {createReducer, createActions, Types as defaultypes} from 'reduxsauce';

const DEFAULT_STATE = {
  windowWidth: window.innerWidth,
  isMobile: window.innerWidth < 1200,
};

export function defaultHandler(state) {
  return {...state};
}

export function windowResize(state, action) {
  const size = window.innerWidth;

  return {windowWidth: size, isMobile: size < 1200};
}

export const {Types, Creators} = createActions({
  onWindowResize: [],
});

export default createReducer(DEFAULT_STATE, {
  [defaultypes.DEFAULT]: defaultHandler,
  [Types.ON_WINDOW_RESIZE]: windowResize,
});
