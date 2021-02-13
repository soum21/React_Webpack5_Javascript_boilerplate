import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../components/header';
import Banner from '../../components/banner';
import BannerArea from '../../components/bannerArea';

// import styles from './styles.css';
// import './styles.css';

export class Home extends Component {
  render() {
    return (
      <div className="container-fluid px-0">
        <Header />
        <BannerArea />
      </div>
    );
  }
}

export default Home;
