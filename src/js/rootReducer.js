import { combineReducers } from 'redux';
import CityReducer from './components/City/cityReducer';
import CityInformationReducer from './components/CityInformation/cityInformationReducer';
import SearchHistoryReducer from './components/SearchHistory/searchHistoryReducer';

// the function below combines all the reducers from the other 
// components so we can have access to the state of those components
const rootReducer = combineReducers({
// add reducers
    city: CityReducer,
    cityInformation: CityInformationReducer,
    searchHistory: SearchHistoryReducer
    
});

// export the combined state of all our components
export default rootReducer;
