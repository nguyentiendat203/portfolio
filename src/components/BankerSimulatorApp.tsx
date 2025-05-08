import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaBookmark } from 'react-icons/fa'

export const BankerSimulatorApp = () => {
  return (
    <div className='mb-8'>
      <div className='flex flex-col md:flex-row justify-between'>
        <a
          href='https://banker-algorithm-simulator.vercel.app/'
          target='_blank'
          className='text-2xl font-bold text-[#4fada9] flex items-center hover:underline hover:text-orange-400'
        >
          Banker Algorithms Simulator <FaExternalLinkAlt className='ml-1' />
        </a>
        <span className='text-teal-500 font-medium my-3 md:m-0'>09/2024 - 11/2024</span>
      </div>
      <p className='text-xl font-semibold text-gray-600 mb-4 '>Front-end Developer</p>
      <ul className='list-none text-lg pl-2 md:pl-5 mt-2 space-y-1'>
        <li className='flex gap-1'>
          <FaBookmark className='mt-2 text-yellow-500' size={14} />
          <span className='flex-1'>
            Frontend technologies:
            <strong> Javascript, React Framework, Ant Design, Tailwind CSS.</strong>
          </span>
        </li>
        <li className='flex gap-1'>
          <FaBookmark className='mt-2 text-yellow-500' size={14} />
          <span className='flex-1'>Research on operating systems, deadlock in operating systems</span>
        </li>
        <li className='flex gap-1'>
          <FaBookmark className='mt-2 text-yellow-500' size={14} />
          <span className='flex-1'>Learn about deadlock solving methods, research on banker algorithm to solve deadlock</span>
        </li>
        <li className='flex items-center gap-1'>
          <FaGithub size={16} className='text-black' />
          <strong>Github:</strong>
          <a className='text-[#4fada9] underline font-bold' target='_blank' href='https://github.com/nguyentiendat203/banker-algorithm-simulator'>
            Banker-algorithm-simulator
          </a>
        </li>
      </ul>
    </div>
  )
}
