import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import Ideas from "./Ideas";
import Projects from "./Projects";
import Create from "./Create";

function HomeRoutes() {
  const linkClasses = ({ isActive }) =>
    isActive ? "text-white border-b border-white pb-0.5" : "text-gray-400 pb-0.5";

  return (
    <>
      <div className="bg-neutral-900 p-4 pl-16 flex justify-between items-center h-16">
        <div className="flex gap-7 text-lg font-semibold">
          <NavLink to="/home/ideas" className={linkClasses}>
            Ideas
          </NavLink>
          <NavLink to="/home/projects" className={linkClasses}>
            Projects
          </NavLink>
        </div>
        <Create />
      </div>

      <Routes>
        {/* Redirect the index route to "/home/ideas" */}
        <Route index element={<Navigate to="/home/ideas" replace />} />
        <Route path="ideas" element={<Ideas />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default HomeRoutes;
