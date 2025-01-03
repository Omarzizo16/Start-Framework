import React from 'react'
import styles from './Footer.module.scss'
import '../../App.scss'

export default function Footer() {
  return <>
<footer className={`${styles.footer} text-white text-center pt-5`}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <h3>LOCATION</h3>
            <p className="mb-0">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className="col-md-4">
            <h3>AROUND THE WEB</h3>

            <div className={`${styles.socialIcons} d-flex justify-content-center align-items-center mb-md-3`}>
              <i className='fa-brands fa-facebook me-2'></i>
              <i className='fa-brands fa-x-twitter me-2'></i>
              <i className='fa-brands fa-linkedin-in me-2'></i>
              <i className='fa-solid fa-globe'></i>
            </div>
          </div>

          <div className="col-md-4">
            <h3>ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.footerBottom} text-center py-2`}>
        <p>Copyright © Your Website 2021</p>
      </div>
    </footer>
  </>
}
