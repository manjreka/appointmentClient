import { Component } from 'react'
import React from 'react'

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import './index.css'

import { Link } from 'react-router-dom/cjs/react-router-dom';

class Register extends Component {
    state = {
        email: '', password: '', confirmPassword: '', emailErrMsg: false,
        PassErrMsg: false, cPassErrMsg: false, showPassword: false, showConfirmPass: false
    }

    onChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    onChangePassword = (event) => {
        this.setState({ password: event.target.value })
    }

    onChangeConfPassword = (event) => {
        this.setState({ confirmPassword: event.target.value })
    }

    submitUserDetails = async () => {
        const { email, password, confirmPassword } = this.state
        const userDetails = {
            email,
            password,
            confirmPassword
        }

        const registerUrl = 'http://localhost:3080/register'

        const registerOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userDetails)
        }

        const response = await fetch(registerUrl, registerOptions)
        if (response.status === 201) {
            alert('Registration Successfull!!')
            this.setState({ email: '', password: '', confirmPassword: '' })
        }
        else if (response.status === 401) {
            alert('Password not matching')
        }
        else if (response.status === 400) {
            alert('Email already in use, register with a different Email')
        }
        else {
            alert('Registration Error!! Try after some time!')
            this.setState({ email: '', password: '', confirmPassword: '' })
        }




    }

    submitRegistrationForm = event => {
        event.preventDefault()
        const { email, password, confirmPassword } = this.state

        // email required
        if (email === '') {
            this.setState({ emailErrMsg: true })
        }
        else {
            this.setState({ emailErrMsg: false })
        }

        // password required 
        if (password === '') {
            this.setState({ PassErrMsg: true })
        }
        else {
            this.setState({ PassErrMsg: false })
        }

        // confirm password requied
        if (confirmPassword === '') {
            this.setState({ cPassErrMsg: true })
        }
        else {
            this.setState({ cPassErrMsg: false })
        }

        if (email !== '' && password !== '' && confirmPassword !== '') {
            this.submitUserDetails()
        }
        else {
            alert('Plaese Enter all details!!')
        }

    }


    passwordToggle = () => {
        this.setState(prevstate => ({ showPassword: !prevstate.showPassword }))
    }

    confirmPasswordToggle = () => {
        this.setState(prevstate => ({ showConfirmPass: !prevstate.showConfirmPass }))
    }

    loginSpanClicked = () => {
        console.log('clicked!!')
        const { history } = this.props
        history.replace('/login')
    }


    render() {
        const { email, password, confirmPassword, emailErrMsg, PassErrMsg, cPassErrMsg, showPassword, showConfirmPass } = this.state
        return (
            <div className='main-container'>
                <form className='register-container' onSubmit={this.submitRegistrationForm}>
                    <h1 style={{ alignSelf: 'center' }} >Signup</h1>
                    <div>
                        <div style={{ border: '1px solid lightgrey' }}>
                            <input value={email} className='input' onChange={this.onChangeEmail} style={{ width: '22vw' }} type="email" placeholder='Email' />
                        </div>
                        {emailErrMsg && <p className='error-message'>*Required</p>}
                    </div>
                    <div>
                        <div className='container' >
                            <input value={password} style={{ width: '22vw' }} onChange={this.onChangePassword} className='input' type={showPassword ? 'text' : 'password'} placeholder='Password' />
                            {showPassword ? <FaEye onClick={this.passwordToggle} /> : <FaEyeSlash onClick={this.passwordToggle} />}
                        </div>
                        {PassErrMsg && <p className='error-message'>*Required</p>}
                    </div>
                    <div>
                        <div className='container' >
                            <input value={confirmPassword} className='input' onChange={this.onChangeConfPassword} style={{ width: '22vw' }} type={showConfirmPass ? 'text' : 'password'} placeholder='Confirm Password' />
                            {showConfirmPass ? <FaEye onClick={this.confirmPasswordToggle} /> : <FaEyeSlash onClick={this.confirmPasswordToggle} />}
                        </div>
                        {cPassErrMsg && <p className='error-message'>*Required</p>}
                    </div>
                    <div className='button-cont' style={{ width: '26vw' }}>
                        <button className='button' style={{ width: '26vw' }} type="submit">Signup</button>
                    </div>
                    <p style={{ alignSelf: 'center' }} >Already have an account? <span style={{ color: 'red' }} onClick={this.loginSpanClicked} >Login</span> </p>
                </form>
            </div>
        )
    }
}

export default Register