/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    {
      id: 1,
      img_url:
        "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      student_data: { name: "Kaung Myat Soe", age: "25" },
    },
  ]);

  const DeleteHandler = (id) => {
    console.log(id);
    const filterData = students.filter((s) => s.id != id);
    setStudents([...filterData]);
  };

  return (
    <StudentContext.Provider value={{students, setStudents,DeleteHandler}}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
