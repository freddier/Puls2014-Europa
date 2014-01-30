var base_url = "http://query.yahooapis.com/v1/public/yql?";

function obtenerGeoInformacion(lat, lon) {
	var query = "SELECT * FROM geo.placefinder WHERE text='"+lat+", "+lon+"'";
	query += " AND gflags='R'";
	query = encodeURIComponent(query);

	var opciones = {
		url: base_url + "q=" + query,
		dataType: 'jsonp',
		jsonpCallback: 'geocallback',
		data: {
			format : 'json'
		}
	}

	$.ajax(opciones);
}

function geocallback(datos) {
	console.log(datos);
}