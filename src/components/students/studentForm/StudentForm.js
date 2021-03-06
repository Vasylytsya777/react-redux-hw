import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewStudent } from "../../../redux/actions/studentsActions";

const initialState = {
  firstName: "",
  lastName: "",
};

const StudentForm = () => {
  const [state, setState] = useState({ ...initialState });
  const dispatch = useDispatch();
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSabmit = (e) => {
    e.preventDefault();
    dispatch(addNewStudent(state));
    setState({ ...initialState });
  };

  return (
    <form onSubmit={onHandleSabmit}>
      <input
        type="text"
        value={state.firstName}
        onChange={onHandleChange}
        name="firstName"
      />
      <input
        type="text"
        value={state.lastName}
        onChange={onHandleChange}
        name="lastName"
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
