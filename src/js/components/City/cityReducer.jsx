import { types } from "./cityActions";

const defaultState = {
    temperature: '',
    pressure: '',
    humidity: '',
    lowTemp: '',
    highTemp: '',
    windSpeed: '',
    icon: '',
    selectedCity: '',
    displayedCity: '',
    lat:'',
    lon: '',
    noResult: false,
    firstRender: true,
    pending: false
}

export default function CityReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case types.GET_WEATHER + "_FULFILLED": {
            if (payload) {
                // console.log(payload, type)
                return {
                    ...state,
                    temperature: payload.main.temp,
                    pressure: payload.main.pressure,
                    humidity: payload.main.humidity,
                    lowTemp: payload.main.temp_min,
                    highTemp: payload.main.temp_max,
                    windSpeed: payload.main.speed,
                    icon: payload.weather[0].icon,
                    lat: payload.coord.lat,
                    lon: payload.coord.lon,
                    displayedCity: payload.name,
                    selectedCity: '',
                    noResult: false,
                    firstRender: false,
                    pending: false
                };
            } else {
                return {
                    ...state,
                    noResults: true,
                    selectedCity: ''
                };
            }
            break;
        }
        case types.GET_WEATHER + "_REJECTED": {
            console.log('REJECTED')
            return {
                ...state,
                noResult: true,
                pending: false,
                selectedCity: ""
            };
            break;
        }
        case types.UPDATE_CITY: {
            return {
                ...state,
                selectedCity: payload.city
            }
            break;
        }
        default: {
            return state;
        }
    }
}