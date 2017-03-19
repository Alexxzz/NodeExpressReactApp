import React, { Component } from 'react';
import styled from 'styled-components';

class EditMall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      url: props.url,
      address: props.address,
      latLng: props.latLng,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSaveEdit({
      id: Date.now(), 
      name: this.state.name,
      url: this.state.url,
      address: this.state.address,
      latLng: this.props.mall.latLng,
    })
    console.log(`name: ${this.state.name}`);
    console.log(`url: ${this.state.url}`);
    console.log(`address: ${this.state.address}`);
  }

  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  onURLChange = (e) => {
    this.setState({ url: e.target.value });
  }

  onAddressChange = (e) => {
    this.setState({ address: e.target.value });
  }
 
  render() {
    console.log('EditMall render');
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <table>
            <tbody>
              <tr>
                <TableData><label htmlFor="name">Name</label></TableData>
                <TableData>
                  <input type="text" id="name" value={this.state.name} onChange={this.onNameChange} />
                </TableData>
              </tr>
              <tr>
                <TableData><label htmlFor="url">URL</label></TableData>
                <TableData>
                  <input type="text" id="url" value={this.state.url} onChange={this.onURLChange} />
                </TableData>
              </tr>
              <tr>
                <TableData><label htmlFor="address">Address</label></TableData>
                <TableData>
                  <input type="text" id="address" value={this.state.address} onChange={this.onAddressChange} />
                </TableData>
              </tr>
            </tbody>
          </table>
          <Footer>Location: {this.props.mall.latLng && this.props.mall.latLng.toString()}</Footer>          
          <Footer>
            <input type="submit" value="Save" />
          </Footer>
        </Form>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex: 1;
  backgroundColor: gray;
`;

const TableData = styled.td`
  padding: 15px;
`;

const Form = styled.form`
  padding: 1em;
`;

const Footer = styled.div`
  padding: 15px;
`;

export default EditMall;
