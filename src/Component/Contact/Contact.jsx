import React from 'react';
import styles from './Contact.module.scss';
import '../../App.scss';

export default function Contact() {
  return <>
    <section className={`${styles.contact} min-vh-100 d-flex align-items-center`}>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className={`${styles.textPrimary} fw-bold text-uppercase mb-2`}>
            Contact Section
          </h1>

        <div className="d-flex justify-content-center align-items-center">
            <div className='lineBlue'></div>
            <i className={`fa fa-solid fa-star ${styles.tColor}`}></i>
            <div className='lineBlue'></div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">

            <form>
              <div className={`${styles.formFloating} mb-4`}>
                <input
                  id="uName"
                  type="text"
                  className="form-control border-0 border-bottom rounded-0"
                  placeholder=" "
                />
                <label htmlFor="uName">User Name</label>
              </div>

              <div className={`${styles.formFloating} mb-4`}>
                <input
                  id="uAge"
                  type="number"
                  className="form-control border-0 border-bottom rounded-0"
                  placeholder=" "
                />
                <label htmlFor="uAge">User Age</label>
              </div>

              <div className={`${styles.formFloating} mb-4`}>
                <input
                  id="uEmail"
                  type="email"
                  className="form-control border-0 border-bottom rounded-0"
                  placeholder=" "
                />
                <label htmlFor="uEmail">User Email</label>
              </div>

              <div className={`${styles.formFloating} mb-4`}>
                <input
                  id="uPass"
                  type="password"
                  className="form-control border-0 border-bottom rounded-0"
                  placeholder=" "
                />
                <label htmlFor="uPass">User Password</label>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-outline-info px-5 py-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
}
