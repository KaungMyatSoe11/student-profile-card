/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { StudentContext } from "../../context/StudentProvider";

const StudentCard = ({ img_url, student_data,id }) => {
  const { DeleteHandler } = useContext(StudentContext);
  const default_image =
    "https://plus.unsplash.com/premium_photo-1664392535366-b77ac4a0e880?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1960&q=80";
console.log("card");
  return (
    <div className="basis-[32%]">
      <div>
        <img
          className="w-full"
          src={img_url ? img_url : default_image}
          alt="KMs"
        />
      </div>
      <div>
        <h2>{student_data.name}</h2>
        <p> {student_data.age ? `${student_data.age} years` : "nodata"}</p>
      </div>
      <div className="mt-4">
        <button
          className="py-2 px-3 border-2 rounded-md "
          onClick={() => DeleteHandler(id)}
        >
          <MdDelete size={22} className="text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
