import React from 'react'
import {Form , Field } from "formik"
import './ContactForm.css'
export default function ContactForm(errors, touched) {
  console.log(errors)
  return (
    <div>
      <h1> ContactForm </h1>
      <div className='container'>

<Form>
<div  className="mb-3 mt-3">
  <label className="form-label"> name </label>
  <Field type="text" className={touched.name ? `form-control  ${errors.errors.name ? "invalid" :"valid"}` :`form-control`} name="name"/>
  <small className="text-danger">{errors.errors.name} </small>
  <small> {touched.className} </small>
  </div>
    
  
  <div className='mb-3 mt-3'>
  <label className='form-label'> Age </label>
  <Field type="number" className={touched.age ? `form-control ${errors.errors.age ? "invalid" : "valid"}` :`form-control`}  name="age"/>
  <small className='text-danger' > {errors.errors.age} </small>
  </div>
  

  <div className='mb-3 mt-3'>
  <label className='form-label'> email </label>
  <Field type="email" className={touched.email ? `form-control ${errors.errors.email ? "invalid" : "valid"}` :`form-control`}  name="email"/>
  <small className='text-danger' > {errors.errors.email} </small>
  </div>
   

  <div className='mb-3 mt-3'>
  <label className='form-label'> phone </label>
  <Field type="text" className={touched.phone ? `form-control ${errors.errors.phone ? "invalid" : "valid"}` :`form-control`}  name="phone"/>
  <small className='text-danger' > {errors.errors.phone} </small>
  </div>
   
  <button type='submit'> Submit </button>
</Form>
</div>

    </div>
  )
}
