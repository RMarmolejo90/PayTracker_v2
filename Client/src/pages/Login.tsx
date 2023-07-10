import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <div className="flex items-center justify-center">
      <Navbar />
      <form className="flex flex-col m-10 items-center justify-center border rounded-md" name="loginForm" id="loginForm" action="post">
        <label className="p-2 m-2 border text-xl font-semibold min-w-full text-center" htmlFor="loginForm">Login</label>
        <label className="p-2 m-2" htmlFor="email">Email</label>
        <input className="p-2 m-2" title="email" placeholder="Enter Your Email" type="email" name="email" id="email" />
        <label className="p-2 m-2" htmlFor="password">Password</label>
        <input className="p-2 m-2" title="password" placeholder="Enter Your Password" type="password" name="password" id="password" />       
        <input className="p-2 m-2" type="submit" />
      </form>
    </div>
  )
}
