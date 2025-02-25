import React from 'react'

const mentors = [
  {
    name: 'Naman Jindal',
    username: '@namanjindal',
    company: 'Db corp',
    experience: '8+ years',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
    companies: [
      'PhysicsWallah',
      'Newton School',
      'Fynd - Shopsense',
      'Coding Ninjas',
      'Dailyhunt'
    ],
    skills: [
      'Javascript',
      'Node JS',
      'React',
      'MongoDB',
      'Problem Solving',
      'GITHUB',
      'GIT'
    ]
  },
  {
    name: 'Aditi Sharma',
    username: '@aditi_sharma',
    company: 'Microsoft',
    experience: '6+ years',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    companies: ['Amazon', 'Flipkart', 'TCS', 'Wipro'],
    skills: ['Python', 'Django', 'AI/ML', 'Data Science', 'SQL']
  },
  {
    name: 'Rohan Verma',
    username: '@rohanverma',
    company: 'Google',
    experience: '7+ years',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    companies: ['Meta', 'Tesla', 'Adobe', 'Oracle'],
    skills: ['GoLang', 'Kubernetes', 'Docker', 'Cloud Computing', 'DevOps']
  },
  {
    name: 'Megha Kapoor',
    username: '@megha_kapoor',
    company: 'Amazon',
    experience: '5+ years',
    image: 'https://randomuser.me/api/portraits/women/50.jpg',
    companies: ['Apple', 'Paytm', 'Swiggy', 'Zomato'],
    skills: ['Swift', 'Kotlin', 'Android', 'iOS', 'Flutter']
  },
  {
    name: 'Arjun Malhotra',
    username: '@arjunmalhotra',
    company: 'Netflix',
    experience: '10+ years',
    image: 'https://randomuser.me/api/portraits/men/33.jpg',
    companies: ['Disney', 'HBO', 'Sony Pictures', 'Warner Bros'],
    skills: ['Java', 'Spring Boot', 'Microservices', 'REST API', 'GraphQL']
  },
  {
    name: 'Sneha Patil',
    username: '@sneha_patil',
    company: 'Adobe',
    experience: '4+ years',
    image: 'https://randomuser.me/api/portraits/women/55.jpg',
    companies: ['Microsoft', 'Dell', 'IBM', 'SAP'],
    skills: ['UX/UI', 'Figma', 'Adobe XD', 'Web Design', 'CSS']
  },
  {
    name: 'Vikas Reddy',
    username: '@vikas_reddy',
    company: 'Tesla',
    experience: '9+ years',
    image: 'https://randomuser.me/api/portraits/men/60.jpg',
    companies: ['SpaceX', 'Nvidia', 'Intel', 'AMD'],
    skills: [
      'AI',
      'Machine Learning',
      'Deep Learning',
      'Robotics',
      'TensorFlow'
    ]
  },
  {
    name: 'Priya Chauhan',
    username: '@priya_chauhan',
    company: 'Meta',
    experience: '8+ years',
    image: 'https://randomuser.me/api/portraits/women/61.jpg',
    companies: ['Instagram', 'WhatsApp', 'Snapchat', 'Pinterest'],
    skills: ['React', 'Next.js', 'GraphQL', 'Tailwind CSS', 'Web3']
  },
  {
    name: 'Rajesh Gupta',
    username: '@rajesh_gupta',
    company: 'Uber',
    experience: '6+ years',
    image: 'https://randomuser.me/api/portraits/men/48.jpg',
    companies: ['Ola', 'Lyft', 'Grab', 'Zomato'],
    skills: ['Data Engineering', 'Big Data', 'Kafka', 'Hadoop', 'SQL']
  },
  {
    name: 'Sanya Mehta',
    username: '@sanya_mehta',
    company: 'Apple',
    experience: '7+ years',
    image: 'https://randomuser.me/api/portraits/women/38.jpg',
    companies: ['Google', 'Microsoft', 'Samsung', 'Sony'],
    skills: [
      'Cybersecurity',
      'Ethical Hacking',
      'Blockchain',
      'Smart Contracts',
      'Solidity'
    ]
  }
]

const Mentor = () => {
  return (
    <div className='relative flex items-center justify-center h-screen bg-gray-950 text-white overflow-hidden'>
      {/* Infinite Scrolling Wrapper */}
      <div className='absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-80'></div>

      <div className='flex w-full overflow-hidden whitespace-nowrap'>
        <div
          className='flex animate-marquee'
          style={{ animation: 'marquee 20s linear infinite' }}
        >
          {/* Duplicate Cards for Seamless Loop */}
          {mentors.concat(mentors).map((mentor, index) => (
            <div
              key={index}
              className='bg-gray-800 p-6 rounded-2xl shadow-2xl w-96 text-center border border-gray-700 transform transition hover:scale-105 hover:shadow-blue-500/50 mx-4 flex-shrink-0'
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className='w-20 h-20 rounded-full mx-auto border-4 border-blue-500'
              />
              <h2 className='text-2xl font-semibold mt-3 text-blue-400'>
                {mentor.name}
              </h2>
              <p className='text-sm text-gray-400'>{mentor.username}</p>
              <p className='text-blue-500 text-sm mt-1'>
                Lead Engineer @ {mentor.company}
              </p>
              <p className='text-gray-300 mt-3'>
                🏆 {mentor.experience} of Experience
              </p>
              <p className='mt-3 text-sm text-gray-400'>Worked at:</p>
              <p className='text-blue-400 text-sm'>
                {mentor.companies.join(' | ')}
              </p>
              <div className='flex flex-wrap justify-center mt-4 gap-2'>
                {mentor.skills.map((skill, i) => (
                  <span
                    key={i}
                    className='bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS in JSX */}
      <style>
        {`
    @keyframes marquee {
      from { transform: translateY(0); }
      to { transform: translateY(-50%); }
    }

    .animate-marquee {
      display: flex ;
      gap: 2rem;
      flex-direction: column; /* Ensure items are stacked vertically */
      animation: marquee 60s linear infinite;
    }
  `}
      </style>
    </div>
  )
}

export default Mentor
