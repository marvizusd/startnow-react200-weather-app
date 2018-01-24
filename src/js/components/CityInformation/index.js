import { connect } from 'react-redux';
import CityInformation from './CityInformation';

function convert(c){
    return 9/5 * (c - 273) +32;
}

function mapStoreToProps(store) {
    let temp, lowT, highT;
    if (store.city.temperature != "") {
      temp = convert(store.city.temperature).toFixed(2);
      lowT = convert(store.city.lowTemp).toFixed(2);
      highT = convert(store.city.highTemp).toFixed(2);
    } else {
      temp = "";
      lowT = "";
      highT = "";
    }
    return {
      temperature: temp,
      pressure: store.city.pressure,
      humidity: store.city.humidity,
      lowTemp: lowT,
      highTemp: highT,
      windSpeed: store.city.windSpeed,
      city: store.city.displayedCity,
      icon: store.city.icon,
      lat: store.city.lat,
      lon: store.city.lon,
      error: store.city.noResult,
      firstRender: store.city.firstRender,
      pending: store.city.pending
    };
  }

export default connect(mapStoreToProps)(CityInformation);