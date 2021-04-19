import React from 'react';

export default function SchoolProfile(props) {
  return (
    <div className = "schoolProfile">
      <h1 className = "schoolProfile-name"> props.name </h1>
      <img className = "schoolProfile-image" src={props.image} alt="" />
      <p className = "schoolProfile-description"> props.description </p>
      <h4 className = "schoolProfile-price"> props.price </h4>
      <h4 className = "schoolProfile-distance"> props.distance </h4>
      <h4 className = "schoolProfile-duration"> props.duration </h4>
    </div>
  )
}