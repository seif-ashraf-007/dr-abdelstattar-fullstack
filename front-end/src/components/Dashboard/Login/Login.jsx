import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Attempting to log in with:', { username, password });

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // Check if the response is okay (status code 200-299)
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      console.log('Login successful, token:', data.token);

      // Save the token and login status to local storage
      localStorage.setItem('token', data.token); // Set JWT token in local storage
      localStorage.setItem('isLoggedIn', 'true'); // Also set logged in status

    } catch (error) {
      console.error('Error during login:', error);
      setError('Login failed: ' + error.message);
    }
  };

  return (
    <div className="px-4 mx-auto py-52 max-w-screen-2xl sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        {error && <p className="text-center text-red-500">{error}</p>}
        <>
          <h1 className="text-2xl font-bold text-center text-[#146a9e] sm:text-3xl">Dashboard Authentication</h1>
          <form onSubmit={handleLogin} className="p-4 mt-6 mb-0 space-y-4 rounded-lg shadow-lg sm:p-6 lg:p-8">
            <p className="text-lg font-medium text-center">Sign in to your account</p>

            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <div className="relative">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm pe-12"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm pe-12"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>

            <button type="submit" className="block w-full px-5 py-3 text-sm font-medium text-white bg-[#146a9e] rounded-lg hover:bg-[#2e3665] transition">
              Sign in
            </button>
          </form>
        </>
      </div>
    </div>
  );
};

export default Login;
