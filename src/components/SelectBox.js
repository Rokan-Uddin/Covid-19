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
            <div className="col-sm-6 text-center"> 
             <h3 className="text-left ml-5" > {this.props.country} Cases </h3>
             <p className="text-left ml-5 text-secondary"> Updated  {moment(this.props.lastupdate).format("MMM Do YYYY, h:mm a")} </p>
            </div>

            <div className="col-12 col-sm-6 text-center">
            <form >
                <label className="mr-4">
                   Pick your country : 
               </label>
             <select defaultValue="" onChange={this.props.handleChange} >
               <option className="text-center" value="Global">Global </option>
                {items.map(item => ( 
                <option value={item.name}>
                  {item.name} 
                </option>
              ))}
            </select>
        
          
        </form>
            </div>
        </div>
        );
   }
}
export default SelectBox;