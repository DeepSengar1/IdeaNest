const Mentorship = () => {
    const plans = [
      {
        title: "One Time Mentorship",
        tag: "Basic",
        image: "https://symmetricinsurance.com/img/confianza.png",
        features: [
          "1:1 Chat Session",
          "1:1 Audio/Video Session",
          "1:1 Resume Review Session",
          "1:1 Mock Interview Session",
          "1:1 Project Review Session",
          "1:1 Job Referral Session",
        ],
      },
      {
        title: "Full Time Mentorship",
        tag: "EMI Available",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTmOq3Py1eF78sUVzl6_mHcWrglr9ScdvV1I4h0A3BCC56YI_F3",
        features: [
          "Personalized Roadmap with Mentor",
          "Regular Follow-Ups with Mentor",
          "1:1 Unlimited Chat with Mentor",
          "1:1 Multiple Audio/Video Session",
          "1:1 Multiple Resume Review Session",
          "1:1 Multiple Mock Interview Session",
          "Job Referrals from Mentor",
        ],
      },
      {
        title: "Bootcamps",
        tag: "Newly Added",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ4Hq6e25Ab3RIsWLKcpVLDSi-tRNoxnQY3mWl3RKFeWWJhJT-0",
        features: [
          "Multiple Live Interactive Sessions",
          "Multiple Ask Me Anything Sessions",
          "Strong Peer Network with Mentor",
          "Certificate of Completion",
          "Exclusive Preparation Resources",
          "Dedicated Mentor",
        ],
      },
    ];
  
    return (
      <div className="flex flex-col md:flex-row justify-center gap-8 p-8 bg-gray-950 text-white min-h-screen">
        {plans.map((plan, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-2xl w-80 text-center relative transform transition duration-500 hover:scale-10 hover:shadow-blue-500/50 border border-gray-700">
            <span className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 text-sm rounded-full shadow-lg">
              {plan.tag}
            </span>
            <img src={plan.image} alt={plan.title} className="w-full h-40 object-cover rounded-lg mt-4" />
            <h2 className="text-2xl font-semibold mt-4 text-blue-400">{plan.title}</h2>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg w-full text-white font-bold transition">
              Get Started
            </button>
            <div className="mt-4 text-left">
              <h3 className="font-semibold text-lg text-blue-300">Key Features</h3>
              <ul className="mt-2 space-y-2 text-gray-300">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="text-blue-400">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Mentorship;