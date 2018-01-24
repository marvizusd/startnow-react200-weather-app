import { types } from "./cityInformationActions";

const defaultState = {
    temperature: '',
    pressure: '',
    humidity: '',
    lowTemp: '',
    highTemp: '',
    windSpeed: '',
    icon: '',
    city: '',
    lat: '',
    lon:''
};

function convert(c){
    return 9 / 5 * (k-273) + 32;
}

export default function CityInformationReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch(type){
        case types.UPDATE_WEATHER_INFO: {
            return {
                ...state,
                temperature:convert(payload.main.temp),
                pressure: payload.main.pressure,
                humidity: payload.main.humidity,
                lowTemp: convert(payload.main.lowTemp),
                highTemp: convert(payload.main.highTemp),
                windSpeed: payload.wind.speed,
                icon: payload.weather[0].icon,
                lat: payload.coord.lat,
                lon: payload.coord.lon
            };
        }
        default: {
            return state;
        }
    }
}