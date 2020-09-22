import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Apps extends React.Component {
  constructor() {
    super();
    this.state = {
      confirmed: undefined,
      recovered:undefined,
      deaths:undefined
    };
  }
 async componentDidMount() {
      const api_call = await fetch(
        `https://covid19.mathdro.id/api`
      );
      const response = await api_call.json();
      this.setState({
        recovered: response.recovered.value,
        confirmed:response.confirmed.value,
        deaths:response.deaths.value
      });    
  };

  render() {
    return (
      <div className="container">
        <div className="row m-5">
          <h1 className="text-center">COVID-19 UPDATE</h1>
        </div>
        <div className="row">
      <div className="col-sm-4">
          <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">Confirmed</h5>
            <p className="card-text text-center">{this.state.confirmed}</p>
          </div>
          </div>

      </div>
      <div className="col-sm-4">

          <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">Recovered</h5>
            <p className="card-text text-center">{this.state.recovered}</p>
          </div>
          </div>
        
      </div>
      <div className="col-sm-4" >
                        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">Deaths</h5>
            <p className="card-text text-center">{this.state.deaths}</p>
          </div>
          </div>

      </div>
    </div>

     
      </div>
        
    );
  }
}

export default Apps;