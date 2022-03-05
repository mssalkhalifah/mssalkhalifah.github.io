import Image from 'next/image'

const Profile = () => {
  return (
    <div className='mb-4 flex flex-col items-center justify-center sm:flex-row'>
      <Image
        src={'/firefox_Dxp4vNtLPT.png'}
        className='rounded-full border-2 border-info shadow-md'
        height={128}
        width={128}
      />
      <div className=' mx-4 flex flex-col text-center sm:mx-0 sm:ml-6 sm:text-left'>
        <h1 className=' text-2xl font-bold'>
          Mohammad Sulaiman Saleh Alkhalifah
        </h1>
        <h2 className=' text-lg font-semibold'>
          Undergraduate Bachlor Computer Science
        </h2>
        <p>(temp/temp/tem/temp)</p>
      </div>
    </div>
  )
}

export default Profile
