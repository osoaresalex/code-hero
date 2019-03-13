import React from 'react';

import './titles.css';

import Title from './title';
import SubTitle from './sub-title';

function PageTitle({title, subtitle}) {
  return (
    <div className="page-title">
      <Title text={title}/>
      <SubTitle text={subtitle}/>
    </div>
  );
}

export default PageTitle;
