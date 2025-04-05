import { useEffect, useState } from 'react'
import { Link as ScrollLink, scroller, Events } from 'react-scroll'

import { FiBookOpen } from 'react-icons/fi'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { LuFileCode2 } from 'react-icons/lu'
import { PiGraduationCap } from 'react-icons/pi'
import { PiMedalLight } from 'react-icons/pi'
import { FaRegHeart } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import Avatar from '../public/avatar.jpg'

const sections = [
  { id: 'about', icon: FiBookOpen, label: 'About Me' },
  { id: 'experience', icon: IoBriefcaseOutline, label: 'Experience' },
  { id: 'skills', icon: LuFileCode2, label: 'Skills' },
  { id: 'education', icon: PiGraduationCap, label: 'Education' },
  { id: 'certificates', icon: PiMedalLight, label: 'Certificates' },
  { id: 'interests', icon: FaRegHeart, label: 'Interests' }
]
export const SideBar = () => {
  const [activeSection, setActiveSection] = useState<string>('about')
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
    <>
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
      <aside className={`w-64 bg-[#4fada9] shadow-lg h-full fixed top-0 left-0 z-40 hidden md:block`}>
        <div className='h-full flex flex-col justify-center'>
          <div>
            <img src={Avatar} alt='Profile' className='w-48 h-48 rounded-full object-contain bg-white shadow-lg m-auto' />
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
    </>
  )
}
