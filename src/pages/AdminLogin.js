import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import Navbar from '../components/Navbar';
const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admin Login:', { email, password });
  };

  return (
    <div className="relative bg-gray-900 text-white min-h-screen flex flex-col items-center p-8">
        <Navbar/>
        <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg mt-12">
        <h2 className="text-3xl font-semibold mb-4 text-center">Admin Login</h2>
        <p className="text-gray-400 text-center mb-6">Sign in to access the admin dashboard</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Email</label>
            <div className="flex items-center border border-gray-600 rounded-lg p-2 bg-gray-700">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="admin@example.com"
                className="bg-transparent outline-none flex-1"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Password</label>
            <div className="flex items-center border border-gray-600 rounded-lg p-2 bg-gray-700">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="bg-transparent outline-none flex-1"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition"
          >
            Sign In
          </button>
        </form>

        <footer className="mt-8 text-center text-gray-400">
          <p>&copy; 2025 YouTube Downloader</p>
          <div className="flex justify-center space-x-6 mt-2">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdminLogin;