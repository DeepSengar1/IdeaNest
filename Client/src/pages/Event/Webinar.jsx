import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
  } from '@/components/ui/card'
  import {
    FaUser,
    FaBuilding,
    FaRupeeSign,
    FaUsers,
    FaArrowRight
  } from 'react-icons/fa'
  import { IoBagHandleSharp } from 'react-icons/io5'

function Webinar () {
  return (
    <div className='col-span-2 min-h-[90vh] rounded-xl bg-muted/50 p-4'>
    <Card className=''>
      <CardHeader className='p-5'>
        <CardTitle className='text-2xl'>
          DSA + System Design To Crack FAANG Interview
        </CardTitle>
        <hr className='border-gray-700 my-4' />

        <CardDescription className=''>
          Hosted by
          <div className='flex items-center gap-2 mt-2'>
            <FaUser className='text-gray-300' />
            <span className='font-semibold'>varun</span>
            <span className='text-gray-400'>(Senior SDE @ Microsoft)</span>
          </div>
          <div className='flex gap-4 mt-4'>
            <div className='bg-gray-800 text-white px-7 py-1 rounded-full flex items-center gap-3'>
              <IoBagHandleSharp className='text-3xl' />{' '}
              <div className='flex flex-col'>
                <h2 className='text-lg'>Microsoft</h2>{' '}
                <p className='text-gray-400'>Senior SDE</p>
              </div>
            </div>
            <div className='bg-gray-800 text-white px-7 py-1 rounded-full flex items-center gap-3'>
              <IoBagHandleSharp className='text-3xl' />{' '}
              <div className='flex flex-col'>
                <h2 className='text-lg'>Salesforce</h2>{' '}
                <p className='text-gray-400'>Senior SDE</p>
              </div>
            </div>
          </div>
        </CardDescription>
      </CardHeader>
      <hr className='border-gray-700 my-4' />
      <CardContent className='text-gray-300 text-lg'>
        <p>
          Enroll in our boot camp to become a job-ready programmer by mastering
          Data Structures and Algorithms & System Design, and land your dream
          job in Product-Based Companies. Specially if you are introspect to
          shift...
        </p>
        <p className='text-blue-500 font-semibold mt-2 cursor-pointer flex items-center gap-1'>
          Read More <FaArrowRight />
        </p>
        <div className='flex gap-4 pt-2'>
          <span className='bg-gray-700 text-white px-3 py-1 rounded-lg'>
            21 | 2 | 25 - 23 | 2 | 25
          </span>
          <span className='bg-gray-700 text-white px-3 py-1 rounded-lg'>
            Mumbai
          </span>
        </div>
        <div className='flex justify-between pt-4'>
          <div className='flex items-center gap-1 text-white font-semibold'>
            <FaRupeeSign />
            5,00,000
          </div>
          <div className='flex items-center gap-2 text-white'>
            <FaUsers className='text-green-400' /> 89 students registered
          </div>
        </div>
      </CardContent>
      <hr className='border-gray-700 my-4' />
      <CardFooter className='flex justify-between items-center'>
        <button className='bg-white text-black font-bold py-3 px-6 rounded-full w-full text-lg shadow-md hover:shadow-xl'>
          Register now
        </button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Webinar
