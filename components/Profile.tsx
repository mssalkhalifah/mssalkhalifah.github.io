import { motion } from 'framer-motion'
import CloudiImage from './CloudiImage'

const Profile = () => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.05,
      },
    },
  }
  const letter = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  return (
    <div className='mb-4 flex flex-col items-center justify-center sm:flex-row'>
      <div className='flex justify-center overflow-hidden rounded-full border-2 border-info'>
        <CloudiImage
          src='protfolio/60398196_tyxwk5.jpg'
          width={150}
          height={150}
          alt='Image of my profile'
        />
      </div>
      <div className=' mx-4 flex flex-col text-center sm:mx-0 sm:ml-6 sm:text-left'>
        <h1 className=' text-2xl font-bold'>
          Mohammad Sulaiman Saleh Alkhalifah
        </h1>
        <h2 className=' text-lg font-semibold'>
          Undergraduate Bachlor Computer Science
        </h2>
        <motion.p
          variants={sentence}
          initial='hidden'
          animate='visible'
          className='rounded-lg bg-darkShades p-1 text-center text-lightShades'
        >
          {'Hi! I am currently working on my graduation project. '
            .split('')
            .map((char, i) => (
              <motion.span key={`${char}=${i}`} variants={letter}>
                {char}
              </motion.span>
            ))}
        </motion.p>
      </div>
    </div>
  )
}

export default Profile
