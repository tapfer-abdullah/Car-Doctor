/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../SharedPages/Header";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "./AuthPorvider";

const Register = () => {
  const [error, setError] = useState("");

  const { Register } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.confirmPassword.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(email, password, confirmPassword);

    Register(email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div>
      <Header></Header>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-16">
          <div className="text-center lg:text-left">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body p-16">
              <h3 className="text-3xl font-semibold mb-10 text-center">
                Please Register
              </h3>
              {error && (
                <p className="text-my-primary text-base font-semibold my-4 text-center">{error}</p>
              )}
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Enter your email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Enter your password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Enter your password</span>
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn bg-my-primary border-my-primary hover:bg-white hover:text-my-primary"
                    value="Sing Up"
                  />
                  <p className="mt-6">
                    Already have an account?
                    <Link
                      to="/login"
                      className="label-text-alt link link-hover text-base ml-2 text-my-primary"
                    >
                      Sing In
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
