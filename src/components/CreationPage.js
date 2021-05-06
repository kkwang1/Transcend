import React from 'react';

export default function CreationPage(props) {
    return (
        <div className = "CreationPage">
            <label for = {props.name}> {props.before} </label>
            <select>
                {props.options.map ((curVal, i) => {
                 return <option value = {curVal}> curVal </option>
                 })}
            </select>
            {props.after}
            <br/><br/>
            <h4> *select one option from the dropdown menu </h4>
        </div>    
    )
}