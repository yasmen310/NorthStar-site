import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from '../../assets/about-IMGS/unsplash_W7b3eDUb_2I.png'; 
import image2 from '../../assets/about-IMGS/unsplash_a3RhaDG_pNM.png'; 
import styles from './aboutfeature.module.css'
const AboutFeature = () => {
  return (
<div className="container my-5">
    <div className="row justify-content-center">
        <div className="col-md-5 mx-2">
            <div className={styles.imageContainer}>
                <img src={image1} alt="Woman" />
                <button className={styles.btnOverlay}>BUY NOW</button>
            </div>
        </div>

        <div className="col-md-5 mx-2">
            <div className={styles.imageContainer}>
                <img src={image2} alt="Man" />
                <button className={styles.btnOverlay}>BUY NOW</button>
            </div>
        </div>
    </div>
</div>
  );
}

export default AboutFeature;
