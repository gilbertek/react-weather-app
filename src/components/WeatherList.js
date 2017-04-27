import React, { Component } from 'React';
import WeatherListItem from './WeatherListItem';

class WeatherList extends Component {

  render() {
    const { days, onDayClicked } = this.props;

    return (
      <div className="weather-list flex-parent">
        {days.map((day, index) =>
          <WeatherListItem
            key={day.dt}
            day={day}
            index={index}
            onDayClicked={onDayClicked}
          />
        )}
      </div>
    );
  }
}

export default WeatherList;
