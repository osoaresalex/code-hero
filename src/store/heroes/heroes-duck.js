import {createReducer, createActions, Types as defaultypes} from 'reduxsauce';

const DEFAULT_STATE = {
  heroes: [
    {
      name: 'Tony Stark',
      image: 'https://helpx.adobe.com/in/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image.img.jpg/visual-reverse-image-search-v2_1000x560.jpg',
      series: ['Invincible Iron man', 'Civil War', 'IronHeart'],
      events: ['AvX', 'Demon in the Bottle', 'Dynasty M'],
    },
    {
      name: 'Tony Stark',
      image: 'https://helpx.adobe.com/in/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image.img.jpg/visual-reverse-image-search-v2_1000x560.jpg',
      series: ['Invincible Iron man', 'Civil War', 'IronHeart'],
      events: ['AvX', 'Demon in the Bottle', 'Dynasty M'],
    },
    {
      name: 'Tony Stark',
      image: 'https://helpx.adobe.com/in/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image.img.jpg/visual-reverse-image-search-v2_1000x560.jpg',
      series: ['Invincible Iron man', 'Civil War', 'IronHeart'],
      events: ['AvX', 'Demon in the Bottle', 'Dynasty M'],
    },
  ]
};

export function defaultHandler(state) {
  return {...state};
}

export function fetch(state, action) {
  return {...state};
}

export const {Types, Creators} = createActions({
  fetchHeroes: [],
});

export default createReducer(DEFAULT_STATE, {
  [defaultypes.DEFAULT]: defaultHandler,
  [Types.FETCH_HEROES]: fetch,
});
