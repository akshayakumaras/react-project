import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()

  return (
    <div className="login-page">

      <button
        className="back-btn"
        onClick={() => navigate("/home")}
      >
        ← Back To Home
      </button>

      <div className="login-card">

        <h1>Sign In</h1>

        <input
          type="email"
          placeholder="Enter Email"
        />

        <input
          type="password"
          placeholder="Enter Password"
        />

        <button className="login-btn" onClick={() => navigate("/home")}>
          Login
        </button>

      </div>

    </div>
  )
}

export default Login


// function Login() {
//   return (
//     <div className="page">

//       <div className="card p-4 login-card">

//         <h2 className="mb-4">
//           Sign In
//         </h2>

//         <input
//           type="text"
//           placeholder="Username"
//           className="form-control mb-3"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="form-control mb-3"
//         />

//         <button className="btn btn-primary">
//           Login
//         </button>

//       </div>

//     </div>
//   );
// }

// export default Login;


// function Login() {

//   return (
//     <div className="content">
//       <h1>Login Page</h1>
//     </div>
//   )
// }

// export default Login