import React, { Component } from 'react';

class ZipForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcode: ''
    };

    this.inputUpdated = this.inputUpdated.bind(this);
  }

  inputUpdated(e) {
    console.log(e);

    const { value } = e.target;

    this.setState({ zipcode: value });
  }

  render() {
    return (
      <div className='zip-form'>
        <form>
          <label htmlFor='zipcode'>Zip Code</label>
          <input
            className='form-control'
            type='input'
            name='zipcode'
            value={this.state.zipcode}
            onInput={this.inputUpdated} />
          <button
            type='submit'
            className='btn btn-success'>
            Get Forecast!</button>
        </form>
      </div>
    );
  }
}

export default ZipForm;
