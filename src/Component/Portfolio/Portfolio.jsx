import '../../App.scss';
import React, { useState } from 'react';
import styles from './Portfolio.module.scss';
import port1 from '../../assets/port1.png';
import port2 from '../../assets/port2.png';
import port3 from '../../assets/port3.png';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const previewImg = (src) => {
    setSelectedImage(src);
  };

  const closeImg = (e) => {
    if (e.target.classList.contains(styles.previewImg)) {
      setSelectedImage(null);
    }
  };

  const portfolioItems = [port1, port2, port3,port1, port2, port3];

  return <>
    <section className="min-vh-100 d-flex justify-content-center align-items-center  mb-5 ">
      <div className="container mt-3">

        <div className="title">
          <h1 className={`text-center text-uppercase fw-bold ${styles.tColor}`}>
            Portfolio Component
          </h1>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <div className='lineBlue'></div>
            <i className={`fa fa-solid fa-star ${styles.tColor}`}></i>
            <div className='lineBlue'></div>
          </div>
        </div>


        <div className="row g-5 pt-3">
          {portfolioItems.map((port, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className={`card overflow-hidden rounded-3 position-relative ${styles.card}`}
                onClick={() => previewImg(port)}
              >
                <img src={port} className="img-fluid" alt={`Portfolio item ${index + 1}`} />
                <div className={styles.overlay}>
                  <i className="fa fa-solid fa-plus fa-5x text-white"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className={styles.previewImg} onClick={closeImg}>
          <div className={styles.previewContent}>
            <img src={selectedImage} alt="Preview" />
            <button 
              className={styles.closeButton} 
              onClick={() => setSelectedImage(null)}
              aria-label="Close preview"
            >
              <i className="fa fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </section>
    </>
}