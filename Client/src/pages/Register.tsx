import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const navigate = useNavigate();
    //password character error checking
    const getCharacterValidationError = (str: string) => {
        return `Your password must have at least 1 ${str} character`;
      };

     // Yup Validation
     const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        lastName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
        .min(10, 'Too Short')
        .required('Required')
        .matches(/[0-9]/, getCharacterValidationError("digit"))
        .matches(/[a-z]/, getCharacterValidationError("lowercase"))
        .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
      });
      

   
    const formik = useFormik({
        initialValues:{
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    },
    validationSchema: SignupSchema,
    onSubmit: async values => {
        try {
            // Send a POST request to the API endpoint
            const response = await axios.post("https://paytrack-backend.onrender.com/register", values);
            const responseStatus = response.status;
            const responseData = response.data;
             // Add this line to get the response data

           
            if (responseStatus === 201) {
              localStorage.setItem('userEmail', responseData.email);
              navigate('../PayTracker');
            } else {
              throw Error('There was an error with registration');
            }
        } catch (error:any) {
          if (error.response.status === 409){
            console.log('user already exists');
            alert('This email is already registered');
            navigate('../Login');
          } 
        }
    },});
    

  return (
    <div className=''>
        <div className="flex items-center justify-center">
        <form name='registerForm' className="bg-secondary-gradient border border-slate-950 flex-col flex items-center justify-center m-10 rounded-md" onSubmit={formik.handleSubmit}>
          <label className="p-4 mb-2 bg-gray-900 rounded-t-md text-2xl min-w-full text-center text-slate-300" htmlFor="registerForm">Create Your Account</label>
            <input className='p-2 m-2 rounded-md' onChange={formik.handleChange} value={formik.values.firstName} placeholder='First Name' type="text" name="firstName" id="firstName" />
            <input className='p-2 m-2 rounded-md' onChange={formik.handleChange} value={formik.values.lastName} placeholder='Last Name' type="text" name="lastName" id="lastName" />
            <input className='p-2 m-2 rounded-md' onChange={formik.handleChange} value={formik.values.email} placeholder='Email' type="email" name="email" id="email" />
            <input className='p-2 m-2 rounded-md' onChange={formik.handleChange} value={formik.values.password} placeholder='Password' type="password" name="password" id="password" />
            <button className='p-1 px-6 m-4 bg-green-500 tracking-wider rounded-md' type="submit">Submit</button>
        </form>
        </div>
    </div>
  )
}
