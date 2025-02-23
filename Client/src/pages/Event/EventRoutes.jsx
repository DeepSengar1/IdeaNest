import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'; // Import Link and Route from react-router-dom
import Hackathons from './Hackathons';
import Webinar from './Webinar';
import Workshop from './Workshop';

function EventRoutes() {
  return (
    <>
      {/* Navigation Links */}
      <div className='flex gap-5 p-5 ml-12 text-lg'>
        <Link to='/events/hackathons'>Hackathons</Link>
        <Link to='/events/webinars'>Webinars</Link>
        <Link to='/events/workshops'>Workshops</Link>
      </div>

      {/* Main Content Section */}
      <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
        <div className='grid grid-cols-3 gap-4'>
          {/* Render components based on the current route */}
          <Routes>
            <Route index element={<Hackathons />} />
            <Route path='/hackathons' element={<Hackathons />} />
            <Route path='/webinars' element={<Webinar />} />
            <Route path='/workshops' element={<Workshop />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default EventRoutes;
