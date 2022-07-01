import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>React Hook Form</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Your Name"
        {...register("name", { required: true })}
      />
      <label htmlFor="name">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        {...register("password", { required: true, minLength: 6 })}
      />
      <label htmlFor="email">Email</label>
      <input
        {...register("email", {
          required: true,
          pattern:
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        })}
        type="email"
        name="email"
        id="email"
        placeholder="Your Email"
      />
      {Object.keys(errors).length !== 0 && (
        <ul className="error-container">
          {errors.name?.type === "required" && <li>Name is required</li>}
          {errors.password?.type === "required" && (
            <li>password is required</li>
          )}
          {errors.password?.type === "minLength" && (
            <li>password must be 6 charactes long</li>
          )}
          {errors.email?.type === "required" && <li> email is required</li>}
          {errors.email?.type === "pattern" && <li> Invalid email address</li>}
        </ul>
      )}

      <Button variant='contained' type="submit">Submit</Button>
    </form>
  );
}
