import { useState } from "react"

export const AutoForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState()

    const handleChange = (key, value) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }))
    }

    const handleSubmit = () => {
        if (formData.email && formData.password) {
            console.log(formData);
        } else if (!formData.email) {
            setErrors({
                email: "This field required",
            })
        } else if (!formData.password) {
            setErrors({
                password: "This field required",
            })
        }
    }

    return (
        <div >
            <input type="text" value={formData.email}  onChange={(e) => handleChange('email', e.target.value)}/>
            <input type="text" value={formData.password}  onChange={(e) => handleChange('password', e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
            <p>{errors?.email}</p>
            <p>{errors?.password}</p>
        </div>
    )
}