import { FaBookmark } from 'react-icons/fa'
import { Element } from 'react-scroll'

export const Education = () => {
  return (
    <div className='border-b-2 py-4'>
      <Element name='education' className='max-w-5xl space-y-8 min-h-screen flex flex-col justify-center'>
        <h2 className='text-4xl font-bold mb-6 md:mb-8 flex items-center'>Education</h2>
        <div className='mb-8'>
          <div className='flex flex-col md:flex-row justify-between'>
            <a href='https://huit.edu.vn/' target='_blank' className='text-2xl font-bold text-[#4fada9] flex items-center hover:underline hover:text-orange-400'>
              Ho Chi Minh City University of Industry and Trade
            </a>
            <span className='text-teal-500 font-medium my-3 md:m-0'>08/2021 - Present</span>
          </div>
          <p className='text-xl font-semibold text-gray-600 mb-4 '>Information Technology - Software Technology</p>
          <ul className='list-none text-lg pl-3 md:pl-5 mt-2 space-y-1'>
            <li className='flex gap-2'>
              <FaBookmark className='mt-2 text-yellow-500' size={14} />
              <span className='flex-1'>
                I have learned many subjects like: Introduction to programming, Data Structures and Algorithms, Object-oriented programming, Computer network, Advanced Software
                technology.
              </span>
            </li>
            <li className='flex gap-2'>
              <FaBookmark className='mt-2 text-yellow-500' size={14} />
              <span className='flex-1'>
                During my time at school, I learned a lot of new things and made many new friends. Team-worked in a lot of projects with skills such as presentation, reporting,
                software data analysis, design UI website.
              </span>
            </li>
          </ul>
        </div>
      </Element>
    </div>
  )
}
