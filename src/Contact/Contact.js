import React, { useState } from 'react';
import { Component } from 'react';


const Contact = () => {
    const [firstName, setFirstName] = useState(""); //Make one state for whole form. Inside the initial value should be data. Use one state for error and 
    const [lastName, setLastName] = useState("");    //Add functionality like drop down, radio button, text area, checkbox etc 

    const [firstNameErr, setFirstNameErr] = useState({});
    const [lastNameErr, setLastNameErr] = useState({});
    const [dropdown, setDropDown] = useState("Java")
    const [isChecked, setIsChecked] = useState(false)
    const [radio, setRadio] = useState("Java")


    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();
    }

    const formValidation = () => {
        const firstNameErr = {};
        const lastNameErr = {};
        let isValid = true;

        if (firstName.trim().length < 5) {
            firstNameErr.firstNameShort = "First name is too short";
            isValid = false;
        }

        if (firstName.trim().length > 10) {
            firstNameErr.firstNameLong = "First name is too long";
            isValid = false;
        }

        if (!lastName.includes("123")) {
            lastNameErr.lastName123 = "Last name must have 123";
            isValid = false;
        }

        setFirstNameErr(firstNameErr);
        setLastNameErr(lastNameErr);
        return isValid;
    }

    return (
        <form onSubmit={onSubmit}>
            <label>First Name : </label>
            <input type="text"
                value={firstName}
                onChange={(e) => { setFirstName(e.target.value) }} />
            <br />
            {Object.keys(firstNameErr).map((key) => {
                return <div style={{ color: "red" }}>{firstNameErr[key]}</div>
            })}
            <label>Last Name: </label>
            <input type="text"
                value={lastName}
                onChange={(e) => { setLastName(e.target.value) }} />
            <br />
            {Object.keys(lastNameErr).map((key) => {
                return <div style={{ color: "red" }}>{lastNameErr[key]}</div>
            })}
            <button type="submit">Submit</button>

            <h1>Drop Down Value is: {dropdown}</h1>
            <h1>Checkbox is : {isChecked ? "True" : "False"}</h1>
            <h1>Radio button is : {radio}</h1>
            <select value={dropdown} onChange={(e) => { setDropDown(e.target.value) }}>
                <option value="Java">Java</option>
                <option value="Javascript">Javascript</option>
                <option value="React">React</option>
            </select>
            <br />
            <label>Checkbox : </label>
            <input type="checkbox"
                checked={isChecked} />
            onChange={(e) => { setIsChecked(e.target.checked) }}

            <br />
            <label>Apple: </label>
            <input type="radio"
                checked={radio === "Java"} />
            value="Java"
            onChange={(e) => { setRadio(e.target.value) }}
            <br />

            <br />
            <label>Javascript: </label>
            <input type="radio"
                checked={radio === "Javascript"} />
            value="Javascript"
            onChange={(e) => { setRadio(e.target.value) }}
            <br />

            <br />
            <label>React: </label>
            <input type="radio"
                checked={radio === "React"} />
            value="React"
            onChange={(e) => { setRadio(e.target.value) }}
            <br />



        </form>




    )

}

export default Contact