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

class Malls extends Component {
  render() {
    return (
      <Container>
        <Map />
        <EditMall />
      </Container>
    );
  }
}

export default Malls;
