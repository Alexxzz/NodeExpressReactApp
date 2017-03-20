import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { observer } from 'mobx-react';
import { action } from 'mobx';

import EditMall from './EditMall.jsx';
import Map from './Map.jsx';

import Mall from '../storage/Mall';
import Storage from '../storage/MallsStorage';

const Container = styled.div`
    display: flex;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
`;

const MapContainer = styled.div`
  display: flex;
  flex: 1;
`;

const OpenAnimation = keyframes`
  from {right: -25%;}
    to {right: 0;}
`;

const CloseAnimation = keyframes`
  from {right: 0;}
    to {right: -25%;}
`;


const EditMallContainer = styled.div`
  display: flex;
  flex: 0;

  position: absolute;
  top: 0;
  bottom: 130px;

  right: ${props => props.visible ? '0' : '-25%'};
  transition: 0.3s;
  
  width: 25%; 
`;

const AddMallButton = styled.button`
  position: absolute;

  background-color: lime;
  width: 50px;
  height: 50px;

  top: 4px;
  left: -60px;
`;

const OpenCloseButtonText = styled.div`
  font-size: 30px;
  transform: ${props => props.rotated ? 'rotate(45deg)' : 'rotate(0deg)'};
  transition: 0.3s;
`;

@observer
class Malls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editingMall: new Mall(),
      malls: [],
      editVisible: false,
    };
  }

  onMarkerLocationChanged = (id, latLng) => {
    console.log(`id: ${id}`);
    const updatedMall = this.state.editingMall;
    updatedMall.latLng = latLng;
    this.setState({ editingMall: updatedMall });
  }

  onSaveEdit = (mall) => {
    console.log('onSaveEdit: ');
    console.log(mall);
    this.storage.addMall(mall);
  }

  toggleMenu = () => {
    this.setState(prevState => ({ editVisible: !prevState.editVisible }));
  }

  storage = new Storage();

  render() {
    console.log('Malls render');
    return (
      <Container>
        <MapContainer>
          <Map markers={this.storage.malls} onMarkerLocationChanged={this.onMarkerLocationChanged} />
        </MapContainer>
        <EditMallContainer visible={this.state.editVisible}>
          <AddMallButton onClick={this.toggleMenu}>
            <OpenCloseButtonText rotated={this.state.editVisible}>+</OpenCloseButtonText>
          </AddMallButton>
          <EditMall mall={this.state.editingMall} onSaveEdit={this.onSaveEdit} />
        </EditMallContainer>
      </Container>
    );
  }
}

export default Malls;
