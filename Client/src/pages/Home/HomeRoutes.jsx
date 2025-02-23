import React from 'react'
import { Link, Route, Routes } from 'react-router-dom' // Import Link and Route from react-router-dom
import Ideas from './Ideas'
import Projects from './Projects'
import Create from './Create'

function HomeRoutes () {
  return (
    <>
      {/* Navigation Links */}
      <div className='flex gap-5 p-5 ml-12 text-lg'>
        <Link to='/home/ideas'>Ideas</Link>
        <Link to='/home/projects'>Projects</Link>
      </div>

      {/* Main Content Section */}
      <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
        <div className='grid grid-cols-3 gap-4'>
          {/* Render components based on the current route */}
          <div className='col-span-2 min-h-[90vh] rounded-xl bg-muted/50 p-4'>
            <Create />
            <Routes>
              <Route index element={<Ideas />} />
              <Route path='/ideas' element={<Ideas />} />
              <Route path='/projects' element={<Projects />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeRoutes
