//**************************Google/maps stuff****************************************
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
	var marker = new google.maps.Marker({
		position: cityLL, 
		map: map, 
		title: city.city,
		icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2%7CFE7569'
	})
};





//**************************React stuff**********************************************
//***********************************************************************************

function GoogleCity(props){
	return(
		<tr>
			<td className="city-name">{props.cityObject.city}</td>
			<td className="city-rank">{props.cityObject.yearRank}</td>
		</tr>
		)
};

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
});

ReactDOM.render(
	<Cities cities={cities} />,
	document.getElementById('cities-container')
	)








