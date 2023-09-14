import StudentProfile from "../../components/StudentProfile/Index";
import StudentProvider from "../../context/StudentProvider";

const StudentProfileContainer = () => {
  return (
    <>
      <StudentProvider>
        <StudentProfile />
      </StudentProvider>
    </>
  );
};

export default StudentProfileContainer;
