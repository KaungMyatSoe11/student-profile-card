import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./container/Home/Index";
import Student from "./container/Student/Index";
import ToDoPage from "./container/ToDoPage/Index";
import Counter from "./container/Counter/Index";
import Header from "./components/Header";
import StudentProfileContainer from "./container/Student/StudentProfileContainer";

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
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="student" >
            <Route path="" element={<Student />}/>
            <Route path=":studentId" element={<StudentProfileContainer />} />
          </Route>
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<ToDoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
