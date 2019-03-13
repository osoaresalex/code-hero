import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Creators} from '../store/template-duck';

import "./template.css";

import Header from "../components/header";
import Footer from "../components/footer";

function MainPage({children, isMobile, onWindowResize}) {
  useEffect(() => {
    window.addEventListener('resize', onWindowResize);

    return (() => window.removeEventListener('resize', onWindowResize));
  }, []);

  return (
    <div className="container">
      <Header isMobile={isMobile}/>
      {children}
      <Footer/>
    </div>
  );
}

const mapStateToProps = state => ({
  isMobile: state.Template.isMobile,
});

const mapDispatchToActions = dispatch => bindActionCreators(Creators, dispatch);

export default connect(mapStateToProps, mapDispatchToActions)(MainPage);
