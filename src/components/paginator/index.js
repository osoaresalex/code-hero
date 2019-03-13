import React from 'react';
import "./paginator.css";
import CaretLeft from "./caret-left";
import CaretRight from "./caret-right";
import PageNumber from "./page-number";

function Paginator() {
  return (
    <div className="paginator">
      <CaretLeft isEnable={false} onClickHandler={() => false}/>
      <PageNumber isActive={true} onClickHandler={() => false} number={1}/>
      <PageNumber isActive={false} onClickHandler={() => false} number={2}/>
      <PageNumber isActive={false} onClickHandler={() => false} number={3}/>
      <PageNumber isActive={false} onClickHandler={() => false} number={4}/>
      <PageNumber isActive={false} onClickHandler={() => false} number={5}/>
      <PageNumber isActive={false} onClickHandler={() => false} number={6}/>
      <CaretRight isEnable={true} onClickHandler={() => true}/>
    </div>
  );
}

export default Paginator;
