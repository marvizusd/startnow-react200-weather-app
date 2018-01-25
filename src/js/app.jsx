import React from 'react';
import City from './components/City';
import CityInformation from './components/CityInformation';
import SearchHistory from './components/SearchHistory';

export default class App extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className='container'>
        <div className="jumbotron mt-2">
          <div className="container">
            <h1 className="display-4">Origin Weather Application</h1>
            <p className="lead">Always know if you'll need an umbrella!</p>
        </div>
        </div>
        <br />
        <City />
        <CityInformation />
        <SearchHistory />
      </div>
    );
  }
}
