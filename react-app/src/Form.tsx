import React, { FormEvent, useRef } from "react";

const Form = () => {
    // UseRef hooks for uncontrolled components.
    // Gets the data from our input fields.
    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const person = {name: '', age: 0};

  const handleSumit = (event: FormEvent) => {
    event.preventDefault();
    if(nameRef.current !== null)
        // console.log(nameRef.current.value);
        person.name = nameRef.current.value;
    if(ageRef.current !== null)
        person.age = Number(ageRef.current.value);

    console.log(person);
  };

  return (
    <form
      onSubmit={handleSumit}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
