import { FaCss3Alt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiMongodb, SiMysql, SiTailwindcss, SiBootstrap } from 'react-icons/si'
import { Element } from 'react-scroll'

import { SiDjango } from 'react-icons/si'
import PythonLogo from '../../public/python.png'

export const Skills = () => {
  return (
    <div className='border-b-2'>
      <Element name='skills' className='md:max-w-5xl space-y-8 min-h-screen flex flex-col justify-center'>
        <h2 className='text-3xl font-bold mb-6'>Skills</h2>
        <p className='text-lg font-medium'>Programming Languages & Tools:</p>
        <div className='flex flex-wrap justify-center gap-6 text-5xl text-gray-700'>
          <FaJs size={50} className='text-yellow-500' />
          <FaReact size={50} className='text-blue-400' />
          <FaNodeJs size={50} className='text-green-600' />
          <img className='!h-[50px] !w-[50px] inline-block' src={PythonLogo} alt='React Logo' />
          <SiDjango size={50} color='#163c2d' />
          <SiMongodb size={50} className='text-green-700' />
          <SiMysql size={50} className='text-blue-600' />
          <FaHtml5 size={50} className='text-orange-500' />
          <FaCss3Alt size={50} className='text-blue-500' />
          <SiTailwindcss size={50} className='text-blue-400' />
          <SiBootstrap size={50} className='text-purple-500' />
          <FaGithub size={50} className='text-black' />
        </div>
        <div className='mt-10 text-left text-lg'>
          <h3 className='font-semibold'>Other skills:</h3>
          <ul className='list-none list-inside space-y-2 mt-2'>
            <li>
              ✅ <strong>Communication, critical-thinking</strong>
            </li>
            <li>
              ✅ <strong>Git, Github for Teamwork</strong>
            </li>
            <li>
              ✅ <strong>Responsive Web Design</strong>
            </li>
            <li>
              ✅ <strong>English for Work!</strong>
            </li>
          </ul>
        </div>
      </Element>
    </div>
  )
}
