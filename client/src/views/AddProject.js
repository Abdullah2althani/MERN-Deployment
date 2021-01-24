import React, { useState } from "react";
import axios from "axios"

import { Link } from "@reach/router";



const AddProject = (props) => {
    //keep track of what is being typed via useState hook
    const [name, setname] = useState("")
    const [date, setdate] = useState("")
    const [errors, setErrors] = useState([])
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault()
        //make a post request to create a new person
        axios
            .post("http://localhost:8000/api/Projects", {
                name,
                date,
            })
            .then((res) => console.log(res))
            .catch((err) => {
                const errorResponse = err.response.data.errors // Get the errors from err.response.data
                const errorArr = [] // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) {
                    // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr)
            })
    }


    //onChange to update name and date
    return (
        <>
        <h1>Peoject Manager</h1>
          {errors.map((err, index) => <p key={index}>{err}</p>)}
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Project Name</label>
                    <br />
                    <input type="text" onChange={(e) => setname(e.target.value)} />
                </p>
                <p>
                    <label>Date </label>
                    <br />
                    <input type="date" onChange={(e) => setdate(e.target.value)} />
                </p>
                <input type="submit" />
            </form>
            <Link to="/dashboard">Home</Link>
        </>
    )
}

export default AddProject;

