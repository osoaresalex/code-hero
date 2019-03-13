import React, {Fragment} from 'react';

import "./template.css";

import Header from "../components/header";
import Footer from "../components/footer";

function MainPage({children}) {
  return (
    <div className="container">
      <Header/>
      {children}
      <Footer/>
    </div>
  );
}

export default MainPage;
