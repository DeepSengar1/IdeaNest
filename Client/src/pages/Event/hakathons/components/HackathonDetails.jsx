import { Calendar, MapPin, Mail, Users, Eye, Cpu } from "lucide-react";

function HackathonDetails({ hackathon }) {
  return (
    <div className="space-y-6 bg-zinc-900 rounded-lg ">
      <div className=" bg-gradient-to-b from-blue-950 to-zinc-900 rounded-lg border">
        {/* Title Section */}
        <div className="px-6 m-6 border-l-4 border-zinc-300 my-16 space-y-2">
          <div className="h-28 bg-zinc-700 w-28 p-4 rounded-2xl">
            <Cpu className="h-20 w-20" />
          </div>
          <h1 className="text-4xl font-semibold pb-8 pt-4">
            {hackathon.title}
          </h1>
          <p className=" text-neutral-300 flex items-center mb-2">
            <MapPin size={16} className="mr-1" />
            {hackathon.fullLocation}
          </p>
          <p className="text-neutral-300 flex items-center pb-6">
            <Calendar size={14} className="mr-1" />
            <span>Date Announced: {hackathon.dateAnnounced}</span>
          </p>

          {/* Tag pills */}
          <div className="flex flex-wrap gap-2.5 mt-3">
            {hackathon.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-neutral-700 text-xs px-2.5 py-1.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Registration Info */}
        <div className="p-4 m-6 rounded-lg border border-neutral-700 bg-neutral-900 text-white space-y-4">
          <div className="flex flex-col gap-4 md:flex-row xl:items-center xl:justify-between">
            {/* Registration Fee */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-semibold">
                {hackathon.registrationFee}
              </span>
              <span className="text-sm text-neutral-400">Registration Fee</span>
            </div>

            {/* Organizer Info */}
            <div className="flex flex-col">
              <span className="font-semibold">{hackathon.organizerName}</span>
              <span className="text-sm text-neutral-400 flex items-center">
                <Mail size={14} className="mr-1" />
                {hackathon.organizerEmail}
              </span>
            </div>

            {/* Eligibility + Register */}
            <div className="flex items-center space-x-2">
              {/* Example “Eligible” pill – you can conditionally show or hide */}
              <span className="px-2 py-1 bg-green-600 text-xs font-semibold rounded-md">
                Eligible
              </span>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-sm rounded-md">
                Register
              </button>
            </div>
          </div>

          {/* Bottom row: stats (registered, team size, impressions, deadline) */}
          <div className="flex flex-wrap gap-4 text-sm">
            <p className="flex items-center space-x-1">
              <Users size={14} />
              <span>Registered:</span>
              <span className="font-semibold">{hackathon.registered}</span>
            </p>

            <p className="flex items-center space-x-1">
              <Users size={14} />
              <span>Team Size:</span>
              <span className="font-semibold">{hackathon.teamSize}</span>
            </p>

            <p className="flex items-center space-x-1">
              <Eye size={14} />
              <span>Impressions:</span>
              <span className="font-semibold">{hackathon.impressions}</span>
            </p>

            <p>
              Registration Deadline:{" "}
              <span className="font-semibold">{hackathon.deadline}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Stages & Timeline */}
      <div className="p-4 m-6 rounded-lg border border-neutral-700">
        <h2 className="text-xl font-semibold mb-4">Stages & Timeline</h2>
        <div className="space-y-4 border-l-2 border-blue-700 pl-3">
          {hackathon.rounds.map((round) => (
            <div key={round.id} className="bg-neutral-800 p-3 rounded-md">
              <h3 className="text-sm font-bold mb-1">{round.title}</h3>
              <p className="text-xs text-neutral-400 mb-1">
                Start: {round.date}, {round.time}
              </p>
              <p className="text-xs text-neutral-400 mb-1">End: {round.end}</p>
              <p className="text-xs text-neutral-300">{round.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info / Description */}
      <div className="p-4 m-6 rounded-lg border border-neutral-700">
        <h2 className="text-xl font-semibold mb-2">
          All that you need to know about {hackathon.title}
        </h2>
        <p className="text-sm whitespace-pre-line text-neutral-300">
          {hackathon.description}
        </p>
      </div>
    </div>
  );
}

export default HackathonDetails;
