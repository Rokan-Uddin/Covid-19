import React from 'react';
import {Bar} from 'react-chartjs-2';
function Chart(props) {
	const active= props.confirmed-props.recovered;
	const maxvalur= props.confirmed ;
	const data ={
		labels: ['Confirmed','Recovered','Active','Deaths'],
		datasets: [
		{
			label:props.country,
			data:[props.confirmed,props.recovered,active, props.deaths],
			backgroundColor:['#525dc7','#6ef587','#edf060','#f75252']
		}
		]
	}
	const options= {
		title : {
			display:true,
			text:'Chart'
		},
		scales : {
			yAxes: [
			{
				ticks: {
					min:0,
					max:maxvalur,
					stepSize:50000
				}
			}
			]
		}
	}
	return(
		<Bar data={data} options={options} />
		);
}
export default Chart;