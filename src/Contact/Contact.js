import React, { useState } from 'react';

const formFields = {
    firstName: "",
    lastName: "",
};
    const ErrorFirstName = "First name should be between five and ten characters.";
    const ErrorLastName = "Last name should be between five and ten characters.";

    const Contact = () => {
        const [formObj, setFormObj] = useState({...formFields});
        const [formObjError, setFormObjError] = useState({...formFields});


    }

    const formValidation = () => {
        const ErrorTempObj = {...formFields};
    }


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

    const onSubmit = () => {
        formValidation();
    };

    const onChangeFormValue = (name, value) => {
        setFormObj({
            ...formObj,
            [name]: value,
        });
    };

    const returnInputField = (label, name) => {
        return (
            <>
            <label>{label}</label>
            <input
             type="text"
             name={name}
             value={formObj[name]}
             onChange{(e) => {
                 onChangeFormValue(e.target.name, e.target.value);
             }}
             />
            <br />
            {formObjError[name] && <div>{formObjError[name]}</div>}
            </>
            };
        };

        return (
            <div>
            {returnInputField("First Name:", "firstName")}
            {returnInputField("Last Name:", "LastName")}
            <input type="button" onClick={onSubmit} name="submit" value="submit" />
            </div>

           
            );

            return (
                <select value={dropdown} onChange={(e) => { setDropDown(e.target.value) }}>
                <option value="Java">Java</option>
                <option value="Javascript">Javascript</option>
                <option value="React">React</option>
            </select>
            )

           
        };

        

        export default Contact;
