import React from 'React';
import ZipForm from './ZipForm';
import { get } from 'axios';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcode: '',
      city: {},
      dates: [],
      selectedDate: null
    };


    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(zipcode) {
    get(`http://localhost:3004/weather/${zipcode}`)
      .then(({ data }) => {
        const { city, list: dates } = data;

        this.setState({
          zipcode,
          city,
          dates,
          selectedDate: null
        });
    });
  }

  render () {
    return <div className="app">
      <ZipForm onSubmit={this.onFormSubmit} />
    </div>;
  }
}

export default Index;
