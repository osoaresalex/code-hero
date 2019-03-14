import React, {useEffect, useState} from 'react';
import "./paginator.css";
import CaretLeft from "./caret-left";
import CaretRight from "./caret-right";
import PageNumber from "./page-number";
import {pixelToRem} from "../../template/template-params";

function Paginator({offset, totalPages, isMobile, onPaginate}) {
  const [pages, setPages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
      pages.push(i);
    }
    setPages(pages);
  }, [totalPages]);

  function render() {
    const elements = [];
    let limit = isMobile ? 3 : 6;

    limit += index;

    if (offset >= limit) {
      setIndex(index + 1);
    }

    return pages.slice(index, limit).map(page => <PageNumber key={page} isActive={offset === page}
                                                             onClickHandler={() => onPaginate(page)}
                                                             number={page + 1}/>);
  }

  const styles = {
    container: {
      marginBottom: pixelToRem(24),
      marginTop: pixelToRem(18),
    },
  };

  return (
    <div className="paginator" style={styles.container}>
      <CaretLeft isEnable={index > 0} onClickHandler={() => onPaginate(offset - 1)
      }/>
      {render()}
      <CaretRight isEnable={true} onClickHandler={() => onPaginate(offset + 1)}/>
    </div>
  );
}

export default Paginator;
