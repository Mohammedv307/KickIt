import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        email: '',
        phone: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            if (!formData[key]) {
                newErrors[key] = 'This field is required';
            }
        });
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setSubmitted(true);
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
    };

    const handleReturnHome = () => {
        navigate('/');
    };

    return (
        <div className="signup-container">
            {submitted ? (
                <div className="success-message">
                    Sign up successful! Redirecting to the homepage...
                </div>
            ) : (
                <form className="signup-form" onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? 'error' : ''}
                            required
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            placeholder="Enter age"
                            value={formData.age}
                            onChange={handleChange}
                            className={errors.age ? 'error' : ''}
                            required
                        />
                        {errors.age && <span className="error-message">{errors.age}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="level">Level:</label>
                        <select
                            id="level"
                            name="level"
                            value={formData.level}
                            onChange={handleChange}
                            className={errors.level ? 'error' : ''}
                            required
                        >
                            <option value="">Select Level</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Amateur">Amateur</option>
                            <option value="Semi-Pro">Semi-Pro</option>
                            <option value="Professional">Professional</option>
                        </select>
                        {errors.level && <span className="error-message">{errors.level}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender:</label>
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className={errors.gender ? 'error' : ''}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <span className="error-message">{errors.gender}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="someone@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'error' : ''}
                            required
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="123-456-789"
                            value={formData.phone}
                            onChange={handleChange}
                            className={errors.phone ? 'error' : ''}
                            required
                        />
                        {errors.phone && <span className="error-message">{errors.phone}</span>}
                    </div>
                    <button type="submit" className="submit-button">Sign Up</button>
                    <button type="button" className="home-button" onClick={handleReturnHome}>Return to Home</button>
                    {Object.keys(errors).length > 0 && <div className="error-summary">All fields require input.</div>}
                </form>
            )}
        </div>
    );
};

export default SignUp;
