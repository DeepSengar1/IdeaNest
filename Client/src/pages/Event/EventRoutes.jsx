import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import Hackathons from "./hakathons/Hackathons.jsx";
import Webinar from "./Webinar";
import Workshop from "./Workshop";
import Create from "../Home/Create";
function EventRoutes() {
  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "text-white border-b border-white pb-0.5"
      : "text-gray-400 pb-0.5";

  return (
    <>
      <div className="bg-neutral-900 p-4 pl-16 flex justify-between items-center h-16">
        <div className="flex gap-7 text-lg font-semibold">
          <NavLink to="/events/hackathons" className={navLinkClasses}>
            Hackathons
          </NavLink>
          <NavLink to="/events/webinars" className={navLinkClasses}>
            Webinars
          </NavLink>
          <NavLink to="/events/workshops" className={navLinkClasses}>
            Workshops
          </NavLink>
        </div>
        <Create />
      </div>

      <Routes>
        <Route index element={<Navigate to="hackathons" replace />} />
        <Route path="hackathons" element={<Hackathons />} />
        <Route path="hackathons/show" element={<showHackathon />} />
        <Route path="webinars" element={<Webinar />} />
        <Route path="workshops" element={<Workshop />} />
      </Routes>
    </>
  );
}

export default EventRoutes;
