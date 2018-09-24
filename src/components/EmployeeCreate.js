import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
          label="Phone" placeholder="Jane"
          />
        </CardSection>

        <CardSection>
          <Input
          label="Phone" placeholder="Jane"
          />
        </CardSection>

        <CardSection>

        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
