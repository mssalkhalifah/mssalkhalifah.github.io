interface CardProps {
  image?: string
  description?: string
}

const Card = ({ image, description }: CardProps) => {
  return (
    <div className=" bg-danger bg-fixed">
      <img src={image} className=" z-10 max-w-xs scale-95" />
      <div className=" max-w-xs flex-col overflow-visible bg-lightShades shadow-lg">
        <div></div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
