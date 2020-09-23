import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import SelectBox from './components/SelectBox';
const url = 'https://covid19.mathdro.id/api';
class Apps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmed: undefined,
      recovered:undefined,
      deaths:undefined,
      lastupdate:undefined,
      country:"Global"
    };
    this.handleChange = this.handleChange.bind(this);
    this.getDerivedStateFromPropsss = this.getDerivedStateFromPropsss.bind(this);
  }
 getDerivedStateFromPropsss(e) {
  let newurl= url;
  if(e !== "Global") newurl= `${url}/countries/${e}` ;
  fetch(newurl)
  .then(res=> res.json())
  .then((response)=> {
    this.setState({
        recovered: response.recovered.value,
        confirmed:response.confirmed.value,
        deaths:response.deaths.value,
        lastupdate:response.lastUpdate
    })
  })

}
handleChange (event) {
  this.setState({ country:event.target.value });
  this.getDerivedStateFromPropsss(event.target.value);
}
 async componentDidMount() {
      const api_call = await fetch(url);
      const response = await api_call.json();
      this.setState({
        recovered: response.recovered.value,
        confirmed:response.confirmed.value,
        deaths:response.deaths.value,
        lastupdate:response.lastUpdate     
      });    
  };

  render() {
    return (
      <div className="container">
      <h1 className=" text-center m-5"> Coronavirus (COVID-19) statistics </h1>
        <SelectBox 
        lastupdate={this.state.lastupdate} 
        handleChange={this.handleChange}
        country= {this.state.country}
         />
        
        <Card confirmed={this.state.confirmed} 
              recovered={this.state.recovered} 
              deaths={this.state.deaths}
              />


     
      </div>
        
    );
  }
}

export default Apps;