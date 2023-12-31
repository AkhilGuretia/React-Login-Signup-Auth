import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post("http://localhost:8080/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>

        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              autoComplete="off"
              name="name"
              className="form-control rounded-0"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              name="email"
              className="form-control rounded 0"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
        </form>

        <p className="text-center">Already have an Account?</p>
        <Link
          to="/login"
          type="submit"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
