import React, { useEffect, useState } from "react";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
} from "react-google-maps";

const MapComponent = (props) => {
	let [mapPosition, setMapPosition] = useState({ lat: 0, lng: 0 });
	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				setMapPosition({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				});
			});
		} else {
		}
	}, []);
	const MapWithAMarker = withScriptjs(
		withGoogleMap((props) => (
			<GoogleMap defaultZoom={8} defaultCenter={mapPosition}>
				<Marker position={mapPosition} />
			</GoogleMap>
		))
	);
	return (
		<div className="h-100">
			<MapWithAMarker
				googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD-97JHudLqEPqrmnIx3odvU-NuVgL7QOM&v=3.exp&libraries=geometry,drawing,places"
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	);
};

export default MapComponent;

// export default GoogleApiWrapper({
// 	apiKey: "AIzaSyD-97JHudLqEPqrmnIx3odvU-NuVgL7QOM",
// })(MapComponent);
