import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaBookmark } from 'react-icons/fa'

export const BookStoreApp = () => {
  return (
    <div className='mb-8'>
      <div className='flex flex-col md:flex-row justify-between'>
        <a
          target='_blank'
          href='https://github.com/nguyentiendat203/full-stack-book-store'
          className='text-2xl font-bold text-[#4fada9] flex items-center hover:underline hover:text-orange-400'
        >
          Book Store <FaExternalLinkAlt className='ml-1' />
        </a>
        <span className='text-teal-500 font-medium my-3 md:m-0'>07/2024 - Present</span>
      </div>
      <p className='text-xl font-semibold text-gray-600 mb-4 '>Full-stack</p>
      <ul className='list-none text-lg pl-2 md:pl-5 mt-2 space-y-1'>
        <li className='flex gap-1'>
          <FaBookmark className='mt-2 text-yellow-500' size={14} />
          <span className='flex-1'>
            Frontend technologies:
            <strong>Javascript, HTML, CSS, React Framework, Ant Design , call API with axios ,Tailwind CSS, Cloudinary.</strong>
          </span>
        </li>
        <li className='flex gap-1'>
          <FaBookmark className='mt-2 text-yellow-500' size={14} />
          <span className='flex-1'>
            Backend technologies:
            <strong>Javascript, Node.js RESTful APIs, Express Framework. Working with database MySQL, Sequelize Node.js ORM.</strong>
          </span>
        </li>
        <li className='flex gap-1'>
          <FaBookmark className='mt-2 text-yellow-500' size={14} />
          <span className='flex-1'>Configuring CORS in back-end express middleware.</span>
        </li>
        <li className='flex gap-1'>
          <FaBookmark className='mt-2 text-yellow-500' size={14} />
          <span className='flex-1'>Staff management, book management, JWT Authentication, Authorization, decentralize permissions at back-end.</span>
        </li>
        <li className='flex gap-1'>
          <FaBookmark className='mt-2 text-yellow-500' size={14} />
          <span className='flex-1'>Implement pagination, search and user cart management functions</span>
        </li>

        <li className='flex items-center gap-1'>
          <FaGithub size={16} className='text-black' />
          <strong>Github:</strong>
          <a className='text-[#4fada9] underline font-bold' target='_blank' href='https://github.com/nguyentiendat203/full-stack-book-store'>
            Full-stack book store
          </a>
        </li>
      </ul>
    </div>
  )
}
