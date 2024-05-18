import { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        age: "",
        gender: "",
        interests: [],
        birthDate: ""
    })
    const [errors, setErrors] = useState();
    const isValidEmail = (email) => {
        // Regular expression for basic email validation
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
    };

    const isValidPhoneNumber = (phoneNumber) => {
        // Regular expression for basic phone number validation (10 digits)
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
    };

    const isValidPassword = (password) => {
        // Regular expressions for password validation
        const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
        const numberRegex = /[0-9]/;
        const upperCaseRegex = /[A-Z]/;
        const lowerCaseRegex = /[a-z]/;
        return (
            password.length >= 8 &&
            symbolRegex.test(password) &&
            numberRegex.test(password) &&
            upperCaseRegex.test(password) &&
            lowerCaseRegex.test(password)
        );
    };

    const isValidAge = (age) => {
        return parseInt(age) >= 18 && parseInt(age) <= 100;
    };
    const validateform = () => {
        let newErrors = {};
        if (!formData.firstName) {
            newErrors.firstName = "First name is required";
        }
        if (!formData.lastName) {
            newErrors.lastName = "Last name is required";
        }
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.phoneNumber) {
            newErrors.phoneNumber = "Phone number is required";
        } else if (!isValidPhoneNumber(formData.phoneNumber)) {
            newErrors.phoneNumber = "Phone number must be 10 digits";
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (!isValidPassword(formData.password)) {
            newErrors.password =
                "Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase letter, and one lowercase letter";
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Confirm password is required";
        } else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "Passwords must match";
        }
        if (!formData.age) {
            newErrors.age = "Age is required";
        } else if (!isValidAge(formData.age)) {
            newErrors.age =
                "You must be at least 18 years old and not older than 100 years";
        }
        if (!formData.gender) {
            newErrors.gender = "Gender is required";
        }
        if (formData.interests.length === 0) {
            newErrors.interests = "Select at least one interest";
        }
        if (!formData.birthDate) {
            newErrors.birthDate = "Date of birth is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const isvalid = validateform();
        if (isvalid) console.log("form submitted " + formData);
        else console.log("form validation failed")
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(f => ({ ...f, [name]: value }))
    }
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        let updatedInterest = [...formData.interests];
        if (checked) {
            updatedInterest.push(name);
        }
        else {
            updatedInterest = updatedInterest.filter(interest => interest != name);
        }
        setFormData(f => ({ ...formData, interests: updatedInterest }))
        console.log(formData)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First name</label>
                <input type="text" name="firstName" value={formData.firstName}
                    placeholder="Enter your first name" onChange={handleChange} autoComplete="off" />
                {errors && errors.firstName && <div className="error">{errors.firstName}</div>}
            </div>
            <div>
                <label>Last name</label>
                <input type="text" autoComplete="off" name="lastName" value={formData.lastName} placeholder="Enter your last name" onChange={handleChange} />
                {errors && errors.lastName && <div className="error">{errors.lastName}</div>}
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={formData.email}
                    placeholder="Enter your email" onChange={handleChange} />
                {errors && errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div>
                <label>Phone number</label>
                <input type="text" name="phoneNumber" value={formData.phoneNumber}
                    placeholder="Enter your phone number" onChange={handleChange} />
                {errors && errors.phoneNumber && (
                    <div className="error">{errors.phoneNumber}</div>
                )}
            </div>
            <div>
                <label>password</label>
                <input type="password" name="password" value={formData.password}
                    placeholder="Enter your password" onChange={handleChange} />
                {errors && errors.password && <div className="error">{errors.password}</div>}
            </div>
            <div>
                <label>Confirm password</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword}
                    placeholder="Confirm your password" onChange={handleChange} />
                {errors && errors.confirmPassword && (
                    <div className="error">{errors.confirmPassword}</div>
                )}
            </div>
            <div>
                <label>Age</label>
                <input type="number" name="age" value={formData.age}
                    placeholder="Enter your age" onChange={handleChange} />
                {errors && errors.age && <div className="error">{errors.age}</div>}
            </div>

            <div>
                <label>Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </select>
                {errors && errors.gender && <div className="error">{errors.gender}</div>}
            </div>
            <div>
                <label>Interests:</label>
                <label>
                    <input type="checkbox" name="coding"
                        checked={formData.interests.includes("coding")} onChange={handleCheckboxChange} /> Coding
                </label>
                <label>
                    <input type="checkbox" name="sports"
                        checked={formData.interests.includes("sports")} onChange={handleCheckboxChange} /> Sports
                </label>
                <label>
                    <input type="checkbox" name="reading"
                        checked={formData.interests.includes("reading")} onChange={handleCheckboxChange} /> Coding
                </label>
                {errors && errors.interests && <div className="error">{errors.interests}</div>}
            </div>
            <div>
                <label>Date of birth</label>
                <input type="date" name="birthDate" value={formData.birthDate}
                    placeholder="Enter your date of birth" onChange={handleChange} />
                {errors && errors.birthDate && <div className="error">{errors.birthDate}</div>}
            </div>
            <button type="submit">Submit</button>

        </form>
    )
}
export default Form;