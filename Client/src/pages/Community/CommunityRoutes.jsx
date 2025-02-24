import IssueChat from "./IssueChat";
import Community from "./GlobalChat.jsx";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";

function CommunityRoutes() {
  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-white border-b border-white pb-0.5"
      : "text-gray-400 pb-0.5";

  return (
    <>
      {/* Navigation Links */}
      <div className="bg-neutral-900 p-4 pl-16 flex justify-between items-center h-16">
        <div className="flex gap-7 text-lg font-semibold">
          <NavLink to="/community/global" className={linkClasses}>
            Global - chat
          </NavLink>
          <NavLink to="/community/issues" className={linkClasses}>
            Issues
          </NavLink>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-1 flex-col pt-0">
        <Routes>
          <Route index element={<Navigate to="/community/global" replace />} />
          <Route path="/global" element={<Community />} />
          <Route path="/issues" element={<IssueChat />} />
        </Routes>
      </div>
    </>
  );
}

export default CommunityRoutes;
