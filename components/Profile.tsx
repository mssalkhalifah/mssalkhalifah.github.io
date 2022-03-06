import Image from 'next/image'

const Profile = () => {
  return (
    <div className='mb-4 flex flex-col items-center justify-center sm:flex-row'>
      <div className='flex justify-center overflow-hidden rounded-full border-2 border-info'>
        <Image
          src={
            'https://res.cloudinary.com/domq50ciy/image/upload/v1646565441/protfolio/60398196_tyxwk5.jpg'
          }
          placeholder='blur'
          blurDataURL='https://res.cloudinary.com/domq50ciy/image/upload/q_1/v1646565441/protfolio/60398196_tyxwk5.jpg'
          height={150}
          width={150}
        />
      </div>
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
