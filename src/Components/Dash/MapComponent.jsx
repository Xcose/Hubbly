import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const MapComponent = (props) => {
	return (
		<div className="h-100">
			<Map
				google={props.google}
				zoom={14}
				style={{ width: "100%", height: "50%" }}
			>
				<Marker name={"Current location"} />

				{/* <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow> */}
			</Map>
		</div>
	);
};

export default GoogleApiWrapper({
	apiKey: "AIzaSyD-97JHudLqEPqrmnIx3odvU-NuVgL7QOM",
})(MapComponent);
