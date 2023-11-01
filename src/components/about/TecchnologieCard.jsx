const TecchnologieCard = ({technologie}) => {
  return (
    <li className={`border w-[100px] p-2 grid place-items-center shadow-lg ${technologie.shadow} rounded-lg`}>
      <picture>
        <img src={technologie.image} alt="" />
      </picture>
    </li>

  )
}
export default TecchnologieCard