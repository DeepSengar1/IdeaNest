import { Trophy, Users, Clock } from "lucide-react";
function HackathonSidebar({
  hackathons,
  onSelectHackathon,
  selectedHackathonId,
}) {
  if (hackathons.length === 0) {
    return (
      <p className="text-zinc-400 text-sm mt-4">
        No hackathons match the selected filters.
      </p>
    );
  }

  return (
    <div className="space-y-4 mt-4">
      {hackathons.map((hack) => {
        const isSelected = hack.id === selectedHackathonId;

        const maxTags = 2;
        const displayTags = hack.tags.slice(0, maxTags);
        const hiddenCount = hack.tags.length - maxTags;

        return (
          <div
            key={hack.id}
            onClick={() => onSelectHackathon(hack.id)}
            className={`p-2 rounded-md cursor-pointer border border-zinc-800 
              hover:bg-zinc-800 transition-colors 
              ${isSelected ? "bg-zinc-800" : "bg-zinc-900"}`}
          >
            <h2 className=" font-semibold text-blue-400">
              {hack.title}
            </h2>

            <p className="text-xs text-zinc-400 mb-1">{hack.shortLocation}</p>
            <div className="flex items-center gap-4 mt-4 text-zinc-300">
              <div className="flex items-center text-yellow-300 text-xs bg-yellow-900/60 p-1 rounded-md">
                <Trophy size={14} className="mr-1" />
                {hack.prize || "N/A"}
              </div>
              <div className="flex items-center text-xs">
                <Users size={14} className="mr-1" />
                {hack.registered}
              </div>
            </div>

            <div className="flex items-center gap-4 mt-2 text-zinc-300">
              <div className="flex items-center text-xs">
                <Clock size={14} className="mr-1" />
                {hack.daysLeft} days
              </div>
              <p className="text-xs text-green-500 mt-1">Mode: {hack.mode}</p>
            </div>

            <div className="text-xs text-zinc-400 mt-2 whitespace-nowrap overflow-hidden border border-zinc-700 rounded-full p-1.5">
              {displayTags.join(", ")}
              {hiddenCount > 0 && (
                <span className="ml-1 text-zinc-500">+{hiddenCount}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HackathonSidebar;
