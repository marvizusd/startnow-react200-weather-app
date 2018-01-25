import React from 'react';
import { getWeather, updateCity } from "./cityActions";
import { updateWeatherInfo } from "../CityInformation/cityInformationActions";
import { addNewSearchItem } from "../SearchHistory/searchHistoryActions"

export default class City extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCityToggle = this.handleCityToggle.bind(this);
    }

    handleClick(event) {
        const {dispatch, selectedCity} = this.props;
        dispatch(getWeather(selectedCity));
        dispatch(addNewSearchItem(selectedCity));
    }
    handleInputChange(event) {
        const {dispatch} = this.props;
        const {value} = event.target;
        dispatch(updateCity(value));
    }
    handleCityToggle(event) {
        const {dispatch} = this.props;
        dispatch(getWeather(event.target.value));
        dispatch(addNewSearchItem(event.target.value));
    }

    render() {
        const selectedCity = this.props.selectedCity;
        return(
            <div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button onClick={this.handleCityToggle} value="San Diego" type="button" className="btn btn-info">San Diego</button>
                    <button onClick={this.handleCityToggle} value="New York" type="button" className="btn btn-info">New York</button>
                    <button onClick={this.handleCityToggle} value="Washington D.C" type="button" className="btn btn-info">Washington D.C</button>
                    <button onClick={this.handleCityToggle} value="London" type="button" className="btn btn-info">London</button>
                    <button onClick={this.handleCityToggle} value="Tokyo" type="button" className="btn btn-info">Tokyo</button>
                </div>
                <div className="input-group mb-3">
                    <input id="city" onChange={this.handleInputChange} value={selectedCity} type="text" className="form-control" placeholder="Enter a City" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                    <button onClick={this.handleClick} className="btn btn-outline-secondary" type="button">Go!</button>
                </div>
            </div>
          </div>
        )
    }
}