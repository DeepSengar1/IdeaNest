import CollaborateIcon from "../assets/undraw_group-chat_4xw0.svg";
import PostIcon from "../assets/undraw_post_eok2.svg";
import MentorIcon from "../assets/undraw_solution-mindset_pit7.svg";
import CommunityIcon from "../assets/undraw_group-chat_4xw0.svg";
import { SignInButton } from "@clerk/clerk-react";
import { ChevronRight } from "lucide-react";
const LandingPage = () => {
  return (
    <div className="bg-black text-zinc-300 min-h-screen font-sans">
      {/* nav-bar */}
      <nav className="flex justify-between items-center p-4 px-10 border-b border-zinc-700">
        <div className="flex space-x-6 text-lg font-semibold items-center">
          <h1 className="font-bold text-3xl mr-6 text-white">IdeaNest</h1>
          <SignInButton className="hover:text-white">Home</SignInButton>
          <SignInButton className="hover:text-white">Events</SignInButton>
          <SignInButton className="hover:text-white">Community</SignInButton>
        </div>
        <SignInButton className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 px-6 rounded-md hover:from-purple-700 hover:to-blue-600 transition duration-300" />
      </nav>

      {/* Hero Section */}
      <section className="min-h-[calc(100vh_-_75px)] flex flex-col md:flex-row justify-between p-6 ">
        <div className="pt-30 ml-14 m-auto pb-20">
          <h1 className="font-bold text-[4vw]  font-poppins text-balance ">
            Make your imagination a reality
          </h1>
          <br />
          <br />
          <div className="mt-6 flex space-x-4">
            <SignInButton>
              <button className="bg-gradient-to-r from-purple-800 to-blue-700 text-white py-3 px-9 rounded-md hover:from-purple-700 hover:to-blue-800 transition duration-300 hover:scale-105 text-lg flex gap-4 items-center">
                Get Started
                <ChevronRight />
              </button>
            </SignInButton>
          </div>
        </div>

        <div className="grid gap-4 w-full max-w-[850px]">
          <div className="bg-[#E0D492] pl-20 pr-20 rounded-lg text-black flex justify-evenly items-center ml-10">
            <img
              src={CollaborateIcon}
              alt="Collaborate"
              className="w-60 h-60"
            />
            <div>
              <h2 className="text-[2vw] font-bold mb-2">Collaborate</h2>
              <p className="text-[1vw]">
                Join a team or make <br /> your own
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 col-span-1 gap-6 pt-3">
            <div className="flex flex-col row-span-2 gap-8">
              <div className="bg-[#C1E5E6] rounded-lg text-black flex justify-evenly items-between gap-5 p-5 ml-10 mr-3">
                <img src={PostIcon} alt="Post" className="w-[7vw] h-[7vw]" />
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-bold">Post</h2>
                  <p>
                    Post your <br /> ideas to
                    <br />
                    the world{" "}
                  </p>
                </div>
              </div>
              <div className="bg-[#B697E1] rounded-lg text-black flex gap-9 items-center p-3">
                <img src={MentorIcon} alt="Mentor" className="w-40 h-40" />
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-bold">Mentors</h2>
                  <p>
                    ask best <br /> mentors for <br />
                    support{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#B6EDD7] rounded-lg text-black flex flex-col gap-2 pl-10 pr-10 pb-17">
              <img src={CommunityIcon} alt="Community" className="w-60 h-60" />
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-bold">Community</h2>
                <p>
                  Ask your doubts,
                  <br /> chat and form new <br /> connections
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
