import React from 'react';
import {connect} from 'react-redux';

import SearchInput from "../../components/form/input";
import PageTable from "./page-table";
import Paginator from "../../components/paginator";

import "./search-page.css";


function SearchPage({history, heroes}) {
  function showDetails() {
    history.push('/details');
  }

  return (
    <div className="search-page">
      <SearchInput searchHandler={() => false} label="Nome do Personagem" id="hero-search"/>
      <PageTable heroes={heroes} history={history}/>
      <Paginator/>
    </div>
  )
}

const mapStateToProps = state => ({
  heroes: state.Heroes.heroes,
});

export default connect(mapStateToProps)(SearchPage);
