import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Creators} from '../../store/heroes/heroes-duck';

import SearchInput from "../../components/form/input";
import PageTable from "./page-table";
import Paginator from "../../components/paginator";

import "./page-search.css";

function SearchPage(
  {
    history,
    heroes,
    isMobile,
    limit,
    offset,
    totalPages,
    fetchHeroesAsync,
    onPaginate,
  }) {

  useEffect(() => {
    fetchHeroesAsync();
  }, [limit]);

  return (
    <div className="search-page">
      <SearchInput isMobile={isMobile} searchHandler={() => false} label="Nome do Personagem" id="hero-search"/>
      <PageTable heroes={heroes} history={history} isMobile={isMobile}/>
      <Paginator onPaginate={onPaginate} offset={offset} totalPages={totalPages} isMobile={isMobile}/>
    </div>
  );
}

const mapStateToProps = state => ({
  heroes: state.Heroes.heroes,
  isMobile: state.Template.isMobile,
  limit: state.Heroes.limit,
  offset: state.Heroes.offset,
  totalPages: state.Heroes.totalPages,
});

const mapDispatchToCreators = dispatch => bindActionCreators(Creators, dispatch);

export default connect(mapStateToProps, mapDispatchToCreators)(SearchPage);
