import React, { useState } from 'react'
import { BsPencilSquare } from 'react-icons/bs' // Importing BsPencilSquare icon
import { GoFileMedia } from 'react-icons/go' // Importing GoFileMedia icon
import axios from 'axios'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
  } from '@/components/ui/card'

function Create () {
  const [isOpen, setIsOpen] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [fileURL, setFileURL] = useState('')
  const [fileName, setFileName] = useState('')
  const [fileType, setFileType] = useState('')
  const [isUploaded, setIsUploaded] = useState(false)

  // Form data state
  const [formData, setFormData] = useState({
    // userId: '',
    title: '',
    description: '',
    file: ''
  })

  // Handle text input changes
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = async e => {
    const file = e.target.files[0]
    if (!file) {
      alert('Please select a file first.')
      return
    }

    const formData = new FormData()
    formData.append('file', file)

    try {
      setUploading(true)
      const response = await axios.post(
        'http://localhost:3000/api/upload',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      )

      if (response.data.url) {
        setFileURL(response.data.url) // URL from Cloudinary
        setFileName(file.name)
        setFileType(file.type)
        setUploading(false)
        setIsUploaded(true)
        setFormData(prev => ({ ...prev, file: response.data.url }))
        alert('Upload successful!')
      } else {
        alert('Upload failed: ' + response.data.message)
      }
    } catch (error) {
      console.error('Upload failed', error)
      alert('Upload failed!')
    } finally {
      setUploading(false)
    }
  }

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault()
    if (!formData.title || !formData.description) {
      alert('Please fill out all fields.')
      return
    }

    try {
      await axios.post('http://localhost:3000/api/ideas', formData)
      alert('Idea submitted successfully!')
      setIsOpen(false) // Close modal on success
      setFormData({ title: '', description: '', file: '' })
      setIsUploaded(false)
    } catch (error) {
      console.error('Error submitting idea', error)
      alert('Error submitting idea')
    }
  }

  return (
    <>
      <Card>
      <div
        className='p-4 flex items-center gap-2'
        onClick={() => setIsOpen(true)} // Make sure setIsOpen is defined
      >
        <BsPencilSquare className='text-2xl text-blue-500' />
        <h2 className='text-2xl border-r-2 border-gray-500 pr-5'>Create</h2>
      </div>
      <hr className='border-t-2 border-gray-500 opacity-70' />
      <div className='pt-3 p-4 flex items-center gap-3'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGoCcF7eRTEP3w78U3_dZqrvQWG3hHZKWY2nzC_eWjO1bVi9rVLCxI2wL46aYwDSkFeg&usqp=CAU'
          alt='Profile'
          className='w-10 h-10 rounded-full bg-cover bg-center bg-no-repeat'
        />
        <p>Ignite Conversations, Share Your Brilliance</p>
      </div>
      </Card>

      {/* Popup Modal */}
      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-opacity-60 backdrop-blur-md'>
          <div className='bg-gray-800 text-white p-6 rounded-lg w-full max-w-lg relative'>
            <button
              className='absolute top-2 right-4 text-gray-400 hover:text-white'
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
            <div className='flex justify-between items-center'>
              <div className='flex gap-3'>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGoCcF7eRTEP3w78U3_dZqrvQWG3hHZKWY2nzC_eWjO1bVi9rVLCxI2wL46aYwDSkFeg&usqp=CAU'
                  alt='Profile'
                  className='w-12 h-12 rounded-full bg-cover bg-center bg-no-repeat'
                />
                <div>
                  <h2 className='text-xl font-semibold mb-2'>Dipanshu Zalke</h2>
                  <p className='text-gray-400 mb-4'>Creating new post</p>
                </div>
              </div>
              <div>
                <button className='relative px-6 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-800 to-indigo-900 hover:from-purple-700 hover:to-indigo-800 transition-all duration-300 shadow-lg overflow-hidden'>
                  <span className='absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-800 opacity-40 blur-xl'></span>
                  <span className='absolute inset-0 animate-pulse bg-purple-500 opacity-20 blur-lg'></span>
                  <span className='relative z-10'>Ask AI</span>
                </button>
              </div>
            </div>
            <textarea
              type='text'
              name='title'
              className='w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none'
              placeholder='Title of your project.'
              value={formData.title}
              onChange={handleChange}
              rows={2}
              required
            ></textarea>
            <textarea
              name='description'
              className='w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none'
              placeholder='What do you want to talk about?'
              value={formData.description}
              onChange={handleChange}
              rows={7}
              required
            ></textarea>

            {/* Buttons */}
            <div className='flex items-center justify-between'>
              {/* Add Photos */}
              <div className='mt-4'>
                <label
                  htmlFor='file-upload'
                  className={`flex items-center gap-2 cursor-pointer bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 ${
                    isUploaded ? 'bg-gray-500 cursor-not-allowed' : ''
                  }`}
                >
                  <GoFileMedia className='text-2xl text-green-400' />
                  <span className='text-lg font-medium'>
                    {uploading
                      ? 'Uploading...'
                      : isUploaded
                      ? 'Uploaded'
                      : 'Upload'}
                  </span>
                </label>
                <input
                  name='file'
                  id='file-upload'
                  value={formData.file.url}
                  type='file'
                  className='hidden'
                  onChange={handleFileChange}
                  disabled={uploading || isUploaded} // Disable the input once uploaded
                  accept='*/*' // Accepts all types of files
                />
                {fileURL && isUploaded && (
                  <div className='mt-4'>
                    <p className='text-white'>
                      Uploaded File:{' '}
                      <span className='text-blue-400'>{fileName}</span>
                    </p>
                    {fileType.includes('video') ? (
                      <video controls className='mt-2 max-w-xs rounded-lg'>
                        <source src={fileURL} type={fileType} />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      ' '
                    )}
                  </div>
                )}
              </div>

              <div className='flex gap-3 mt-3'>
                <button
                  className='px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-500'
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className='px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500'
                  onClick={handleSubmit}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Create
