import reload from '../../assets/icon/refresh-page-option.png'

const Display = ( { currentWeather } ) =>{
    return(
        <div className="wrapper">
            <div className="display">
                <div className="title">
                    <p>Lviv</p>
                    <button className="button-icon"><img className="icon" src={reload} alt="refresh" title="Reload" /></button>
                </div>
            </div>
        </div>
    )
}

export default Display