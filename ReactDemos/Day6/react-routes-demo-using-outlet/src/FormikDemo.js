import { Formik } from "formik"
import Contact from "./Contact"
function FormikDemo()
{
  return(
    <div>
     <Formik 
      initialValues ={{
          username:""
        }
      }
      onSubmit={(value) => {
      console.log(value)
    }} component={Contact}/>
    </div>
  )
}

export default FormikDemo;