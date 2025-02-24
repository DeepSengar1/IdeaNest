import IssueChat from './IssueChat'
import Community from './Community'
import { Link, Route, Routes } from 'react-router-dom'; 

function CommunityRoutes() {
  return (
    <>
      {/* Navigation Links */}
      <div className='flex flex-wrap items-center gap-x-6 px-6 py-4 rounded-xl ml-12 text-lg font-medium w-full text-white bg-neutral-900 fixed'>
        <Link to='/community/global'>Global</Link>
        <Link to='/community/issues'>Issues</Link>
      </div>

      {/* Main Content Section */}
      <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
        <div className='grid grid-cols-3 gap-4'>
          {/* Render components based on the current route */}
          <Routes>
            <Route index element={<Community />} />
            <Route path='/global' element={<Community />} />
            <Route path='/issues' element={<IssueChat />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default CommunityRoutes