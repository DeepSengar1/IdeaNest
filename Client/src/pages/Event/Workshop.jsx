import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { Calendar, Clock } from 'lucide-react'

function Workshop () {
  return (
    <>
      <div className='col-span-2 min-h-[90vh] rounded-xl bg-muted/50 p-4'>
        <Card>
          <CardHeader>
            <CardTitle className='flex justify-between items-center'>
              <div>Mastering Digital Marketing Strategies</div>
              {/* Time & Date */}
              <div className='flex gap-5 items-center justify-between text-gray-400 text-sm mt-3'>
                <div className='flex items-center gap-2'>
                  <Clock size={16} />
                  <span>10am - 5pm</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Calendar size={16} />
                  <span>05/02/2025</span>
                </div>
              </div>
            </CardTitle>
            <CardDescription>
              Join our hands-on workshop to learn how to create impactful
              campaigns and grow your brand Jane Smith is a Digital Marketing
              Specialist with over 10 years of experience, helping brands boost
              their online presence and achieve measurable growth.
            </CardDescription>
          </CardHeader>
          <hr className='border-gray-700' />
          <CardContent className='mt-3 text-sm font-medium'>
            <p className='text-white'>
              <span className='font-bold'>3 days</span> workshop with a{' '}
              <span className='font-bold'>refreshing meal</span>
            </p>
            <p className='mt-2'>
              <span className='font-bold'>Venue:</span> Eklavya Hall, 2nd floor
              GHRCE, Shraddha Park, Hingna, Nagpur 23.
            </p>
          </CardContent>
          <CardFooter className=' flex items-center justify-between'>
            <button className='bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 px-5 rounded-lg'>
              Register Now
            </button>
            <span className='text-white font-bold'>Only at ₹500</span>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default Workshop
