import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Link as ScrollLink, Element, scroller, Events } from 'react-scroll'
import { FiBookOpen } from 'react-icons/fi'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { LuFileCode2 } from 'react-icons/lu'
import { PiGraduationCap } from 'react-icons/pi'
import { FaCss3Alt, FaExternalLinkAlt, FaHtml5, FaJs, FaNodeJs, FaRegHeart } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'
import { FaFacebook } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaBookmark } from 'react-icons/fa'
import { SiMongodb, SiMysql, SiTailwindcss, SiBootstrap } from 'react-icons/si'
import { SiDjango } from 'react-icons/si'

import PythonLogo from '../public/python.png'
import Avatar from '../public/avatar.jpg'

const sections = [
  { id: 'about', icon: FiBookOpen, label: 'About Me' },
  { id: 'experience', icon: IoBriefcaseOutline, label: 'Experience' },
  { id: 'skills', icon: LuFileCode2, label: 'Skills' },
  { id: 'education', icon: PiGraduationCap, label: 'Education' },
  { id: 'interests', icon: FaRegHeart, label: 'Interests' }
]

function Portfolio() {
  const [activeSection, setActiveSection] = useState('about')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {})
    Events.scrollEvent.register('end', () => {})

    const sectionId = location.hash.replace('#', '') || 'about'
    setActiveSection(sectionId)
    scroller.scrollTo(sectionId, {
      duration: 600,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -100
    })

    return () => {
      Events.scrollEvent.remove('begin')
      Events.scrollEvent.remove('end')
    }
  }, [location])

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      {/* Navbar - Mobile and Desktop */}
      <div className='md:hidden p-4 bg-[#4fada9] text-white fixed top-0 left-0 right-0 z-50'>
        <div className='flex justify-between items-center'>
          <span className='text-lg uppercase font-semibold text-gray-700'>NGUYEN TIEN DAT</span>
          <button className='text-white text-2xl' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            ☰
          </button>
        </div>

        <div className={`md:hidden absolute top-full left-0 w-full bg-[#4fada9] shadow-lg z-40  ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <nav className='space-y-2'>
            {sections.map(({ id, icon: Icon, label }) => (
              <ScrollLink
                key={id}
                to={id}
                spy={true}
                smooth={true}
                duration={800}
                offset={-100}
                activeClass='active'
                onSetActive={() => setActiveSection(id)}
                className='cursor-pointer'
              >
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeSection === id ? 'text-white font-bold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  <span className='uppercase font-semibold'>{label}</span>
                </button>
              </ScrollLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Left Sidebar (Nav) */}
      <aside className={`w-64 bg-[#4fada9] shadow-lg h-full fixed top-0 left-0 z-40 hidden md:block`}>
        <div className='h-full flex flex-col justify-center'>
          <div>
            <img src={Avatar} alt='Profile' className='w-48 h-48 rounded-full object-cover shadow-lg m-auto' />
          </div>
          <nav className='space-y-2'>
            {sections.map(({ id, icon: Icon, label }) => (
              <ScrollLink
                key={id}
                to={id}
                spy={true}
                smooth={true}
                duration={800}
                offset={-100}
                activeClass='active'
                onSetActive={() => setActiveSection(id)}
                className='cursor-pointer'
              >
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`w-full flex justify-center items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeSection === id ? 'text-white font-bold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  <span className='uppercase font-semibold'>{label}</span>
                </button>
              </ScrollLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className='flex-1 p-6 mt-[64px] md:mt-0 md:ml-64'>
        <div>
          {/* About Section */}
          <div className='border-b-2 py-4'>
            <Element name='about' className='md:max-w-5xl space-y-8 min-h-screen flex flex-col justify-center'>
              <div>
                <div className='py-5 md:hidden'>
                  <img src={Avatar} alt='Profile' className='w-48 h-48 rounded-full object-cover shadow-lg m-auto' />
                </div>
                <div className='md:hidden flex flex-col items-center justify-between'>
                  <h1 className='text-3xl font-bold mb-4 text-gray-700'>NGUYEN TIEN DAT</h1>
                  <p className='text-xl text-gray-600 mb-4'>Intern Back-end Developer</p>
                  <div className='flex gap-3'>
                    <a href='https://www.facebook.com/profile.php?id=100022670015322' target='_blank' className='text-gray-600 hover:text-blue-600 transition-colors'>
                      <FaFacebook size={30} className='text-[#455ffe]' />
                    </a>
                    <a href='https://github.com/NguyenDat-2003' target='_blank' className='text-gray-600 hover:text-blue-600 transition-colors'>
                      <FaGithub size={30} className='text-black' />
                    </a>
                    <a href='mailto:nguyendat203.work@gmail.com' className='text-gray-600 hover:text-blue-600 transition-colors'>
                      <IoMailOutline size={30} />
                    </a>
                  </div>
                </div>
                <div className='hidden md:block'>
                  <h1 className='text-4xl font-bold mb-4 text-gray-700'>NGUYEN TIEN DAT</h1>
                  <p className='text-xl text-gray-600 mb-4'>Intern Back-end Developer</p>
                  <div className='flex space-x-4'>
                    <a href='https://www.facebook.com/profile.php?id=100022670015322' target='_blank' className='text-gray-600 hover:text-blue-600 transition-colors'>
                      <FaFacebook size={30} className='text-[#455ffe]' />
                    </a>
                    <a href='https://github.com/NguyenDat-2003' target='_blank' className='text-gray-600 hover:text-blue-600 transition-colors'>
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
                    <a className='text-[#4fada9] underline font-bold' target='_blank' href='https://github.com/NguyenDat-2003/banker-algorithm-simulator'>
                      Banker-algorithm-simulator
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mb-8'>
                <div className='flex flex-col md:flex-row justify-between'>
                  <a href='#' className='text-2xl font-bold text-[#4fada9] flex items-center hover:underline hover:text-orange-400'>
                    Book Store <FaExternalLinkAlt className='ml-1' />
                  </a>
                  <span className='text-teal-500 font-medium my-3 md:m-0'>07/2024 - 10/2024</span>
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
                    <a className='text-[#4fada9] underline font-bold' href='https://github.com/NguyenDat-2003/book-store-frontend'>
                      Front-end,
                    </a>
                    <a className='text-[#4fada9] underline font-bold ml-2' href='https://github.com/NguyenDat-2003/book-store-backend'>
                      Back-end
                    </a>
                  </li>
                </ul>
              </div>
            </Element>
          </div>

          {/* Skills Section */}
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

          {/* Education Section */}
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
                      I have learned many subjects like: Introduction to programming, Data Structures and Algorithms, Object-oriented programming, Computer network, Advanced
                      Software technology.
                    </span>
                  </li>
                  <li className='flex gap-2'>
                    <FaBookmark className='mt-2 text-yellow-500' size={14} />
                    <span className='flex-1'>
                      During my time at school, I learned a lot of new things and made many new friends. Team-worked in a lot of projects with skills such as presentation,
                      reporting, software data analysis, design UI website.
                    </span>
                  </li>
                </ul>
              </div>
            </Element>
          </div>

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
