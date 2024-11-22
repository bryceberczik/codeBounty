import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState<{
    username: string;
    email: string;
    password: string;
  }>({
    username: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [addUser] = useMutation(ADD_USER);

  const validate = () => {
    let isValid = true;
    if (!formState.username) {
      setError("Username is required.");
      isValid = false;
    } else if (!formState.email) {
      setError("Email is required.");
      isValid = false;
    } else if (!formState.password) {
      setError("Password is required.");
      isValid = false;
    }

    // Password must be at least 8 characters long, contain at least one letter, one number, and one special character.
    else if (
      !/(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&])/.test(formState.password)
    ) {
      setError(
        "Password must be at least 8 characters long, contain at least one letter, one number, and one special character."
      );
      isValid = false;
    }
    return isValid;
  };

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      const { data } = await addUser({
        variables: { input: formState },
      });
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      setError("Something went wrong.");
    }
  };

  return (
    <div className="signup-container">
      <form className="auth-form" onSubmit={handleFormSubmit}>
        {/* Username Section */}
        <label>Username</label>
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={formState.username}
          onChange={(e) =>
            setFormState({ ...formState, username: e.target.value })
          }
        />

        {/* Email Section */}
        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
        />

        {/* Password Section */}
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formState.password}
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
        />

        <button className="auth-btn" type="submit">
          Submit
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Signup;
