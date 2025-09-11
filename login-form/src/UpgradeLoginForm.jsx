import React, { useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    name: " ",
    email: "",
    password: "",
    showPassword: false,
    message: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue
    }));

    console.log("handleChange:", name, fieldValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.password) {
      setFormData((prev) => ({ ...prev, message: "Please fill all the fields" }));
    } else {
      setFormData((prev) => ({
        ...prev,
        message: `Welcome, ${formData.name} Your email is ${formData.email}`,
        email: "",
        password: ""
      }));
    }
    console.log("submit:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>
        Name:
        <input
          name="name"
          type="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="you@example.com"
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />
      </label>

      <label>
        Password:
        <input
          name="password"
          type={formData.showPassword ? "text" : "password"}
          value={formData.password}
          onChange={handleChange}
          placeholder="password"
        />
      </label>

      <label>
        <input
          name="showPassword"
          type="checkbox"
          checked={formData.showPassword}
          onChange={handleChange}
        />
        Show password
      </label>

      <button type="submit">Login</button>

      {formData.message && <p>{formData.message}</p>}
    </form>
  );
}
