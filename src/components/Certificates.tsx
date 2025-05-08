import { Element } from 'react-scroll'
import Score from '../../public/score.jpg'

export const Certificates = () => {
  return (
    <div className='border-b-2 py-4'>
      <Element name='certificates' className='max-w-5xl space-y-8 min-h-screen flex flex-col justify-center'>
        <h2 className='text-4xl font-bold mb-6 md:mb-8 flex items-center'>Certificates</h2>
        <p className='flex flex-col md:flex-row justify-between'>
          <div className='text-2xl font-bold text-[#4fada9] flex items-center'>TOEIC - Test of English for International Communication</div>
          <span className='text-teal-500 font-medium my-3 md:m-0'>2025 - 2027</span>
        </p>

        <p className='text-gray-600'>Score: 675/990</p>
        <ul className='mt-3 space-y-2'>
          <li className='flex items-center gap-2'>
            <span className='w-1.5 h-1.5 bg-teal-500 rounded-full'></span>
            <span>Listening: 390/495</span>
          </li>
          <li className='flex items-center gap-2'>
            <span className='w-1.5 h-1.5 bg-teal-500 rounded-full'></span>
            <span>Reading: 285/495</span>
          </li>
        </ul>

        <div className='mt-4'>
          <div className='mt-4'>
            <img src={Score} alt='TOEIC Certificate' className='w-full rounded-lg shadow-sm' />
          </div>
        </div>
      </Element>
    </div>
  )
}
