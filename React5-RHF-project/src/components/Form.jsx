import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  console.log("form");
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues:{}
   });
  console.log(errors);

  const formSubmit = (e) => {
    console.log(e);
  };

  return (
    <div className="flex p-4">
      <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col gap-4">
        <input
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Minimim length should be 3",
            },
          })}
          className="border rounded p-2"
          type="text"
          placeholder="Name"
        />
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email should be in format",
            },
          })}
          className="border rounded p-2"
          type="email"
          placeholder="Email"
        />
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Minimum 8 characters are required",
            },
          })}
          className="border rounded p-2"
          type="password"
          placeholder="Password"
        />
        <button className="border rounded p-2 cursor-pointer" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
