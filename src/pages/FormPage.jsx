import { useState } from 'react'
import ClassComponent from '../components/ClassComponent'

const FormPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit clicked')
    console.log('state values are ---->', formData)
  }
  return (
    <div>
      Form
      <form className='mt-10'>
        <label htmlFor=''>First Name</label>
        <input
          type='text'
          name='firstName'
          value={formData.firstName}
          required
          onChange={(e) => {
            setFormData({ ...formData, firstName: e.target.value })
          }}
        />
        <br />
        <label htmlFor=''>Last Name</label>
        <input
          type='text'
          name='lastName'
          value={formData.lastName}
          onChange={(e) => {
            setFormData({ ...formData, lastName: e.target.value })
          }}
        />
        <br />
        <label htmlFor=''>Age</label>
        <input
          type='number'
          name='age'
          value={formData.age}
          onChange={(e) => {
            setFormData({ ...formData, age: e.target.value })
          }}
        />
        <br />
        <label htmlFor=''>Email</label>
        <input
          type='email'
          name='firstName'
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value })
          }}
        />
        <br />
        <button
          className='border border-black px-6 py-3 rounded-sm'
          onClick={(event) => {
            handleSubmit(event)
          }}
        >
          Submit
        </button>
      </form>
      <ClassComponent />
    </div>
  )
}

export default FormPage

