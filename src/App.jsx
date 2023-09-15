import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./container/Home/Index";
import Student from "./container/Student/Index";
import ToDoPage from "./container/ToDoPage/Index";
import Counter from "./container/Counter/Index";
import StudentProfileContainer from "./container/Student/StudentProfileContainer";
import AuthProvider from "./context/AuthProvider";
import { LogIn } from "./container/Auth/LogIn";
import LayOut from "./container/Layout";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home/>,
  //   },
  //   {
  //     path: "student",
  //     element: <Student />,
  //   },
  //   {
  //     path: "todo",
  //     element: <ToDoPage />,
  //   },
  //   {
  //     path: "counter",
  //     element: <Counter />,
  //   },
  // ]);
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <AuthProvider>
          <LayOut>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="student">
                <Route path="" element={<Student />} />
                <Route
                  path=":studentId"
                  element={<StudentProfileContainer />}
                />
              </Route>
              <Route path="/counter" element={<Counter />} />
              <Route path="/todo" element={<ToDoPage />} />
              <Route path="/login" element={<LogIn />} />
            </Routes>
          </LayOut>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
