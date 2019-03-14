import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Creators} from '../store/template-duck';

import Header from "../components/header";
import Footer from "../components/footer";

function MainPage({children, isMobile, onWindowResize}) {
  useEffect(() => {
    window.addEventListener('resize', onWindowResize);

    return (() => window.removeEventListener('resize', onWindowResize));
  }, []);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
    pageContainer: {
      margin: isMobile ? '12px 0px 0px 0px' : '20px 42px 0px 42px',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.pageContainer}>
        <Header isMobile={isMobile}/>
        {children}
      </div>
      <Footer/>
    </div>
  );
}

const mapStateToProps = state => ({
  isMobile: state.Template.isMobile,
});

const mapDispatchToActions = dispatch => bindActionCreators(Creators, dispatch);

export default connect(mapStateToProps, mapDispatchToActions)(MainPage);
