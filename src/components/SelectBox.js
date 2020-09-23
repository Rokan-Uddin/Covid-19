import React from 'react';
import moment from 'moment';
class SelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    fetch("https://covid19.mathdro.id/api/countries/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result.countries
          });
        },
        (error) => {
          this.setState({
            
          });
        }
      )
  }
  render() { 
    const {items } = this.state;
    	return( 
	        <div className="row"> 
          <div className="col-sm-6 text-center bb"> 
         
         <h3 > {this.props.country} </h3>
         <p> {moment(this.props.lastupdate).format("dddd, MMMM Do YYYY, h:mm:ss a")} </p>
          </div>
          <div className="col-sm-6">
          <form >
        <label>
          Pick your country : 
        <select defaultValue="" onChange={this.props.handleChange} >
        <option className="text-center" value="Global">Global </option>
          {items.map(item => ( 
            <option value={item.name}>
              {item.name} 
            </option>
          ))}
        </select>
        </label>
        
      </form>
          </div>
        </div>
        );
   }
}
export default SelectBox;