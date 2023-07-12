import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  // Password character error checking
  const getCharacterValidationError = (str) => {
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
          const { accessToken, refreshToken } = response.data;
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          navigate('../PayTracker');
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className='bg-gears bg-cover h-screen'>
      <div className="flex items-center justify-center">
        <form className="flex flex-col m-10 items-center justify-center border rounded-md" name="loginForm" id="loginForm" action="post" onSubmit={formik.handleSubmit}>
          <label className="p-2 m-2 border text-xl font-semibold min-w-full text-center" htmlFor="loginForm">Login</label>
          <label className="p-2 m-2" htmlFor="email">Email</label>
          <input className="p-2 m-2" onChange={formik.handleChange} value={formik.values.email} title="email" placeholder="Enter Your Email" type="email" name="email" id="email" />
          <label className="p-2 m-2" htmlFor="password">Password</label>
          <input className="p-2 m-2" onChange={formik.handleChange} value={formik.values.password} title="password" placeholder="Enter Your Password" type="password" name="password" id="password" />
          <button className="p-2 m-2 bg-green-400" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
