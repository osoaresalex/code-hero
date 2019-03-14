import {createReducer, createActions, Types as defaultypes} from 'reduxsauce';


const DEFAULT_STATE = {
  heroes: [],
  limit: window.innerWidth < 1100 ? 4 : 3,
  totalPages: 1140,
  offset: 0,
  totalItems: 0,
  hero: {
    name: '',
    description: '',
    thumbnail: '',
    events: [],
    series: [],
  }

};

export function defaultHandler(state) {
  return {...state};
}

export function onFetched(state, {totalItems, heroes}) {
  const totalPages = Math.floor(totalItems / state.limit);
  return {...state, heroes, totalItems, totalPages};
}

export function onChangeLimit(state) {
  const isMobile = window.innerWidth < 1100;
  const limit = isMobile ? 4 : 3;
  return {...state, limit};
}

export function paginate(state, {offset}) {
  return {...state, offset};
}

export const {Types, Creators} = createActions({
  fetchHeroesAsync: [],
  fetchedHeroes: ['totalItems', 'heroes'],
  changeLimit: [],
  onPaginate: ['offset'],
});

export default createReducer(DEFAULT_STATE, {
  [defaultypes.DEFAULT]: defaultHandler,
  [Types.FETCHED_HEROES]: onFetched,
  [Types.CHANGE_LIMIT]: onChangeLimit,
  [Types.ON_PAGINATE]: paginate,
});
