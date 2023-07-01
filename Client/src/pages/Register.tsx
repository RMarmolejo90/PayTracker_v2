import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Register() {
    
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
            const response = await axios.post("http://localhost:3000/Register", values);
            console.log(response.data);
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
        <form action="POST" method="post" onSubmit={formik.handleSubmit}>
            <input onChange={formik.handleChange} value={formik.values.firstName} placeholder='First Name' type="text" name="firstName" id="firstName" />
            <input onChange={formik.handleChange} value={formik.values.lastName} placeholder='Last Name' type="text" name="lastName" id="lastName" />
            <input onChange={formik.handleChange} value={formik.values.email} placeholder='Email' type="email" name="email" id="email" />
            <input onChange={formik.handleChange} value={formik.values.password} placeholder='Password' type="password" name="password" id="password" />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
