import { Routes, Route } from "react-router-dom";
import HomeRoutes from "./pages/Home/HomeRoutes.jsx";
import Community from "./pages/Community.jsx";
import Message from "./pages/Message.jsx";
import EventRoutes from "./pages/Event/EventRoutes.jsx";

function Page() {
  return (
      <Routes>
        <Route path="/home/*" element={<HomeRoutes />} />
        <Route path="/events/*" element={<EventRoutes />} />
        {/* <Route path="/create" element={<Create />} /> */}
        <Route path="/community" element={<Community />} />
        <Route path="/message" element={<Message />} />
      </Routes>
  );
}

export default Page;
