import React from 'react'
import {Formik} from "formik"
import ContactForm from './ContactForm'
import * as yup from "yup";
export default function App1() {
  
  const UserSchema = yup.object().shape(
  {
    name :yup.string().required('Name is must').min(5, "Min 5 characters are needed").max(20, "Max 20 characters"),
    age:yup.number().typeError("Must be integer").required("Age is required").min(18, "Min 18 is needed").max(30,"Max 30"),
  email: yup.string().email("This is not correct format")
, phone:yup.string()
//.matches("^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$")

  })
  
  return (
    <div>
     
     <Formik 
     initialValues={{name:"", age:0, email:"",phone:""}}
     validationSchema={UserSchema}
       onSubmit= {(values=>
      {
        console.log(values)
       })}
     
     component={ContactForm}/>

    </div>
  )
}
