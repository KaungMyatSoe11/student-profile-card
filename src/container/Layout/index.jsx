/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import { AuthContext } from "../../context/AuthProvider";
import {
  Outlet,
  useLocation,
  useMatch,
  useMatches,
  useNavigate,
} from "react-router-dom";

const LayOut = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    console.log(path);
    if (path && path!=="login") {
      if (!isAuth) {//isAuth==false
        navigate("/login");
      }
    }
    setIsLoading(false)
  }, []);

  return (
    <main>
      <Header />
      <Outlet/>
    </main>
  );
};

export default LayOut;
