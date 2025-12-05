import React, { FormEvent, useRef, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({ name: '', age: '' });

  const handleSumit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSumit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(Event) =>
            setPerson({ ...person, name: Event.target.value })
          }
          id="name"
          type="text"
          className="form-control"
          value={person.name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(Event) =>
            setPerson({ ...person, age: (Event.target.value) })
          }
          id="age"
          type="number"
          className="form-control"
          value={person.age}
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
