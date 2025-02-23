import { Routes, Route } from "react-router-dom";
import HomeRoutes from "./pages/Home/HomeRoutes.jsx";
import Message from "./pages/Message.jsx";
import EventRoutes from "./pages/Event/EventRoutes.jsx";
import Upload from "./pages/Upload.jsx";
import CommunityRoutes from "./pages/Community/CommunityRoutes.jsx";

function Page() {
  return (
      <Routes>
        <Route index element={<HomeRoutes />} />
        <Route path="/home/*" element={<HomeRoutes />} />
        <Route path="/events/*" element={<EventRoutes />} />
<<<<<<< Updated upstream
        <Route path="/community" element={<Community />} />
=======
        {/* <Route path="/create" element={<Create />} /> */}
        <Route path="/community/*" element={<CommunityRoutes />} />
>>>>>>> Stashed changes
        <Route path="/message" element={<Message />} />
        <Route path="/api/upload" element={<Upload />} />
      </Routes>
  );
}

export default Page;
