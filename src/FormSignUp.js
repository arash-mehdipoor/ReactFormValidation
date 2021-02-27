import React from 'react'
import useForm from './useForm';
import ValidationInfo from './ValidationInfo'
const FormSignUp = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(submitForm, ValidationInfo);
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>lorem ipsum</h1>
                <div className="form-inputs">
                    <label className='form-label' htmlFor="username">username</label>
                    <input type="text" onChange={handleChange}
                        value={values.username}
                        name="username" id="username" className="form-input" placeholder="Enter your username" />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label className='form-label' htmlFor="Email">Email</label>
                    <input type="email"
                        onChange={handleChange}
                        value={values.email}
                        name="email" id="Email" className="form-input" placeholder="Enter your email" />
                    {errors.email && <p>errors.email</p>}
                </div>
                <div className="form-inputs">
                    <label className='form-label' htmlFor="Password">Password</label>
                    <input type="Password"
                        onChange={handleChange}
                        value={values.password}
                        name="password" id="Password" className="form-input" placeholder="Enter your password" />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label className='form-label' htmlFor="Password2">Password2</label>
                    <input type="Password"
                        onChange={handleChange}
                        value={values.password2}
                        name="password2" id="Password2" className="form-input" placeholder="Enter your password2" />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn" type="submit">
                    Sign Up
                </button>
                <span className="form-input-login">Already hav an account? Login <a href="#">hear</a></span>
            </form>
        </div>
    )
}

export default FormSignUp
