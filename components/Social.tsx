import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { TiSocialAtCircular } from 'react-icons/ti'
import Header from './Header'

const Social = () => {
  return (
    <div className='flex flex-col place-items-center pb-6'>
      <div className=''>
        <Header>
          Social <TiSocialAtCircular className=' ml-2' />
        </Header>
      </div>
      <p className=' mb-4 text-lg font-semibold'>@mssalkhalifah</p>
      <div className=' flex scale-150 flex-row items-center justify-evenly'>
        <a
          href='https://github.com/mssalkhalifah'
          target='_blank'
          className=' transition-color rounded-full bg-primary p-2 shadow-md hover:bg-info'
          rel='noreferrer'
        >
          <IoLogoGithub className=' text-lightShades' />
        </a>
        |
        <a
          href='https://linkedin.com/in/mssalkhalifah'
          target='_blank'
          className=' rounded-full bg-primary p-2 shadow-md transition-colors hover:bg-info'
          rel='noreferrer'
        >
          <IoLogoLinkedin className='  text-lightShades' />
        </a>
      </div>
    </div>
  )
}

export default Social
