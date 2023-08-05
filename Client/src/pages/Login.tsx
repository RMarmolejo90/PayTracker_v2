import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useAuthContext } from '../utils/useAuthContext';

export default function Login() {

  const {login} = useAuthContext();
  const navigate = useNavigate();

  // Password character error checking
  const getCharacterValidationError = (str:string) => {
    return `Your password must have at least 1 ${str} character`;
  };

  // Yup Validation
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(10, 'Too Short')
      .required('Required')
      .matches(/[0-9]/, getCharacterValidationError("digit"))
      .matches(/[a-z]/, getCharacterValidationError("lowercase"))
      .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      try {
        // Send a POST request to the API endpoint
        const response = await axios.post("http://localhost:3000/login", values);

        if (response.status === 401) {
          // Invalid credentials, display an error message
          alert('Invalid email or password');
        } else {
          // Valid credentials, save the tokens and navigate to the PayTracker page
          const token = response.data.token;
          // Access the token payload
          const tokenPayload = token.split('.')[1];

          // Convert the payload to a JSON string and parse
          const decodedPayload = JSON.parse(atob(tokenPayload));

          // Access the userId property from the decoded payload
          const userId = decodedPayload.userId;

          localStorage.setItem("Token", token);
          localStorage.setItem("UserId", userId);
          login();

          // navigate to PayTracker
          navigate('../PayTracker');
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className=''>
      <div className="flex items-center justify-center">
        <form className="bg-secondary-gradient border border-slate-950 flex flex-col text-slate-300 items-center justify-between rounded-md pb-6 m-10 w-60 min-h-96" name="loginForm" id="loginForm" action="post" onSubmit={formik.handleSubmit}>
            <label className="p-2 px-4 mb-2 bg-gray-900 rounded-t-md text-2xl min-w-full text-center" htmlFor="loginForm">Login</label>

            <label className="p-2 px-4 m-2 text-lg" htmlFor="email">Email</label>

            <input className="p-2 px-4 m-2 rounded-md" onChange={formik.handleChange} value={formik.values.email} title="email" placeholder="Enter Your Email" type="email" name="email" id="email" />

            <label className="p-2 px-4 m-2 text-lg" htmlFor="password">Password</label>

            <input className="p-2 px-4 m-2 rounded-md" onChange={formik.handleChange} value={formik.values.password} title="password" placeholder="Enter Your Password" type="password" name="password" id="password" />

            <button className="p-1 px-6 m-4 rounded-md bg-green-500 tracking-wider text-slate-950" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
