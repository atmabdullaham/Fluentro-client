import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      {/* Navbar */}
      <h1>Navbar</h1>
      {/* Outlet */}
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </div>
      {/* Footer */}
      <h1>Footer</h1>
    </div>
  );
};

export default Main;
