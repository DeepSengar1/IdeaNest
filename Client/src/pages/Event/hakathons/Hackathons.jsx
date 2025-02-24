import { useState } from "react";
import HackathonSidebar from "./components/HackathonSidebar";
import HackathonDetails from "./components/HackathonDetails";
import ModeDropdown from "./components/ModeDropdown";
import TagDropdown from "./components/TagDropdown";


const hackathonsData = [
  {
    id: 1,
    title: "HackMatrix 3.0 (24 Hour Hackathon)",
    shortLocation: "Pimpri Chinchwad Polytechnic College, Akurdi, Pune",
    fullLocation:
      "Pimpri Chinchwad College of Engineering Sector -26, Pradhikaran, Nigdi, Near Akurdi Railway Station, Pune - 411 044, Maharashtra, India",
    registrationFee: "₹ 300",
    prize: "₹ 24,000",
    registered: "16 / 200 (Limited Slots)",
    impressions: "9,082",
    teamSize: "3 - 4 Members",
    daysLeft: 3,
    mode: "Offline",
    tags: ["Hackathon", "Engineering Students", "MBA Students"],
    rounds: [
      {
        id: 1,
        title: "Round 1 (Online)",
        date: "Mar 01, 2025",
        time: "08:00 AM",
        end: "Mar 02, 11:00 AM",
        description:
          "Problem statement will be released on 1st March and also communicated through WhatsApp group. For the evaluation in round 1 at least 50% of the problem statement is mandatory.",
      },
      {
        id: 2,
        title: "Round 2 (Offline Final Round)",
        date: "Mar 07, 2025",
        time: "08:00 AM",
        end: "Mar 08, 05:00 PM",
        description:
          "This will be an offline round. The selected students will have to work on the same prototype developed in round 1 with some advanced integrations such as AI and ML, assuring the scalability of the project.",
      },
    ],
    description: `HACK MATRIX 3.0 - The Ultimate Coding Battle!\nHack. Build. Innovate. Win!\n\nEligibility: Students with valid ID cards.`,
    organizerName: "Rishu Kumar",
    organizerEmail: "rishikumar9233@gmail.com",
    dateAnnounced: "Feb 23, 2025",
  },
  {
    id: 2,
    title: "Code Warriors (48 Hour Marathon)",
    shortLocation: "IIT Delhi, Hauz Khas, New Delhi",
    fullLocation: "IIT Delhi Campus, Hauz Khas, New Delhi, India",
    registrationFee: "₹ 500",
    prize: "₹ 50,000",
    registered: "40 / 300",
    impressions: "12,340",
    teamSize: "2 - 5 Members",
    daysLeft: 5,
    mode: "Offline",
    tags: ["Hackathon", "Open-to-all", "Engineering Students"],
    rounds: [
      {
        id: 1,
        title: "Round 1 (Submission)",
        date: "Mar 10, 2025",
        time: "09:00 AM",
        end: "Mar 11, 11:59 PM",
        description:
          "Teams submit their ideas online. Judges shortlist the top ideas for the final hackathon round.",
      },
      {
        id: 2,
        title: "Final Round (On-site)",
        date: "Mar 15, 2025",
        time: "09:00 AM",
        end: "Mar 17, 09:00 AM",
        description:
          "48-hour on-site hackathon. Teams work non-stop to develop their ideas into prototypes.",
      },
    ],
    description:
      "Code Warriors is a 48-hour coding marathon for students and professionals. Prizes for top 3 teams. Workshops and mentorship sessions included!",
    organizerName: "Code Warriors Team",
    organizerEmail: "info@codewarriors.com",
    dateAnnounced: "Feb 25, 2025",
  },
  {
    id: 3,
    title: "Innovation Summit",
    shortLocation: "MIT, Cambridge, MA",
    fullLocation: "Massachusetts Institute of Technology, Cambridge, MA, USA",
    registrationFee: "Free",
    prize: "Grant Funding Available",
    registered: "200+",
    impressions: "15,000",
    teamSize: "1 - 4 Members",
    daysLeft: 10,
    mode: "Online",
    tags: ["MBA Students", "Open-to-all"],
    rounds: [
      {
        id: 1,
        title: "Proposal Submission",
        date: "Mar 20, 2025",
        time: "08:00 AM",
        end: "Mar 25, 05:00 PM",
        description:
          "Submit a brief proposal outlining your innovative idea. Top proposals will be invited to the final pitch.",
      },
      {
        id: 2,
        title: "Final Pitch (Offline)",
        date: "Mar 30, 2025",
        time: "09:00 AM",
        end: "Mar 30, 05:00 PM",
        description:
          "Present your idea to a panel of experts and investors. Grants awarded to top projects.",
      },
    ],
    description:
      "An innovation summit focusing on business solutions, technology breakthroughs, and cross-disciplinary collaboration. Open to MBA students, engineers, and innovators worldwide.",
    organizerName: "MIT Innovation Hub",
    organizerEmail: "info@mitinnovation.org",
    dateAnnounced: "Mar 1, 2025",
  },
];

function Hackathons() {
  const [selectedHackathon, setSelectedHackathon] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedMode, setSelectedMode] = useState("All");
  const handleSelectHackathon = (hackathonId) => {
    const hackathon = hackathonsData.find((h) => h.id === hackathonId);
    setSelectedHackathon(hackathon);
  };

  const handleTagFilterChange = (tag) => {
    setSelectedFilters((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredHackathons = hackathonsData.filter((hack) => {
    const passTagFilter =
      selectedFilters.length === 0 ||
      hack.tags.some((tag) => selectedFilters.includes(tag));

    const passModeFilter =
      selectedMode === "All" || hack.mode === selectedMode;

    return passTagFilter && passModeFilter;
  });

  return (
    <div className="flex h-[calc(100vh-65px)] overflow-hidden">
      {/* Sidebar */}
      <div className="w-80  pl-4 py-4 overflow-y-auto">
        <h1 className="text-xl font-bold mb-4">Hackathons</h1>

        <div className="mt-4 flex gap-2">
        <ModeDropdown selectedMode={selectedMode} setSelectedMode={setSelectedMode} />

          <TagDropdown
            allTags={["Hackathon", "Engineering Students", "MBA Students", "Open-to-all"]}
            selectedFilters={selectedFilters}
            onChange={handleTagFilterChange}
          />
        </div>

        <HackathonSidebar
          hackathons={filteredHackathons}
          onSelectHackathon={handleSelectHackathon}
          selectedHackathonId={selectedHackathon?.id}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-4 overflow-y-auto">
        {selectedHackathon ? (
          <HackathonDetails hackathon={selectedHackathon} />
        ) : (
          <div className="text-neutral-400 m-auto text-center mt-[30%] text-xl">
            <p>Please select hakathon to see details.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hackathons;
