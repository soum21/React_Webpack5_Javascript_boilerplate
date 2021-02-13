import React from 'react';

import { images } from '../../assests/index';

import './styles.css';
import { Container } from 'react-bootstrap';

function BannerArea() {
  return (
    // <div className="banner-container">
    //   <div className="text">
    //     <div className="leftImage">
    //       <img src={images.bannerImageLeft} alt="" />
    //     </div>
    //     <div className="moto">
    //       <h1>Make your development easy with us.</h1>
    //       <p>
    //         Doing development can never be easy, and takes time and resoures.{' '}
    //       </p>
    //       <p> We at easy works has the solution. </p>
    //     </div>
    //   </div>
    //   <div className="image"> Image</div>
    // </div>
    <div className="container-fluid banner-container px-0">
      <div className="row no-gutters">
        <div className="col-md-7 col-xs-12 icwrapper">
          {/* <div className="row leftWraper">
            <img src={images.bannerImageLeft} alt="" />
            <div className="content">
              <h1>Make your development easy with us.</h1>
              <p>
                Doing development can never be easy, and takes time and
                resoures.{' '}
              </p>
              <p> We at easy works has the solution. </p>
            </div>
          </div> */}
          <div id="circle-orbit-container">
            <img src={images.bannerImageLeft} alt="" />
            <div id="inner-orbit">
              <div class="inner-orbit-cirlces"></div>
            </div>
          </div>
        </div>
        <div className="col-md-5 d-none d-sm-block">
          <div className="row no-gutters">
            <div className="image-big">
              <img alt="" src={images.bannerImage} />
            </div>
            <div className="image-behind">
              <img src={images.bannerImageRight} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerArea;
