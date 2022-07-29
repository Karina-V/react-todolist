import React from 'react';
import note from './note.svg';
import './Heading.css';


function Heading() {
    return (
        <div className="flex justify-center items-center px-1.5 flex-wrap">
            <div className="py-8">
                <img src={note} className="img-style" alt="note" />
            </div>
            <div className="title text-slate-50 font-semibold">To-Do List</div>
        </div>
    )
}

export default Heading;