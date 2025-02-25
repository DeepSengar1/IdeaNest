import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Target, Users } from 'lucide-react'

const DEMO_CAMPAIGNS = [
  {
    id: '1',
    title: 'CloudCV',
    description: 'About CloudCV CloudCV began in the summer of 2013',
    goalAmount: 50000,
    currentAmount: 32500,
    deadline: new Date('2024-05-01'),
    imageUrl: 'https://avatars.githubusercontent.com/u/20895851?s=200&v=4',
    category: 'Arts & Culture',
    creatorId: '1',
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    title: 'Google Cloud',
    description: 'Google is providing a api key which ysers can use..',
    goalAmount: 25000,
    currentAmount: 15750,
    deadline: new Date('2024-06-30'),
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0FnymZWBYiUAU9aL0Tug1a0_DvI1OSTk-Ig&s',
    category: 'Environment',
    creatorId: '2',
    createdAt: new Date('2024-01-20')
  }
]

const Fund = () => {
  const [campaigns] = useState(DEMO_CAMPAIGNS)

  return (
    <div className='flex justify-center flex-col p-10'>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='flex items-center text-3xl p-4'>
          Fuel the Future of Innovation
        </h1>
        <div className='flex gap-8 text-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-700'>
          {/* Projects Funded */}
          <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-bold text-yellow-400'>240</h1>
            <p className='text-gray-300 text-lg'>Projects Funded</p>
          </div>

          {/* Amount Raised */}
          <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-bold text-green-400'>₹20,000</h1>
            <p className='text-gray-300 text-lg'>Towards Creative World</p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-5'>
        {campaigns.map(campaign => (
          <Link
            key={campaign.id}
            to={`/campaign/${campaign.id}`}
            className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'
          >
            <img
              src={campaign.imageUrl}
              alt={campaign.title}
              className='w-full h-48 object-cover'
            />
            <div className='p-4 space-y-4'>
              <h3 className='text-xl font-semibold text-gray-900'>
                {campaign.title}
              </h3>
              <p className='text-gray-600 line-clamp-2'>
                {campaign.description}
              </p>
              <div className='space-y-2'>
                <div className='w-full bg-gray-200 rounded-full h-2'>
                  <div
                    className='bg-rose-500 h-2 rounded-full'
                    style={{
                      width: `${
                        (campaign.currentAmount / campaign.goalAmount) * 100
                      }%`
                    }}
                  />
                </div>
                <div className='flex justify-between text-sm'>
                  <span className='text-gray-600'>
                    ${campaign.currentAmount.toLocaleString()} raised
                  </span>
                  <span className='text-gray-600'>
                    ${campaign.goalAmount.toLocaleString()} goal
                  </span>
                </div>
              </div>
              <div className='flex justify-between items-center text-sm text-gray-500'>
                <span>{campaign.category}</span>
                <span>
                  {Math.ceil(
                    (new Date(campaign.deadline).getTime() -
                      new Date().getTime()) /
                      (1000 * 60 * 60 * 24)
                  )}{' '}
                  days left
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Fund
