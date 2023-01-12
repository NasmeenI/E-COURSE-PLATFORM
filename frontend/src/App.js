import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Courses from "./views/courses/Courses";
import Details from "./views/details/Details";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import { UserProvider } from "./contexts/UserContext";
import { Toaster } from "react-hot-toast";
import MyCourses from "./views/mycourses/MyCourses";
import CourseStudentMenu from "./views/courseStudentMenu/CourseStudentMenu";
import Error from "./views/error/Error";
import LecturePage from "./views/lecturePage/LecturePage";
import AssignmentPage from "./views/assignmentPage/AssignmentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/courses/:id",
    element: <Details />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  
  {
    path: "/mycourses",
    element: <MyCourses />,
  },
  {
    path: "/mycourses/student/:courseID",
    element: <CourseStudentMenu />,
  },
  {
    path: "/mycourses/student/:courseID/lecture/:lectureID",
    element: <LecturePage />,
  },
  {
    path: "/mycourses/student/:courseID/assignment/:assignmentID",
    element: <AssignmentPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  return (
    <UserProvider>
      <Toaster />
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
