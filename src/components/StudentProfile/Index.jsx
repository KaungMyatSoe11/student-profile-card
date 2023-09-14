import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StudentContext } from "../../context/StudentProvider";

const StudentProfile = () => {
  let { studentId } = useParams();
  const { students } = useContext(StudentContext);
  const [showStudent, setShowStudent] = useState();
  const [notData, setNotData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const foundStudent = students.find((st) => st.id == studentId);
      console.log(foundStudent);

      foundStudent ? setShowStudent(foundStudent) : setNotData(true);
    }, 3000);
  }, [studentId, students]);

  return (
    <div>
      Profile page
      {showStudent ? (
        <div>
          <img src={showStudent.img_url} alt={showStudent.student_data.name} />
          <h1>{showStudent.student_data.name}</h1>
          <p>{showStudent.student_data.age}</p>
        </div>
      ) : notData ? (
        <h1>No Data</h1>
      ) : (
        <h1>Loading.....</h1>
      )}
    </div>
  );
};

export default StudentProfile;
