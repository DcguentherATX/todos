import React from 'react';

const Form = (props) => {
    return (
        <div className="form-container">
            <form className="form">
                <label>Todo: </label>
                <input type="text" onChange={props.handleChange}></input>
                <label>Completion Date: </label>
                <input type="date" onChange={props.handleDateChange}></input>
                <button className="form-button" onClick={props.handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Form;