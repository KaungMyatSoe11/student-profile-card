import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Home from "./container/Home/Index";
import Student from "./container/Student/Index";
import ToDoPage from "./container/ToDoPage/Index";
import Counter from "./container/Counter/Index";
import Header from "./components/Header";

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
          <Route path="/student" element={<Student />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<ToDoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
