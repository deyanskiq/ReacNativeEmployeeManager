import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    //because we will reference 'this' in our callback we need to bind the context
    return (
      <Card>
        <CardSection>
          <Input
          label="Email"
          placeholder="email@gmail.com"
          value={this.props.email}
          onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
          secureTextEntry
          label="Password"
          placeholder="password"
          value={this.props.password}
          onChangeText={this.onPasswordChange.bind(this)}
          />
          </CardSection>

          <CardSection>
          <Button>Log in</Button>
          </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  // in order to have access to this.props.email and this.props.password
  return {
  email: state.auth.email,
  password: state.auth.password
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
