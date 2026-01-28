import {useState} from 'react'

const  SimpleForm = () => {
    // const [name,setName] = useState('')
    // const [email,setEmail] = useState('')
    const [formData, setFormData] = useState({name: "", email: ""})

    const handleSubmit = (event) => {
        console.log(event);
        alert("Submitted");
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        console.log(event.target)
        setFormData({...formData, [name]:value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name:</label>
                {/*Controlled Components */}
                <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} />
                <br></br>
                <label htmlFor='email'>Email:</label>
                <input type='text' id='email' name='email' value={formData.email} onChange={handleChange} />
                <br></br>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default SimpleForm;