import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layouts/Main";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import FindTutors from "../pages/FindTutors";
import AddTutorials from "../pages/AddTutorials";
import MyTutorials from "../pages/MyTutorials";
import UpdateTutorials from "../pages/UpdateTutorials";
import TutorDetails from "../pages/TutorDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: (
      <div className="text-red-600 text-5xl text-center">Error</div>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/find-tutors",
        element: <FindTutors></FindTutors>,
      },
      {
        path: "/add-tutorials",
        element: <AddTutorials></AddTutorials>,
      },
      {
        path: "/my-tutorials",
        element: <MyTutorials></MyTutorials>,
      },
      {
        path: "/update-tutorial/:id",
        element: <UpdateTutorials></UpdateTutorials>,
      },
      {
        path: "/tutor/:details",
        element: <TutorDetails></TutorDetails>,
      },
    ],
  },
]);

export default router;
