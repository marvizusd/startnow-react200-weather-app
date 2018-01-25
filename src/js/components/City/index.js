import { connect } from 'react-redux';
import City from './City';

function mapStoreToProps(store) {
    // parameter (store) is bringing the object from the rootreducer which can be specified by using the (object.name) you set
    // console.log(store.searchHistory, store.city, store.cityInformation)
    return  {
        displayedCity: store.city.displayedCity,
        selectedCity: store.city.selectedCity,
        temperature: store.city.temperature,
        pressure: store.city.pressure,
        humidity: store.city.humidity,
        lowTemp: store.city.lowTemp,
        highTemp: store.city.highTemp,
        windSpeed: store.city.windSpeed,
        icon: store.city.icon,
        lat: store.city.lat,
        lon: store.city.lon
    };
}
// this ties everything back up to your component to access the state from your component
export default connect(mapStoreToProps)(City);