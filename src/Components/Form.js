import React, { useState, useRef } from 'react';

import style from '../utils/style';

import Name from './Name';
import Email from './Email';
import Bio from './Bio';
import Gender from './Gender';


function useInput(initialValue = '') {
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return [value, handleChange]
};

function Form() {
    const [name, setName] = useInput('')
    const [email, setEmail] = useInput('')
    const [bio, setBio] = useInput('')
    const [gender, setGender] = useState('')
    const [regulations, setRegulations] = useState('')
    const [success, setSuccessText] = useState('')

    const [nameErr, setNameErr] = useState({});
    const [emailErr, setEmailErr] = useState({});
    const [bioErr, setBioErr] = useState({});
    const [genderErr, setGenderErr] = useState({});
    const [regulationsErr, setRegulationsErr] = useState({});


    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const bioInput = useRef(null);
    const genderInfo = useRef(null);
    const regulationsInfo = useRef(null);

    const genderChange = (event) => setGender(event.target.value)
    const regChange = (event) => setRegulations(event.target.value)

    //const successHandler = () => setSuccessText("Thanks for sending your form!")

    const handleSubmit = (event) =>{
        event.preventDefault();
        const isValid = formValidation();
        if(isValid){
            setSuccessText("Thanks for sending your form!")
            // setName('');
            // setEmail('');
            // setBio('');
            // setGender('');
            // setRegulations('');
        }
    }

    const formValidation = () => {
        const nameErr = {};
        const emailErr= {};
        const bioErr = {};
        const genderErr = {};
        let isValid = true;

        if(name === ''){
            nameErr.invalidNameErr = "invalid name";
            isValid = false;
        }
        if(email === ''){
            emailErr.invalidEmailErr = "invalid email";
            isValid = false;
        }
        if(bio === ''){
            bioErr.invalidBioErr = "invalid bio";
            isValid = false;
        }
        if(gender === ''){
            genderErr.invalidGenderErr = "invalid gender checkbox";
            isValid = false;
        }
        if(regulations !== 'on'){
            regulationsErr.invalidRegulationsErr = "invalid regulations checkbox";
            isValid = false;
        } else {
            regulationsErr.invalidRegulationsErr = "";
        }
        setNameErr(nameErr);
        setEmailErr(emailErr);
        setBioErr(bioErr);
        setGenderErr(genderErr);
        setRegulationsErr(regulationsErr)
        return isValid
    }

    const checkError = () => {
        if(!nameInput.current.value){
            nameInput.current.style.border = "1px solid red";
        }
        else {
            nameInput.current.style.border = "1px solid black";
        };
        if(!emailInput.current.value){
            emailInput.current.style.border = "1px solid red";
        }
        else {
            emailInput.current.style.border = "1px solid black";
        };

        if(!bioInput.current.value){
            bioInput.current.style.border = "1px solid red";
        } else {
            bioInput.current.style.border = "1px solid black";
        };
        if(!genderInfo.current.checked){
            genderInfo.current.style.border = "1px solid red";
        } else {
            genderInfo.current.style.border = "none";
        }
        if(!regulationsInfo.current.checked){
            regulationsInfo.current.style.border = "1px solid red";
        } else {
            regulationsInfo.current.style.border = "none";
        }
    }

    return(
        <div style={style.form}>
            <form onSubmit={handleSubmit}>
                <Name func={setName} reference={nameInput}
                />
                    {Object.keys(nameErr).map((key)=>{
                        return <p>{nameErr[key]}</p>
                    })}
                <Email reference={emailInput} func={setEmail} />
                    {Object.keys(emailErr).map((key)=>{
                        return <p>{emailErr[key]}</p>
                    })}
                <Bio reference={bioInput} func={setBio}/>
                    {Object.keys(bioErr).map((key)=>{
                        return <p>{bioErr[key]}</p>
                    })}
                <Gender func={genderChange} reference={genderInfo} check={gender}/>
                    {Object.keys(genderErr).map((key)=>{
                        return <p>{genderErr[key]}</p>
                    })}
                <div style={style.checkbox} checked={regulations} ref={regulationsInfo} onChange={regChange}>
                    <input type="checkbox"  />
                    <label htmlFor="regulations" >Accept the regulations</label>
                </div>
                    {Object.keys(regulationsErr).map((key)=>{
                        return <p>{regulationsErr[key]}</p>
                    })}
                <div style={style.subBtn}>
                    <button type="submit" onClick={checkError} style={style.btn}>Send</button>
                </div>
            </form>
            <div>{success ? <h5>{success}</h5> : ""}</div>
        </div>
    )

}

export default Form;