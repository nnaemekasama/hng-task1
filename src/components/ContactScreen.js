import React from 'react'

const ContactScreen = () => {

const [formData, setFormData] = React.useState({
    firstname:'',
    lastname:'',
    email:'',
    comments:'',
    checkbox: true,
})

console.log(formData)

const handleChange = (event) => {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
        }
})
}

  return (

    <div className='contact-container'>
        <h2>Contact Me</h2>
        <p>Hi there contact me to ask me anything you have in mind</p>

        <form className='form-container'>
            <div className='names'>
            <label className='name'>
                <p>First Name</p>
                <input
                    id='first_name'
                    type='text'
                    placeholder='Enter your first name'
                    name='firstname'
                    onChange={handleChange}
                    value={formData.firstname}
                />
            </label>
            <label className='lastname'>
                <p>Last Name</p>
                <input
                    id='last_name'
                    type='text'
                    placeholder='Enter your last name'
                    name='lastname'
                    onChange={handleChange}
                    value={formData.lastname}
                />
            </label>
            </div>
            <label className='email'>
                <p>Email</p>
                <input
                    id='email'
                    type='email'
                    placeholder='yourname@email.com'
                    name='email'
                    onChange={handleChange}
                    value={formData.email}
                />
            </label>
            <label className='message'>
                <p>Message</p>
            <textarea
                id='message'
                onChange={handleChange}
                name='comments'
                value={formData.comments} 
                placeholder='Send a message and i will reply as soon as possible'
            />
            </label>
            <label className='check'>
            <input 
                id='checkbox'
                type='checkbox'
                checked={formData.checkbox}
                onChange={handleChange}
                name='checkbox'
            />  
            <p>You agree to provide your data to nnaemeka_san who may contact you</p>
            </label>
            <button className='contact-btn' id='btn_submit'>Send message</button>
        </form>
    </div>
  )
}

export default ContactScreen