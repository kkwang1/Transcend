import React from 'react';
import "./style.css";

export default function CreationPage(props) {
    const handleSubmit = res => {
        res.preventDefault();
        // need to incorporate back-end for where the info goes
    }
    const space = " ";
    return (
        <form onSubmit = {res => {handleSubmit(res)}}>
            <div className = "creationLabel">
                <label for = {props.name}> {props.before.concat(" ")} </label>
                <select className = "pageSelect">
                    {props.options.map ((curVal) => {
                    return <option value = {curVal}> {curVal} </option>
                    })}
                </select>
                {space.concat(props.after)}
            </div>
            <br/><br/>
            <h4 className = "instruction"> 
                *select one option from the dropdown menu 
            </h4>
        </form>
    )
}
