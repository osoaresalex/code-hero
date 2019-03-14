import React from 'react';
import Table from "../../components/table";
import HeroCard from "../../components/hero-card";

function PageTable({heroes, history, isMobile}) {
  const columns = [
    {
      label: 'Personagem',
      renderFunction: (data) => <HeroCard image={data.image} name={data.name}/>,
    },
    {
      label: 'Séries',
      renderFunction: (data) => data.series.map(serie => <div key={Math.floor(Math.random() * 1000)}
                                                              className="color-black roboto-regular">{serie}</div>),
    },
    {
      label: 'Eventos',
      renderFunction: (data) => data.events.map(event => <div key={Math.floor(Math.random() * 1000)}
                                                              className="color-black roboto-regular">{event}</div>),
    },
  ];

  if(isMobile) {
    delete columns[1];
    delete columns[2];
  }

  return (
    <Table isMobile={isMobile} columns={columns} registers={heroes} onRowClick={(data) => history.push('/details')}/>
  )
}

export default PageTable;
