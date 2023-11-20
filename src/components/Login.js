import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Resetting errors when the user starts typing again
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    let valid = true;
    const { email, password } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      setErrors({
        ...errors,
        email: "Please enter a valid email address",
      });
      valid = false;
    }

    if (!password || password.length < 6) {
      setErrors({
        ...errors,
        password: "Password must be at least 6 characters long",
      });
      valid = false;
    }

    if (valid) {
      // Simulate successful login
      // For demonstration purposes, i am using a timeout to mimic a server request
      setTimeout(() => {
        console.log("Form submitted with:", formData);
        // Reset form after successful submission
        setFormData({
          email: "",
          password: "",
        });
        // Redirect to the CoinListPage upon successful login
        navigate("/coin-list");
      }, 1000); //
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 py-8 w-80">
        <h2 className="text-2xl font-semibold mb-6 text-purple-700 underline">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email && "border-red-500"
              }`}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password && "border-red-500"
              }`}
              required
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            )}
          </div>
          <div className="mb-6 text-blue-500">
            <button
              type="button"
              className="text-xs text-purple-600 hover:underline focus:outline-none"
            >
              Reset Password
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-4 text-xs font-light text-center text-gray-700">
          Don't have an account?{" "}
          <button
            type="button"
            className="font-medium text-purple-600 hover:underline focus:outline-none"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
