import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div className="text-red-200">Error</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
