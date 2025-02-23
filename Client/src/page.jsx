import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Community from "./pages/Community.jsx";
import Events from "./pages/Events.jsx";
import Create from "./pages/Create.jsx";
import Message from "./pages/Message.jsx";

function Page() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/create" element={<Create />} />
        <Route path="/community" element={<Community />} />
        <Route path="/message" element={<Message />} />
      </Routes>
  );
}

export default Page;
