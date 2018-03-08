import React from 'react';
import { Container, Form, Item, Input, Label, Content, Text, Button, } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../../actions';

// import {
//     StackNavigator,
// } from 'react-navigation';

class Login extends React.Component {
  // Navigation options disabling header
    static navigationOptions = {
        title: 'Welcome',
        header: null

    };

  // Sign up form navigation
  onPressSignUp() {
    this.props.navigation.navigate('signup');
  }

  // for setting emailChanged action value
    onEmailChange(text) {
      this.props.emailChanged(text);
    }
  // for setting passworChanged action value
    onPasswordChange(text) {
      this.props.passwordChanged(text);
    }

  // Login Button function
    onButtonPress() {
      const { email, password } = this.props;
      this.props.loginUser({ email, password });
      // console.log(this.props);
    }

    render() {
        // const { navigate } = this.props.navigation;
        return (
            <Container style={styles.containerStyle} >

            {/*Logo*/}
              <Image
                source={require('../../img/logo.png')}
                style={styles.logoStyle}
              />

              {/*Form Filling*/}
              <Content>
                <Form>

                  {/* Username */}
                  <Item floatingLabel>
                    <Label style={{ color: '#fff' }}>Username</Label>
                    <Input
                      style={{ color: '#fff' }}
                      onChangeText={this.onEmailChange.bind(this)}
                      value={this.props.email}
                    />
                  </Item>

                  {/* Password */}
                  <Item floatingLabel>
                    <Label style={{ color: '#fff' }}>Password</Label>
                    <Input
                      secureTextEntry
                      style={{ color: '#fff' }}
                      onChangeText={this.onPasswordChange.bind(this)}
                      value={this.props.password}
                    />
                  </Item>

                  {/*Forget Password*/}
                  <Text style={styles.forgetPassStyle}>
                    Forgot Password ?
                  </Text>

                  {/*Log In Button*/}
                  <Button
                    block // Native-base streched button
                    style={styles.buttonStyle}
                    onPress={this.onButtonPress.bind(this)}
                  >
                    <Text>Log In</Text>
                  </Button>

                  {/*Sign UP*/}
                  <TouchableOpacity
                   style={styles.signUpStyle}
                   onPress={this.onPressSignUp.bind(this)}
                  >
                    <Text style={styles.signUpText}>
                      Dont have an account? Sign Up
                    </Text>
                 </TouchableOpacity>

                </Form>
              </Content>

            </Container>
        );
    }
}

const styles = {
  containerStyle: {
    backgroundColor: '#2B3D51',
    paddingLeft: 30,
    paddingRight: 30
  },
  logoStyle: {
    width: 147,
    height: 87,
    alignSelf: 'center',
    marginTop: 140
  },
  buttonStyle: {
    backgroundColor: '#2B3D51',
    borderRadius: 5,
		borderWidth: 1,
		borderColor: '#fff',
  },
  forgetPassStyle: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'right',
    margin: 20
  },
  signUpText: {
    textAlign: 'left',
    fontSize: 12,
    color: '#fff',
  },
  signUpStyle: {
    alignSelf: 'flex-start',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 100
  }
};

// for mapping states from the Redux store to the props
const mapStateToProps = state => {
  const { email, password, user } = state.auth;

  return { email, password, user };
};

// for connecting Action Creators and states to the props
export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(Login);
