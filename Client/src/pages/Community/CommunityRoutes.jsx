import React from 'react'

function CommunityRoutes() {
  return (
    <>
      {/* Navigation Links */}
      <div className='flex gap-5 p-5 ml-12 text-lg'>
        <Link to='/community/global'>Hackathons</Link>
        <Link to='/community/webinars'>Webinars</Link>
      </div>

      {/* Main Content Section */}
      <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
        <div className='grid grid-cols-3 gap-4'>
          {/* Render components based on the current route */}
          <Routes>
            <Route index element={<Hackathons />} />
            <Route path='/hackathons' element={<Hackathons />} />
            <Route path='/hackathons/show' element={<showHackathon />} />
            <Route path='/webinars' element={<Webinar />} />
            <Route path='/workshops' element={<Workshop />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default CommunityRoutes