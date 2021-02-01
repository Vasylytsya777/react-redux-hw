import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getStudent } from "../redux/actions/studentsActions";
import Navigation from "./navigation/Navigation";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("students")) {
      const students = JSON.parse(localStorage.getItem("students"));
      dispatch(getStudent(students));
    }
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <Navigation />
    </div>
  );
};

export default App;
