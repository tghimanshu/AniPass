import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "./bg.png";
import axios from "axios";
import http from "../../Utils/http";

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      navigate("/");
    }
  }, [navigate]);

  const login = async () => {
    try {
      const { data } = await http.post("/users/login", {
        email: username,
        password: pass,
      });
      console.log(data.body);
      localStorage.setItem("user", JSON.stringify(data.body));
      localStorage.setItem("userId", data.body._id);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className="signin-container h-100 d-flex justify-content-center align-items-center">
      <main className="form-signin">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login();
          }}
        >
          <img
            className="d-block mb-2"
            src={image}
            alt="site logo"
            width="60"
            height="60"
            style={{ margin: "0 auto" }}
          />
          <h1 className="h3 mb-3 text-center fw-bold">Please sign in</h1>
          {error && (
            <div className="alert alert-danger">
              Incorrect UserName or Password
            </div>
          )}
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <Link to="/signUp" className="d-block link-primary text-center">
            New to AniPass? Sign Up Here....
          </Link>
        </form>
      </main>
    </div>
  );
};

export const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCPass] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      navigate("/");
    }
  }, [navigate]);

  const register = async () => {
    try {
      if (pass === cpass) {
        const { data } = await http.post("/users/", {
          name,
          username,
          phone,
          email,
          password: pass,
        });
        localStorage.setItem("user", JSON.stringify(data.body));
        localStorage.setItem("userId", data.body._id);
        navigate("/");
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      }
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className="signin-container h-100 d-flex justify-content-center align-items-center">
      <main className="form-signin">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            register();
          }}
        >
          <img
            className="d-block mb-2"
            src={image}
            alt="site logo"
            width="60"
            height="60"
            style={{ margin: "0 auto" }}
          />
          <h1 className="h3 mb-3 text-center fw-bold">Please sign up</h1>
          {error && (
            <div className="alert alert-danger">Invalid data provided</div>
          )}
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="floatingInput">User Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="name@example.com"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="floatingInput">Phone Number</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              value={cpass}
              onChange={(e) => setCPass(e.target.value)}
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Confirm Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <Link to="/signIn" className="d-block link-primary text-center">
            New to AniPass? Sign Up Here....
          </Link>
        </form>
      </main>
    </div>
  );
};
