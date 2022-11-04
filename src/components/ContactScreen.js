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
    <form>
        <>
        <label>First Name
            <input
                id='first_name'
                type='text'
                placeholder='Enter your first name'
                name='firstname'
                onChange={handleChange}
                value={formData.firstname}
            />
        </label>
        <label>Last Name
            <input
                id='last_name'
                type='text'
                placeholder='Enter your last name'
                name='lastname'
                onChange={handleChange}
                value={formData.lastname}
            />
        </label>
        </>
        <label>Email
            <input
                id='email'
                type='email'
                placeholder='yourname@email.com'
                name='email'
                onChange={handleChange}
                value={formData.email}
            />
        </label>
        <textarea
            id='message'
            onChange={handleChange}
            name='comments'
            value={formData.comments} 
            placeholder='Send a message and i will reply as soon as possible'
        />
        <label htmlFor='message'>Message</label>
        <input 
            id='checkbox'
            type='checkbox'
            checked={formData.checkbox}
            onChange={handleChange}
            name='checkbox'
        />
        <label htmlFor='checkbox'>You agree to provide your data to nnaemeka_san who may contact you</label>
        <button id='btn_submit'>Send message</button>
    </form>
  )
}

export default ContactScreen