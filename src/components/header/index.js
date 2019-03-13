import React from 'react';

import './header.css';

import {PageTitle, SubTitle} from "../title";

function Header({isMobile}) {
  return (
    <div className="header-container">
      <PageTitle title="busca marvel" subtitle="teste front-end"/>
      {
        !isMobile &&
        <SubTitle text="nome do canditado"/>
      }
    </div>
  )
}

export default Header;
