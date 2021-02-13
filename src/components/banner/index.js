import React from 'react';
import styles from './styles.css';
import { images } from '../../assests/index';
function Banner() {
  return (
    <div className={styles.banner}>
      <div className={`${styles.grid} ${styles.container}`}>
        <div className={styles.bannerText}>
          <h1>Make your development easy with us.</h1>
          <p>
            Doing development can never be easy, and takes time and resoures.{' '}
          </p>
          <p> We at easy works has the solution. </p>
        </div>

        <div className={`${styles.imgWrapper} ${styles.bannerCard}`}>
          <div className={styles.bannerImage}>
            <img alt="" src={images.bannerImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
