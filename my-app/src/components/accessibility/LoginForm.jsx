import { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-bold" id="login-title">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-2" aria-labelledby="login-title">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Enter username"
          className="border p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          aria-required="true"
        />
        
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter password"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-required="true"
        />
        
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
          aria-label="Submit login form"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
