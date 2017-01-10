//**************************google/maps stuff**********************************************
//***********************************************************************************
var map = new google.maps.Map(
	document.getElementById('map'), 
	{
		center:{lat: 39.8282, lng: -98.5795},
		zoom: 4
	}
);

//a function to place a marker at a city location
function createMarker(city){
	var cityLL = {
		lat:city.lat,
		lng:city.lon
	}
}


//**************************react stuff**********************************************
//***********************************************************************************

function GoogleCity(props){
	return(
		<tr>
			<td className="city-name">{props.cityObject.city}</td>
			<td className="city-rank">{props.cityObject.yearRank}</td>
		</tr>
		)
}

var Cities = React.createClass({
	render: function(){
		var cityRows = [];
		this.props.cities.map(function(currentCity, index){
			createMarker(currentCity);
			cityRows.push(<GoogleCity cityObject={currentCity} key={index} />)
		});
		return(
			<div>
				<table>
					<thead>
						<tr>
						<th>City Name</th>
						<th>City Rank</th>
						</tr>
					</thead>
					<tbody>
					{cityRows}
					</tbody>
				</table>
			</div>
		)
	}
})

ReactDOM.render(
	<Cities cities={cities} />,
	document.getElementById('cities-container')
	)

// ES5 way - we pass the createClass and object. Must have a render property
// function GoogleCity(props){
// 	return(
// 		<div className="cityName">
// 			<table>
// 				<tr>
// 					<td>{props.cityObject.city}</td>
// 					<td>{props.cityObject.yearRank}</td>
// 				</tr>
// 			</table>
// 		</div>
// 		)
// }

// var Cities = React.createClass({
// 	render: function(){
// 		var cityRows = [];
// 		this.props.cities.map(function(currentCity, index){
// 			cityRows.push(<GoogleCity cityObject={currentCity} key={index} />)
// 		})
// 		return(
// 			<div>
// 				{cityRows}
// 			</div>
// 			)
// 	}
// });

// ReactDOM.render(
// 	<Cities cities={cities} />,
// 	document.getElementById('cities-container')
// 	)