import { Routes, Route } from "react-router-dom";
import HomeRoutes from "./pages/Home/HomeRoutes.jsx";
import Message from "./pages/Message.jsx";
import EventRoutes from "./pages/Event/EventRoutes.jsx";
import Upload from "./pages/Upload.jsx";
import CommunityRoutes from "./pages/Community/CommunityRoutes.jsx";
import Mentors from "./pages/Mentors/mentors.jsx";
import SearchMentors from "./pages/Search/SearchMentors.jsx";
import SearchStudents from "./pages/Search/SearchStudents.jsx";

function Page() {
  return (
    <Routes>
      <Route index element={<HomeRoutes />} />
      <Route path="/home/*" element={<HomeRoutes />} />
      <Route path="/events/*" element={<EventRoutes />} />
      {/* <Route path="/create" element={<Create />} /> */}
      <Route path="/community/*" element={<CommunityRoutes />} />
      <Route path="/message" element={<Message />} />
      <Route path="/searchMentors" element={<SearchMentors />} />
      <Route path="/searchStudents" element={<SearchStudents />} />

      <Route path="/api/upload" element={<Upload />} />
      <Route path="/mentors" element={<Mentors />} />

      {/* <Route path="/submission/:id" element={<ShowProjectDetails />} /> */}
    </Routes>
  );
}

export default Page;
