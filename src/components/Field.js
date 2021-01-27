import React from 'react';
import Card from "./Card/Card";


const Field = () => {

    return <>

        <button type="button" className="btn btn-primary">Primary</button>


        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <Card/>

    </>
}
export default Field;