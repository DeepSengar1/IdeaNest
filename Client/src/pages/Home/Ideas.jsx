import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { MdEventNote } from 'react-icons/md'
import {
  FaRegComment,
  FaRegBookmark,
  FaEllipsisH,
  FaRegThumbsUp
} from 'react-icons/fa'

function Ideas () {
  return (
    <>
      <div className='col-span-2 min-h-[90vh] rounded-xl bg-muted/50 p-5'>
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
                <div className='flex items-center gap-3'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGoCcF7eRTEP3w78U3_dZqrvQWG3hHZKWY2nzC_eWjO1bVi9rVLCxI2wL46aYwDSkFeg&usqp=CAU'
                    alt='Profile'
                    className='w-10 h-10 rounded-full'
                  />
                  <div>
                    <h3 className='font-semibold text-lg pb-0.5'>Epsilon</h3>
                    <div className='flex gap-1 items-center'>
                      <MdEventNote className='text-[15px] text-gray-400' />{' '}
                      <p className='text-gray-400 text-sm'>An hour ago</p>
                    </div>
                  </div>
                </div>
                <button className='text-gray-400 hover:text-white'>
                  <FaEllipsisH />
                </button>
            </CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent>
            <h2 className='text-2xl pb-2'>Title of the project.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              asperiores minima odio minus. Hic nam perspiciatis ab quos! Nobis
              deleniti veniam a praesentium corporis minus similique dolores
              repellat fugit pariatur. Ab aspernatur fuga magni placeat cumque
              pariatur maxime quam unde perspiciatis possimus atque eum ut sit,
              fugiat asperiores iusto ad commodi. Deleniti, enim. Odit ad illum
              nihil quas delectus repellat.
            </p>
          </CardContent>
          <CardFooter className='flex justify-between items-center text-gray-400'>
            <div className='flex gap-5'>
              <button className='flex items-center gap-1 hover:text-white'>
                <FaRegThumbsUp /> Like
              </button>
              <button className='flex items-center gap-1 hover:text-white'>
                <FaRegComment /> Comment
              </button>
            </div>
            <button className='flex items-center gap-1 hover:text-white'>
              <FaRegBookmark /> Save
            </button>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default Ideas
