$(document).ready(function(){
	mapboxgl.accessToken = 'pk.eyJ1Ijoia25vdyIsImEiOiJjaXY3NjBzbzEwMDA2Mm9xdDQ0YmFjZ3ZzIn0.mp877pLCiwqf5AoT4Yq5KA';
	var map = new mapboxgl.Map({
		container: 'map',
		center: [-122.420679, 37.772537],
		zoom: 16,
		pitch: 45,
		bearing: -17.6,
		style: 'mapbox://styles/mapbox/dark-v9'
	});


	map.on('load', function() {
		map.addLayer({
			'id': '3d-buildings',
			'source': 'composite',
			'source-layer': 'building',
			'filter': ['==', 'extrude', 'true'],
			'type': 'fill-extrusion',
			'minzoom': 15,
			'paint': {
				'fill-extrusion-color': '#1F3A93',
				'fill-extrusion-height': {
					'type': 'identity',
					'property': 'height'
				},
				'fill-extrusion-base': {
					'type': 'identity',
					'property': 'min_height'
				},
				'fill-extrusion-opacity': .4
			}
		});
	});
});

$(document).ready(function(){
	$(".glyphicon-chevron-up").on('click', function(event) {
		$('html, body').animate({
			scrollTop: $(window).scrollTop() - $(window).height()
		}, 800)
	})

	$(".glyphicon-chevron-down").on('click', function(event){
		$('html, body').animate({
			scrollTop: $(window).scrollTop() + $(window).height()}, 800)
	})
})

$(document).ready(function() {
	var nav = $("#navbar-main");
	var arrow = $("#navbar-arrow");
	var arrowd = $("#footer-arrow");
	$(window).scroll(function() {
		//adjust the number to fit distance from the top of page to the section
/*		if($('body').height() <= $(window).height() + $(window).scrollTop()-300){
			arrowd.hide();   
		} else {
			arrowd.show();
		}
*/
		if( $(this).scrollTop() > 690 ) {
			nav.hide();
			arrow.show();

		} else {
			nav.show();
			arrow.hide();
		}
	});
});
