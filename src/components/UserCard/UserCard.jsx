
const CardsPlyer = ({name , age , sity , active}) => {
    return (
    <div className="CardUser">
        <h4>{name}</h4>
        <span>{age}</span>
        <p>{sity}</p>
        <span>{active}</span>
    </div>
    )
}

export default CardsPlyer
