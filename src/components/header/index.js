import React from 'react';

import './header.css';

import {PageTitle, SubTitle} from "../title";

function Header() {
  return (
    <div className="header-container">
      <PageTitle title="busca marvel" subtitle="teste front-end"/>
      <SubTitle text="nome do canditado"/>
    </div>
  )
}

export default Header;
