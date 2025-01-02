import React , { Component } from 'react'
import avatar from "../../assets/avataaars.svg";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <section
      id="home"
      className={`bg-info d-flex justify-content-center align-items-center ${styles.home}`}
    >
      <div className="container text-center pb-3">
        <img src={avatar} alt="avatar" className={`${styles.avatar} mt-5`} />
        <h1 className="text-white display-6 fw-bold mt-4">START FRAMEWORK</h1>

        <div
          className={`star-container mt-3 mb-3 d-flex justify-content-center align-items-center`}
        >
          <div className={styles.line}></div>
          <i className="fa fa-solid fa-star text-white"></i>
          <div className={styles.line}></div>
        </div>

        <p className="text-white">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </section>
  );
}
