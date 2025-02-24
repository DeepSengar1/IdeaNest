import React from 'react'
import CollaborateIcon from '../../assets/undraw_collaborators_rgw4.svg'
import PostIcon from '../../assets/undraw_post_eok2.svg'
import MentorIcon from '../../assets/undraw_solution-mindset_pit7.svg'
import CommunityIcon from '../../assets/undraw_group-chat_4xw0.svg'
import { SignInButton } from '@clerk/clerk-react'
import { ChevronRight } from 'lucide-react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate
} from 'framer-motion'
import { useEffect } from 'react'
import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const COLORS = ['#13ffaa', '#1e67c6', '#ce84cf', '#dd335c']

const LandingPage = () => {
  const color = useMotionValue(COLORS[0])

  const background = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`
  const border = useMotionTemplate`1px solid ${color}`
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`
  useEffect(() => {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror'
    })
  })
  return (
    <>
      <motion.section
        style={{ background }}
        className=' flex flex-col items-center gap-[2.5vw] z-9
            overflow-hidden bg-gray-950  text-gray-200'
      >
        {/* Navbar */}
        <nav className='flex justify-between items-center p-4 top-0 '>
          <div className='flex space-x-80 text-lg font-semibold p-3'>
            <h1 className='font-bold text-5xl text-white'>IdeaNest</h1>
            <div className='flex gap-28 items-center text-2xl'>
              <SignInButton className='hover:text-white z-30'>Home</SignInButton>
              <SignInButton className='hover:text-white z-30'>Events</SignInButton>
              <SignInButton className='hover:text-white z-30'>
                Community
              </SignInButton>
            </div>
            <div>
              <SignInButton className='bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 px-8 rounded-md hover:from-purple-700 hover:to-blue-600 transition duration-300 z-30'>
                Sign In
              </SignInButton>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className=' flex md:flex-row pl-6 pr-6 text-white'>
          {/* Left Side */}
          <div className='md:w-1/2 md:text-left pt-16 p-8'>
            <h1 className='font-bold text-[6vw] font-poppins leading-tight '>
              Make your imagination a reality
            </h1>
            <div className='mt-6 flex justify-center md:justify-start'>
              <button className='bg-gradient-to-r from-purple-800 to-blue-700 text-white py-3 px-9 rounded-md hover:from-purple-700 hover:to-blue-800 transition duration-300 hover:scale-105 text-lg flex gap-4 items-center'>
                Get Started
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* Right Side (Cards Section) */}
          <div className='grid gap-6 max-w-[850px] p-5'>
            {/* Collaborate Card */}
            <div className='bg-[#E0D492] rounded-lg text-black flex items-center p-6 shadow-lg'>
              <img
                src={CollaborateIcon}
                alt='Collaborate'
                className='w-40 h-40'
              />
              <div className='ml-6'>
                <h2 className='text-2xl font-bold'>Collaborate</h2>
                <p className='text-lg'>Join a team or make your own</p>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-6 '>
              {/* Post Card */}
              <div className='bg-[#C1E5E6] rounded-lg text-black flex items-center gap-4 p-5 shadow-lg'>
                <img src={PostIcon} alt='Post' className='w-20 h-20' />
                <div>
                  <h2 className='text-xl font-bold'>Post</h2>
                  <p>Share your ideas with the world</p>
                </div>
              </div>

              {/* Community Card */}
              <div className='bg-[#B6EDD7] rounded-lg text-black flex flex-col items-center p-6 shadow-lg'>
                <img
                  src={CommunityIcon}
                  alt='Community'
                  className='w-32 h-32'
                />
                <h2 className='text-2xl font-bold mt-4'>Community</h2>
                <p className='text-center'>Ask your doubts, chat & network</p>
              </div>

              {/* Mentors Card */}
              <div className='bg-[#B697E1] rounded-lg text-black flex items-center gap-6 p-6 shadow-lg col-span-2'>
                <img src={MentorIcon} alt='Mentor' className='w-40 h-40' />
                <div>
                  <h2 className='text-xl font-bold'>Mentors</h2>
                  <p>Connect with experts for guidance</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='absolute w-full h-full top-0 left-0 z-0'>
          <Canvas>
            <Stars
              radius={100}
              depth={50}
              count={5000}
              factor={4}
              saturation={0}
              fade
            />
          </Canvas>
        </div>
      </motion.section>
    </>
  )
}

export default LandingPage
