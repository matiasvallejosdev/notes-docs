import React from "react";

export default function Form() {
  const [data, setData] = React.useState({ username: "", password: "" });
  const [errors, setErrors] = React.useState({});

  //plus
  const errores = React.useMemo(()=>{
    return validate(data);
  },[data]);

  function handleChange(e) {
    setData((prevState) => {
      const newState = {
        ...prevState,
        [e.target.name]: e.target.value,
      };

      setErrors(validate(newState));

      return newState;
    });
  }

  return (
    <div>
      <form>
        <div>
          <label>Username:</label>
          <input
            value={data.username}
            type="text"
            name="username"
            onChange={handleChange}
            className={errors.username && 'danger'}
          />
          {errors.username && <p className="danger">{errors.username}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            value={data.password}
            type="password"
            name="password"
            onChange={handleChange}
            className={errors.password && 'danger'}
          />
          {errors.password && <p className="danger">{errors.password}</p>}
        </div>
        <input type="submit" value="Submit" disabled={Object.keys(errors).length} />
      </form>
    </div>
  );
}

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = "Username is invalid";
  }

  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
  }

  return errors;
}
