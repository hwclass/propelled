import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";
import uuid from 'uuid';

import './style/index.scss';

export default class Map extends React.Component {

  constructor(props) {
    super(props);
  }

  getRandomKey() {
    return Math.random(Date.now() * 100);
  }

  render() {
    return (
      <section id="map">
        <GoogleMapLoader
          containerElement={
            <div
              {...this.props.containerElementProps}
              style={{
                height: "100%",
              }}
            />
          }
          googleMapElement={
            <GoogleMap
              key={() => uuid.v1()}
              defaultZoom={1}
              defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
              onClick={this.props.onMapClick}
            >
              {this.props.markers.map((marker, index) => {
                return (
                  <Marker
                    key={() => this.getRandomKey()}
                    {...marker}
                    onRightclick={() => this.props.onMarkerRightclick(index)}
                  />
                );
              })}
            </GoogleMap>
          }
        />
      </section>
    );
  }

}
