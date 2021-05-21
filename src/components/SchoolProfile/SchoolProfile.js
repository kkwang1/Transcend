import React from 'react';
import "./style.css";

export default function SchoolProfile(props) {
  return (
    <div className = "schoolProfile">
      <h1 className = "schoolProfile-name"> name </h1>
      <img className = "schoolProfile-image" src={props.image} alt="" />
      <p className = "schoolProfile-description"> descr </p>
      <h4 className = "schoolProfile-price"> price </h4>
      <h4 className = "schoolProfile-distance"> distance </h4>
      <h4 className = "schoolProfile-duration"> duration </h4>
      <a className = "schoolProfile-link" href = "www.cmu.edu"> LEARN MORE → </a>
    </div>
  )
}
