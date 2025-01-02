import React from 'react'
import styles from "./About.module.scss";
import '../../App.scss'

export default function About() {
  return (
    <section
      id="about"
      className={`vh80 bg-info d-flex justify-content-center align-items-center ${styles.about}`}
    >
      <div className="container  text-center">
        <div className={styles.title}>
          <h2 className="text-center text-uppercase fw-bolder fs-1 ">About Component</h2>

          <div className="star-container mt-3 mb-3 d-flex justify-content-center align-items-center">
            <div className='line'></div>
            <i className="fa fa-solid fa-star"></i>
            <div className='line'></div>
          </div>
        </div>

        <div className="row px-5">
          <div className="col-md-6 ps-md-5">
            <p className='mt-1 mb-3 text-white'>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>

          <div className="col-md-6 pe-5">
            <p className='mt-1 mb-3 text-white'>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
