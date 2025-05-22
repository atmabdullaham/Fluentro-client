import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";

import Loading from "../components/Loading";
import AuthContext from "../providers/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) return <Loading />;
  if (user) return children;
  return <Navigate to="/login" state={location.pathname} />;
};

export default PrivateRoute;
