const Display = ( { currentWeather } ) =>{
    return(
        <div>
            {JSON.stringify(currentWeather)}
        </div>
    )
}

export default Display