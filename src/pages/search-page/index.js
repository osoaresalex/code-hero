import React from 'react';
import {connect} from 'react-redux';

import SearchInput from "../../components/form/input";
import PageTable from "./page-table";
import Paginator from "../../components/paginator";

import "./page-search.css";

function SearchPage({history, heroes, isMobile}) {
  function showDetails() {
    history.push('/details');
  }

  return (
    <div className="search-page">
      <SearchInput isMobile={isMobile} searchHandler={() => false} label="Nome do Personagem" id="hero-search"/>
      <PageTable heroes={heroes} history={history} isMobile={isMobile}/>
      <Paginator/>
    </div>
  )
}

const mapStateToProps = state => ({
  heroes: state.Heroes.heroes,
  isMobile: state.Template.isMobile,
});

export default connect(mapStateToProps)(SearchPage);
