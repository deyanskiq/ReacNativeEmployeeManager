import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
        <Text style={styles.errorTextStyle}>
        {this.props.error}
        </Text>
        </View>
      );
    }
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

          {this.renderError()}

          <CardSection>
          <Button
          onPress={this.onButtonPress.bind(this)}
          >Log in</Button>
          </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  // in order to have access to this.props.email and this.props.password
  return {
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error
  };
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
// this will call dispatch ( send actions to all different reducers)
export default connect(mapStateToProps, {
   emailChanged, passwordChanged, loginUser
})(LoginForm);
