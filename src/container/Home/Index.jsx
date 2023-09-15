import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Home = () => {
  const { isAuth } = useContext(AuthContext);
  console.log(isAuth);
  return (
    <div>
     Home page

      {isAuth ? "log out" : "log in"}
    </div>
  );
};

export default Home;
