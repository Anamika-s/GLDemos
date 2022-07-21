import {Form , Field} from "formik";
function Contact()
{
  return(
     <form>
      <div className="form-group">
      <label  className="form-label"> name </label>
      <Field type="text" className="form-control"/> 
    
      </div>
      <button type="submit" className="btn btn-primary"> Submit </button>
      </form>
  )
}

export default Contact;