import React, { useState, useEffect } from "react";
import axios from "axios";

const Signup = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/api/register", {
        username,
        password,
        department
      })
      .then(res => props.handleLogin(res.data.token))
      .then(() => props.history.push("/users"))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    return () => {
      setUsername("");
      setPassword("");
      setDepartment("");
    };
  }, []);

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input
        type='text'
        placeholder='Username'
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        onChange={e => setPassword(e.target.value)}
      />
      <input
        type='text'
        placeholder='Department'
        onChange={e => setDepartment(e.target.value)}
      />
      <button type='submit'>Sign up</button>
    </form>
  );
};

export default Signup;