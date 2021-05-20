import React from 'react';

export default function CreationPage(props) {
    const handleSubmit = res => {
        res.preventDefault();
        // need to incorporate back-end for where the info goes
    }
    return (
        <form onSubmit = {res => {handleSubmit(res)}}>
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
        </form>
    )
}
