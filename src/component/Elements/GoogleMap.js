import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    state = {};

    render() {
        return (
            <Map google={this.props.google}
                initialCenter={{
                    lat: 51.507351,
                    lng: -0.127758
                }}>
                <Marker/>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBTUuzUF4tuvPyotXJuzuugi4ZaGQo4Dng'
})(MapContainer)