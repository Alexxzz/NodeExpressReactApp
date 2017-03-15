import React, { Component } from 'react';
import styled from 'styled-components';

import EditMall from './EditMall.jsx';
import Map from './Map.jsx';

const Container = styled.div`
    display: flex;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
`;

class Mall {
  constructor(name, url, address, latLng) {
    this.name = name;
    this.url = url;
    this.address = address;
    this.latLng = latLng;
  }
}

class Malls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mall: new Mall(),
    };
  }

  onMarkerLocationChanged = (latLng) => {
    console.log(latLng);

    const updatedMall = this.state.mall;
    updatedMall.latLng = latLng;
    this.setState({ mall: updatedMall });
  }

  render() {
    console.log('Malls render');
    return (
      <Container>
        <Map onMarkerLocationChanged={this.onMarkerLocationChanged} />
        <EditMall mall={this.state.mall} />
      </Container>
    );
  }
}

export default Malls;
