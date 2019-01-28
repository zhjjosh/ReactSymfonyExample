import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import Home from './Home'
import Movies from './Movies'


class Apps extends Component {
  render() {
    return (
        <Container text style={{ marginTop: '7em' }}>
            <Home />
            <Movies />
        </Container>
    );
  }
}

export default Apps