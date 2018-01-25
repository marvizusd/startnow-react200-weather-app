import axios from 'axios';

export const types = {
    GET_WEATHER: "GET_WEATHER",
    UPDATE_CITY: "UPDATE_CITY",
    GET_FORECAST: "GET_FORECAST"
};

// this can also read as getWeather(selectedCity) as it was dispatched from City.jsx file
export function getWeather(city) {
    return {
        type: types.GET_WEATHER,
        payload: axios
            .get(
                "http://api.openweathermap.org/data/2.5/weather?q=" +
                city + "&APPID=d52bb2fa5ba6405c774fa46956543710"
            )
            .then(function (res){
                console.log('GET_WEATHER');
                return res.data
            })
            .catch(function (err){
                console.log(err)
            })
    };
}

export function getForecast(city){
    return {
        type: types.GET_FORECAST,
        payload: axios
            .get(
                "http://api.openweathermap.org/data/2.5/forecast?q=" +
                city + "&APPID=d52bb2fa5ba6405c774fa46956543710"
            ).then(function(res){
                console.log("GET_FORECAST",res);
                return res.data
            })
            .catch(function(err){
                console.log(err);
            })
    };
}

export function updateCity(city){
    return {
        type: types.UPDATE_CITY,
        payload: {
            city: city
        }
    };
}