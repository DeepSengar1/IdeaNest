import { Link, Route, Routes } from "react-router-dom";
import Ideas from "./Ideas";
import Projects from "./Projects";
import Create from "./Create";

function HomeRoutes() {
  return (
    <>
      <div className="bg-neutral-900 p-4 pl-16 flex justify-between items-center">
        <div className="flex gap-6 text-xl font-semibold">
          <Link to="/home/ideas">Ideas</Link>
          <Link to="/home/projects">Projects</Link>
        </div>
        <Create />
      </div>

      <Routes>
        <Route index element={<Ideas />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default HomeRoutes;
