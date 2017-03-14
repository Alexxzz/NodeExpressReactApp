import React, { Component } from 'react';
import styled from 'styled-components';

class EditMall extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      url: '',
      address: '',
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
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
          <div>
            <input type="submit" value="Save" />
          </div>
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

export default EditMall;
