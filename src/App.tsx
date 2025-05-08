import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Element } from 'react-scroll'

import { FaNodeJs } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'
import { FaFacebook } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'

import Avatar from '../public/avatar.jpg'
import { SideBar } from './SideBar'
import { NewsWebApp } from './components/NewsWebApp'
import { BankerSimulatorApp } from './components/BankerSimulatorApp'
import { BookStoreApp } from './components/BookStoreApp'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Certificates } from './components/Certificates'
import { ChatApp } from './components/ChatApp'

function Portfolio() {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      {/* Navbar - Mobile and Desktop */}
      <SideBar />

      {/* Main Content */}
      <main className='flex-1 p-6 mt-[64px] md:mt-0 md:ml-64'>
        <div>
          {/* About Section */}
          <div className='border-b-2 py-4'>
            <Element name='about' className='md:max-w-5xl space-y-8 min-h-screen flex flex-col justify-center'>
              <div>
                <div className='py-5 md:hidden'>
                  <img src={Avatar} alt='Profile' className='w-56 h-56 rounded-full object-contain shadow-lg m-auto bg-white' />
                </div>
                <div className='md:hidden flex flex-col items-center justify-between'>
                  <h1 className='text-3xl font-bold mb-4 text-gray-700'>NGUYEN TIEN DAT</h1>
                  <p className='text-xl text-gray-600 mb-4'>FullStack Developer Fresher/Intern</p>
                  <div className='flex gap-3'>
                    <a href='https://www.facebook.com/profile.php?id=100022670015322' target='_blank' className='text-gray-600 hover:text-blue-600 transition-colors'>
                      <FaFacebook size={30} className='text-[#455ffe]' />
                    </a>
                    <a href='https://github.com/nguyentiendat203' target='_blank' className='text-gray-600 hover:text-blue-600 transition-colors'>
                      <FaGithub size={30} className='text-black' />
                    </a>
                    <a href='mailto:nguyendat203.work@gmail.com' className='text-gray-600 hover:text-blue-600 transition-colors'>
                      <IoMailOutline size={30} />
                    </a>
                  </div>
                </div>
                <div className='hidden md:block'>
                  <h1 className='text-4xl font-bold mb-4 text-gray-700'>NGUYEN TIEN DAT</h1>
                  <p className='text-xl text-gray-600 mb-4'>FullStack Developer Fresher/Intern</p>
                  <div className='flex space-x-4'>
                    <a href='https://www.facebook.com/profile.php?id=100022670015322' target='_blank' className='text-gray-600 hover:text-blue-600 transition-colors'>
                      <FaFacebook size={30} className='text-[#455ffe]' />
                    </a>
                    <a href='https://github.com/nguyentiendat203' target='_blank' className='text-gray-600 hover:text-blue-600 transition-colors'>
                      <FaGithub size={30} className='text-black' />
                    </a>
                    <a href='mailto:nguyendat203.work@gmail.com' className='text-gray-600 hover:text-blue-600 transition-colors'>
                      <IoMailOutline size={30} />
                    </a>
                  </div>
                </div>
              </div>
              <p className='text-gray-800 text-lg leading-relaxed'>
                I am a senior student, I want to do an internship to accumulate and learn work experience. If I do well, I also want to become an employee to contribute to the
                company. <br />I am good at teamwork, friendly, and easy to approach.
              </p>
              <div className='text-[#2C3E50] text-lg'>
                <p className='space-x-2 text-lg'>
                  <strong className='gap-2 inline-flex'>
                    <FaReact className='text-blue-400 mt-1' size={20} />
                    Front-end:&nbsp;
                  </strong>
                  I have experience working with
                  <strong>ReactJS,Antd, Material UI, TailwindCSS, Bootstrap, Axios, and other technologies.</strong>
                </p>
                <p className='space-x-2 text-lg'>
                  <strong className='gap-2 inline-flex'>
                    <FaNodeJs className='text-green-500 mt-1' size={20} /> Back-end:&nbsp;
                  </strong>
                  I have experience working with
                  <strong>Node.JS, ExpressJS, MongoDB, MySQL, and Python with Django, Django Rest Framework.</strong>
                </p>
              </div>
            </Element>
          </div>

          {/* Experience Section */}
          <div className='border-b-2 py-4'>
            <Element name='experience' className='max-w-5xl space-y-8 min-h-screen flex flex-col justify-center'>
              <h2 className='text-4xl font-bold mb-6 md:mb-8 flex items-center'>Experience</h2>
              <ChatApp />
              <NewsWebApp />
              <BankerSimulatorApp />
              <BookStoreApp />
            </Element>
          </div>

          {/* Skills Section */}
          <Skills />

          {/* Education Section */}
          <Education />
          {/* Certificates Section */}
          <Certificates />
          {/* Interests Section */}
          <Element name='interests' className='space-y-4 min-h-screen flex flex-col justify-center'>
            <h2 className='text-3xl font-bold mb-6 md:mb-8  flex items-center'>Interests</h2>
            <span className='text-lg'>Besides studying and developing, I also enjoy listening to music and singing.</span>
            <span className='text-lg'>Sometimes when I have free time, I watch movies for entertainment.</span>
          </Element>
        </div>
      </main>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

export default App
