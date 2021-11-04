import React, { Component } from "react";

import style from '../utils/style';

class ClassForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            bio: null,
            gender: null,
            regulations: null,
            message: null
        };
    }

    validate = () => {
        let emailErr = '';
        let nameErr = '';
        let bioErr = '';
        let genderErr = '';
        let regulationsErr = ''

        if(!this.state.name){
            nameErr = 'invalid name'
        }
        if(!this.state.email) {
            emailErr = 'invalid email'
        }
         if(!this.state.bio) {
            bioErr = 'invalid bio'
        }
        if(!this.state.gender) {
            genderErr = 'invalid gender'
        }
        if(!this.state.regulations) {
            regulationsErr = 'invalid regulations'
        }
        if(nameErr || emailErr || bioErr || genderErr || regulationsErr ){
            this.setState({ nameErr, emailErr, bioErr, genderErr, regulationsErr });
            return false
        }
        return true;
    }

    handelSubmit = (event) => {
        event.preventDefault();
        const isValidate = this.validate();
        let submitMsg = ''
        if(isValidate && (this.state.message === null)){
            submitMsg = 'Thanks for sending your form!'
            if(submitMsg)
                this.setState({ submitMsg })
                event.target.reset()
        }
    }

    handleChange = (event) => {
        const elemValue = event.target.value;
        const keyName = event.target.name;
        this.setState({ [keyName] : elemValue})
    }

    render() {
        return(
            <div style={style.form}>
                <form onSubmit={this.handelSubmit}>
                    <div style={style.inputStyle}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            style={style.radius}
                        />
                    </div>
                    <span style={style.messageErr}>{this.state.nameErr}</span>

                    <div style={style.inputStyle}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                            style={style.radius}
                        />
                    </div>
                    <span style={style.messageErr}>{this.state.emailErr}</span>

                    <div style={style.inputStyle}>
                         <label htmlFor="bio">Bio</label>
                        <textarea
                            name="bio"
                            onChange={this.handleChange}
                            style={style.textarea}
                        />
                    </div>
                    <span style={style.messageErr}>{this.state.bioErr}</span>

                    <div style={style.inputStyle}>
                        <form  onChange={this.handleChange} >
                            <label htmlFor="female">Female</label>
                            <input
                                type="radio"
                                value="Female"
                                id="female"
                                name="gender"
                            />

                            <label htmlFor="male">Male</label>
                            <input
                                type="radio"
                                value="Male"
                                id="male"
                                name="gender"
                            />

                            <label htmlFor="other">Other</label>
                            <input
                                type="radio"
                                value="Other"
                                id="other"
                                name="gender"
                            />
                        </form>
                    </div>
                    <span style={style.messageErr}>{this.state.genderErr}</span>

                    <div style={style.checkbox}>
                        <input
                            type="checkbox"
                            name="regulations"
                            onChange={this.handleChange}
                            checked={this.regulations}
                        />
                        <label htmlFor="regulations" >Accept the regulations</label>
                    </div>
                    <span style={style.messageErr}>{this.state.regulationsErr}</span>

                    <div style={style.subBtn}>
                        <button type="submit" style={style.btn}>Send</button>
                    </div>
                    <h4>{this.state.submitMsg}</h4>
                </form>
            </div>
        )
    }
}

export default ClassForm;