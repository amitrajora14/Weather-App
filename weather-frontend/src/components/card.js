
const Card = ({data}) => {
    return (
        <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column', marginTop: '10px',color:"white"}}>
            <p>City Name : {data[0]?.lname}</p>
            <p>Country Name : {data[0]?.cname}</p>
            <p>Temperature : {data[0]?.tname}</p>
            <p>Humidity : {data[0]?.humidity}</p>
            <p>Region Name : {data[0]?.lregion}</p>
            <p>Continent Name : {data[0]?.continent}</p>

        </div>
    )
}

export default Card;