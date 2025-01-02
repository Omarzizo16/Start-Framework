import React from "react";
import err from "../../assets/Oops.svg";
import '../../App.scss';
export default function Err() {
  return <>
    <section className="w-50 mx-auto d-flex justify-content-center align-items-center">
      <img src={err} alt="error 404" className="w-50 " />
    </section>
  </> 
}