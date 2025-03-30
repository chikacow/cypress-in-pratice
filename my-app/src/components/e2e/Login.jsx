import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username === "admin" && password === "password") {
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      setError("Invalid credentials"); // Show error message
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-bold">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-2 flex flex-col">
        <input
          type="text"
          placeholder="Username"
          className="border p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Login
        </button>
        {error && <p className="text-red-500">{error}</p>} {/* Error message */}
      </form>
    </div>
  );
};

export default Login;



// import { useState } from "react";

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username === "admin" && password === "password") {
//       onLogin(true);
//     } else {
//       onLogin(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center space-y-4">
//       <h2 className="text-xl font-bold">Login</h2>
//       <form onSubmit={handleSubmit} className="space-y-2">
//         <input
//           type="text"
//           placeholder="Username"
//           className="border p-2 rounded"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="border p-2 rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-500 text-white rounded"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
