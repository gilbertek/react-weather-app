import React, { Component } from 'React';
import WeatherListItem from './WeatherListItem';

class WeatherList extends Component {

  render() {
    const { days } = this.props;

    return (
      <div className="weather-list flex-parent">
        {days.map((day) =>
          <WeatherListItem
            key={day.dt}
            day={day}
          />
        )}
      </div>
    );
  }
}

export default WeatherList;
