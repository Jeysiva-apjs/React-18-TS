import React, { FormEvent, useState } from "react";
import { z } from "zod";

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    age: 0,
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          value={person.name}
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          className="form-control"
          value={person.age}
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
