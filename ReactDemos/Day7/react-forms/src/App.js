import React from 'react'
import {Formik,  Form , Field, FieldArray } from "formik";
const App = () => {
  return (
    <div>
<Formik
     initialValues={{
      name:"" , 
      phone:"" ,
      password:"" , 
      gender:"", 
      date:"", 
      state:"",
      comments:"",
      socialAccount: 
      {
           facebook:"",
           twitter:"",
          
       }
       
      }}
     onSubmit= {values=>
    {
      console.log(values)
    }}
     >
      {({values}) => (
        <Form> 
    
        <label> Name </label>
        <Field type="text" name="name"/>
        <br/> <br/>
        <label> Phone Number  </label>
        <Field type="text" name="phone"/>
        <br/> <br/>
        <label> Password  </label>
        <Field type="password" name="password"/>
        <br/> <br/>
        <label> Gender  </label>
        <label> Male  </label>
        <Field type="radio" value="male" name="gender"/>
        <label> Female  </label>
        <Field type="radio" value="female" name="gender"/>
        <br/> <br/>
        <label> Date of Joining  </label>
        <Field type="date" name="date"/>
        <br/> <br/>
        <label> City  </label>
        <Field as="select" name="state">
          <option value="0"> Delhi </option>
          <option value="1"> HP </option>
          <option value="2"> MP </option>
          <option value="3"> Haryana </option>
          </Field>
          <br/> <br/>
          <label> Enter Comments  </label>
        <Field  as="textarea" name="comments" rows="10" columns="20"/>
      
        <br/> <br/>
        <label> Social Account Details </label>
        <br/> <br/>
        <label> Facebook </label>
        <Field name="socialAccount.facebook" type="text"></Field>
        <label> Twiiter </label>
        
        <Field name="socialAccount.twitter" type="text"></Field>
        <br/> <br/>
        
        <FieldArray
                 name="friends"
                 render={arrayHelpers => (
                   <div>
                     {values.friends && values.friends.length > 0 ? (
                       values.friends.map((friend, index) => (
                       
                         <div key={index}>
                           <Field name={`friends.${index}`} />
                           <button
                             type="button"
                             onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                           >
                             -
                           </button>
                           <button
                             type="button"
                             onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                           >
                             +
                           </button>
                         </div>
                       ))
                     ) : (
                       <button type="button" onClick={() => arrayHelpers.push('')}>
                         {/* show this when user has removed all friends from the list */}
                         Add a friend
                       </button>
                     )}
                      <div>
                       <button type="submit">Submit</button>
                     </div>
                   </div>
                 )}
               />
        <button type='submit'> Submit </button>
      </Form>
      )}
  
</Formik>

    </div>
  )
}

export default App