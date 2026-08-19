import React, { useRef, useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({});
  const formRef = useRef({});
  console.log(formData);

  const handleForm = (e) => {
    e.preventDefault();
    const obj = {
      name: formRef.current.name.value,
      email: formRef.current.email.value,
      password: formRef.current.password.value,
    };
    setFormData(obj);
  };

  return (
    <div className="flex p-4">
      <form onSubmit={handleForm} className="flex flex-col gap-4">
        <input
          ref={(e) => (formRef.current.name = e)}
          className="border rounded p-2"
          type="text"
          placeholder="Name"
        />
        <input
          ref={(e) => (formRef.current.email = e)}
          className="border rounded p-2"
          type="email"
          placeholder="Email"
        />
        <input
          ref={(e) => (formRef.current.password = e)}
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
