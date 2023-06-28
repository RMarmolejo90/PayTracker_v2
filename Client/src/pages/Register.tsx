import { FormEvent, ChangeEvent, useState } from 'react'
import axios from 'axios';

export default function Register() {
    const [newUser, setNewUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
      };
    
      const submit = async (e:FormEvent) => {
        e.preventDefault();
    
        try {
          // Send a POST request to the API endpoint
          const response = await axios.post("http://localhost:3000/register", newUser);
          console.log(response.data); // Optional: Log the response
    
          // Reset the form after successful registration
          setNewUser({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          });
        } catch (error) {
          console.error(error);
          // Handle error response if needed
        }
      };
    

  return (
    <div>
        <form action="POST" method="post" onSubmit={submit}>
            <input onChange={handleChange} placeholder='First Name' type="text" name="firstName" id="firstName" />
            <input onChange={handleChange} placeholder='Last Name' type="text" name="lastName" id="lastName" />
            <input onChange={handleChange} placeholder='Email' type="email" name="email" id="email" />
            <input onChange={handleChange} placeholder='Password' type="password" name="password" id="password" />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
