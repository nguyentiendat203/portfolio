import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaBookmark } from 'react-icons/fa'

export const ChatApp = () => {
  return (
    <div className='mb-8'>
      <div className='flex flex-col md:flex-row justify-between'>
        <a
          href='https://github.com/nguyentiendat203/fullstack-chat-app'
          target='_blank'
          className='text-2xl font-bold text-[#4fada9] flex items-center hover:underline hover:text-orange-400'
        >
          Realtime Chat App <FaExternalLinkAlt className='ml-1' />
        </a>
        <span className='text-teal-500 font-medium my-3 md:m-0'>04/2025 - Present</span>
      </div>
      <p className='text-xl font-semibold text-gray-600 mb-4 '>Full-stack</p>
      <ul className='list-none text-lg pl-2 md:pl-5 mt-2 space-y-1'>
        <li className='flex gap-1'>
          <FaBookmark className='mt-2 text-yellow-500' size={14} />
          <span className='flex-1'>
            Frontend technologies:
            <strong>Javascript, ReactJS ,Tailwind CSS, daisyUI</strong>
          </span>
        </li>
        <li className='flex gap-1'>
          <FaBookmark className='mt-2 text-yellow-500' size={14} />
          <span className='flex-1'>
            Backend technologies:
            <strong>Node.js RESTful APIs, Express Framework. Working with database MongoDB Atlas Cloud.</strong>
          </span>
        </li>
        <li className='flex gap-1'>
          <FaBookmark className='mt-2 text-yellow-500' size={14} />
          <span className='flex-1'>Real-time messaging with Socket.io between two people.</span>
        </li>
        <li className='flex gap-1'>
          <FaBookmark className='mt-2 text-yellow-500' size={14} />
          <span className='flex-1'>Implementing Authentication & Authorization with JWT.</span>
        </li>
        <li className='flex gap-1'>
          <FaBookmark className='mt-2 text-yellow-500' size={14} />
          <span className='flex-1'>Global state management with Zustand.</span>
        </li>
        <li className='flex items-center gap-1'>
          <FaGithub size={16} className='text-black' />
          <strong>Github:</strong>
          <a target='_blank' className='text-[#4fada9] underline font-bold' href='https://github.com/nguyentiendat203/fullstack-chat-app'>
            Full-stack Realtime Chat App
          </a>
        </li>
      </ul>
    </div>
  )
}
