import React, { PureComponent } from 'react';
import styled from 'styled-components';

const GOOGLE_MAPS_API = 'AIzaSyA3cOOSD0KUBRXdGBf4ATenDNQcIeIv8p8';

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.currentMarker = null;

    this.state = {
      google: null,
    };
  }

  componentWillMount() {
    const googleMapsApiUrl = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API}`;
    loadScript(googleMapsApiUrl, () => this.setState({ google: window.google }));
  }

  attachMapsTo(ref) {
    if (ref && this.state.google) {
      const maps = this.state.google.maps;
      const center = new maps.LatLng(52.1949986, 5.0);
      this.map = new maps.Map(ref, { center, zoom: 8 });

      this.setupMapEventListeners();
    }
  }

  setupMapEventListeners() {
    this.map.addListener('click', (e) => {
      const latLng = e.latLng;
      if (this.currentMarker === null) {
        this.currentMarker = this.addMarkerAt(latLng);
      } else {
        this.currentMarker.setPosition(latLng);
      }
      this.props.onMarkerLocationChanged(latLng);
    });
  }

  addMarkerAt(position) {
    return new this.state.google.maps.Marker({
      position,
      map: this.map,
    });
  }

  render() {
    return (
      <Container>
        <div style={{ flex: 1 }} ref={r => this.attachMapsTo(r)} />
      </Container>
    );
  }
}

function loadScript(url, onload) {
  const tag = document.createElement('script');
  const body = document.getElementsByTagName('body')[0];
  tag.type = 'text/javascript';
  tag.async = true;
  tag.defer = true;
  tag.src = url;
  tag.onload = onload;
  body.appendChild(tag);
}

const Container = styled.div`
  display: flex;
  flex: 1;
  backgroundColor: green;
`;

export default Map;
