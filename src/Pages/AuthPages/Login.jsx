/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../SharedPages/Header";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "./AuthPorvider";
import Divider from "../SharedPages/divider";

const Login = () => {
  const [error, setError] = useState("");
  const { Login, LoginWGoogle, LoginWGithub } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location)

  let from = location.state?.from?.pathname || "/";
  // console.log(from)

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    Login(email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleGoogleSingin = ()=>{
    LoginWGoogle()
    .then(result => console.log(result.user))
    .catch(error => console.log(error));
  }

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
                Please Log in
              </h3>
              {error && (
                <p className="text-my-primary text-base font-semibold my-4 text-center">
                  {error}
                </p>
              )}
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
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
                    placeholder="password"
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
                    value="Sing In"
                  />
                  <p className="mt-6">
                    Don't have an account?
                    <Link
                      to="/register"
                      className="label-text-alt link link-hover text-base ml-2 text-my-primary"
                    >
                      Sing Up
                    </Link>
                  </p>
                  <Divider></Divider>
                  <div className="mx-auto">
                    <button
                      onClick={handleGoogleSingin}
                      className="btn btn-circle btn-outline hover:bg-my-primary text-my-primary text-center"
                    >
                      G
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
