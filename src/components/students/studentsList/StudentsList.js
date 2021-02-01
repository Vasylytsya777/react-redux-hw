import React from "react";
import { useSelector } from "react-redux";

const StudentsList = () => {
  const student = useSelector((state) => state.students.items);
  return (
    <ul>
      {student.map((student) => (
        <li key={student.id}>
          <p>
            {student.firstName} <span> </span> {student.lastName}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default StudentsList;
