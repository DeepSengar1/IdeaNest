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
      <div className="flex flex-1 flex-col pt-0">
        <Routes>
          <Route index element={<Navigate to="/community/global" replace />} />
          <Route path="/global" element={<Community />} />
        </Routes>
      </div>
      
    </>
  );
}

export default CommunityRoutes;
