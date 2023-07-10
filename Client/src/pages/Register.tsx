import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

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
            const response = await axios.post("http://localhost:3000/register", values);
            const responseData = response.data;
            if (responseData === "User already exists"){
              alert('This email is already registered');
              navigate('../Login');
            } else if (responseData === "Success") {
              navigate('../PayTracker');
            } else {
              throw Error('There was an error with registration');
            }
        } catch (error) {
        console.error(error);
        }
    },});
    
   
    // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setNewUser({ ...newUser, [e.target.name]: e.target.value });
    //   };
    
    //   const submit = async (e:FormEvent) => {
    //     e.preventDefault();
    
    //     try {
    //       // Send a POST request to the API endpoint
    //       const response = await axios.post("http://localhost:3000/register", newUser);
    //       console.log(response.data); // Optional: Log the response
    
    //       // Reset the form after successful registration
    //       setNewUser({
    //         firstName: '',
    //         lastName: '',
    //         email: '',
    //         password: '',
    //       });
    //     } catch (error) {
    //       console.error(error);
    //       }
    //   };
    

  return (
    <div>
        <Navbar />
        <form onSubmit={formik.handleSubmit}>
            <input onChange={formik.handleChange} value={formik.values.firstName} placeholder='First Name' type="text" name="firstName" id="firstName" />
            <input onChange={formik.handleChange} value={formik.values.lastName} placeholder='Last Name' type="text" name="lastName" id="lastName" />
            <input onChange={formik.handleChange} value={formik.values.email} placeholder='Email' type="email" name="email" id="email" />
            <input onChange={formik.handleChange} value={formik.values.password} placeholder='Password' type="password" name="password" id="password" />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
