import React, { Component } from 'react';

class ZipForm extends Component {
  render() {
    return (
      <div className='zip-form'>
        <form>
          <label htmlFor='zipcode'>Zip Code</label>
          <input
            className='form-control'
            type='input'
            name='zipcode' />
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
