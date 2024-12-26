import React, {Component} from 'react';
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import {AdvancedMarker, AdvancedMarkerAnchorPoint} from '@vis.gl/react-google-maps';
class FlatMap extends Component {
  handleMap = (id) => {
    const flats = this.props.flats;
    const flat = flats[id];
    const lat = parseFloat(flat.lat);
    const lng = flat.lng;
    console.log(`${lng};${lat} `)
    console.log(flat)
    return (
    <APIProvider apiKey="">
      <Map zoom={15} center={{lat: {lat}, lng: parseFloat(lng)}} mapId="DEMO_MAP_ID">
      <AdvancedMarker position={{lat: parseFloat(lat), lng: parseFloat(lng)}} />
      </Map>
  </APIProvider>
    );
  }

  render(){
    if (!this.props.flatMap) return null;
    return (
      this.handleMap(this.props.flatMap)
    )
  }
}

export default FlatMap;
