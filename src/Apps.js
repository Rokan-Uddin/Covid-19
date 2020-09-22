import React from 'react';

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
      <div className="App">
      {this.state.confirmed}
      {this.state.recovered}
      {this.state.deaths}
      </div>
    );
  }
}

export default Apps;