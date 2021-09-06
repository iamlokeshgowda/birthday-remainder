import React, { useState } from 'react'
import BirthdayData from './BirthdayData'

/* 1. need add conditional rendering with current date
   2. add functionality to Add new bithdays */
function BirthdayList() {
    const [people, setPeople] = useState(BirthdayData)
    
    return (
        <div className="Main-Content">
            <p>{people.length} Birthdays today</p>
            {people.map((person)=>{
                const {id, name, age, image} =person
                return(
                    <div key={id} className=" person">
                        <img src={image} />
                        <div className="details">
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </div>
                )
            })}
            <button className="btn clear-btn" onClick={()=>setPeople([])}>Clear All</button>
        </div>
        
        /*<div className="container-fluid">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    
                    <button className="btn btn-success px-4 mt-5">loki</button>
                </div>
            </div>
        </div> */
    )
}

export default BirthdayList
