interface CardProps {
  image?: string
  description?: string
  title?: string
  className?: string
}

const Card = ({ image, description, title, className }: CardProps) => {
  return (
    <div
      className={` ${className} max-w-sm overflow-hidden rounded bg-lightShades shadow-lg`}
    >
      <img className="w-full" src={image} alt="Card Image" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className=" text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2"></div>
    </div>
  )
}

export default Card
