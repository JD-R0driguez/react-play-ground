import React from "react"
import './styles.css'

export default function App() {

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        passwordCheck: "",
        joinNewsLetter: true

    })
    
    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevData => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    
    function handleSubmit(event) {
        event.preventDefault()
        let message = ""
        const doPasswordMatch = formData.password === formData.passwordCheck ? true : false
        if (doPasswordMatch) {
            message = "Successfully signed up!"
            const newsMessage = formData.joinNewsLetter ? "Thanks for signing up for our newsletter!" : ""  
            message =  message + " " + newsMessage     
        }else message = "Passwords do not match"
        
        console.log(message)
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form-input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form-input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form-input"
                    name="passwordCheck"
                    onChange={handleChange}
                    value={formData.passwordCheck}
                />
                
                <div className="form-marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="joinNewsLetter"
                        onChange={handleChange}
                        checked={formData.joinNewsLetter}
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form-submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
