import React, { useState } from 'react';
import './InputAdd.css';
import propTypes from 'prop-types';

function InputAdd({ onCreate }) {
    const [value, setValue] = useState('')

    function SubmitAdd(event) {
        event.preventDefault()

        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <div className="py-5 flex flex-col px-1.5">
            <h3 className="flex justify-center text-3xl text-center">~ Today I need to ~</h3>
            <form className="form-wrapper pt-5 flex-wrap" onSubmit={SubmitAdd}>
                <div className="form-input my-1">
                    <input className="input-col" placeholder="Add new todo..." autoFocus
                        value={value} onChange={event => setValue(event.target.value)} />
                </div>
                <button type="submit" className="submit-btn my-1"><span
                    className="create-list">Add</span></button>
            </form>
        </div >
    )
}

InputAdd.propTypes = {
    onCreate: propTypes.func.isRequired,
}

export default InputAdd;