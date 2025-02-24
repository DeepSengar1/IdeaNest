import { NavLink, Route, Routes, Navigate } from 'react-router-dom'
import { useState } from "react";
import Ideas from './Ideas'
import Projects from './Projects'
import Create from './Create'
import ShowProjectDetails from './ShowProjectDetails' // Import your detail component
import Ai from './Ai'

function HomeRoutes () {
  const [selectedId, setSelectedId] = useState("");

  const linkClasses = ({ isActive }) =>
    isActive
      ? 'text-white border-b border-white pb-0.5'
      : 'text-gray-400 pb-0.5'

  return (
    <>
      <div className='bg-neutral-900 p-4 pl-16 flex justify-between items-center h-16'>
        <div className='flex gap-7 text-lg font-semibold'>
          <NavLink to='/home/ideas' className={linkClasses}>
            Ideas
          </NavLink>
          <NavLink to='/home/projects' className={linkClasses}>
            Projects
          </NavLink>
        </div>
        <div className='flex gap-4 items-center'>
        <Ai onShowId={setSelectedId} />
          <Create />
        </div>
      </div>

      <Routes>
        {/* Redirect the base /home route to /home/ideas */}
        <Route index element={<Navigate to='/home/ideas' replace />} />

        {/* Ideas Routes */}
        <Route path='ideas' element={<Ideas />} />
        <Route path='ideas/:id' element={<ShowProjectDetails />} />

        {/* Projects Routes */}
        <Route path='projects' element={<Projects />} />
        <Route path='projects/:id' element={<ShowProjectDetails />} />
      </Routes>
    </>
  )
}

export default HomeRoutes
