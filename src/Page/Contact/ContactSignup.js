import react from 'react';
import useContact from './useContact';
import validate from './validateInfo'
import './Contact.css'

const ContactSignup = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useContact(submitForm, validate);
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Welcome to the contact us page. You can create your account by signing up below</h1>
                <div className='form-inputs'>
                    <label htmlFor='username' className='form-label'>
                        Username
                    </label>
                    <Input
                        id='username'
                        type='text'
                        name='username'
                        className='form-input'
                        placeholder='Enter your username'
                        value={values.username}
                        onChange={handleChange} />
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>
                        Email
                    </label>
                    <Input
                        id='email'
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'>
                        Password
                    </label>
                    <Input
                        id='password'
                        type='password'
                        name='password'
                        className='form-input'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange} />
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='password2' className='form-label'>
                        Confirm Password
                    </label>
                    <Input
                        id='password2'
                        type='password'
                        name='password2'
                        className='form-input'
                        placeholder='Enter your password2'
                        value={values.password2}
                        onChange={handleChange} />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>

                <form>
                    <div>
                        <label>Female</label>
                        <input type="radio" name="gender" value="female" />

                        <label>Male</label>
                        <input type="radio" name="gender" value="male" />
                    </div>

                    <div>
                        <input type="checkbox" />
                        <label>Do you agree with this?</label>
                    </div>

                    <select>
                        <option value="Apple">Apple</option>
                        <option value="Banana">Banana</option>
                        <option selected value="mango">Mango</option>
                        <option value="Peach">Peach</option>
                    </select>
                    <p> Gender: {formData.gender}</p>
                </form>

                <button className="form-input-btn" type="submit">
                    Sign up
                </button>
                <span className="span.form-input-login">
                    Do you already have an account? Then, login! <a href="#"></a>
                </span>
            </form>
        </div>
    );
};