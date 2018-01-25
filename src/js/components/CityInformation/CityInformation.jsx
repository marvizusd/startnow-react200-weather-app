import React from 'react';
export default class CityInformation extends React.Component{
    constructor(props){
        super(props)
    }
    
    render() {
        const {
            city,
            icon,
            lat = "",
            lon = "",
            temperature,
            pressure,
            humidity,
            lowTemp,
            highTemp,
            windSpeed,
            error,
            firstRender,
            pending
        } = this.props;
        return (
            <div className='float-left w-50 pr-2'>
                <div className="card">
                    <h5 className="card-header">City Information</h5>
                    <div className="card-body">
                    <div style={{textAlign:'center'}}>
                        <img src={"https://openweathermap.org/img/w/" + icon + ".png"} />
                        <h5 className="card-title">{city}</h5>
                        <p className="card-text">Lat/Long {lat}, {lon}</p>
                    </div>    
                        <hr />
                        <ul className="row" >
                            <li className="col col-md-4">
                                <strong>Temperature</strong>
                                <p>{temperature}</p>
                            </li>
                            <li className="col col-md-4">
                                <strong>Pressure</strong>
                                <p>{pressure}</p>
                            </li>
                            <li className="col col-md-4">
                                <strong>Humidity</strong>
                                <p>{humidity}</p>
                            </li>
                            <li className="col col-md-4">
                                <strong>Lowest Temp (F)</strong>
                                <p>{lowTemp}</p>
                            </li>
                            <li className="col col-md-4">
                                <strong>Highest Temp(F)</strong>
                                <p>{highTemp}</p>
                            </li>
                            <li className="col col-md-4">
                                <strong>Wind Speed</strong>
                                <p>{windSpeed}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}