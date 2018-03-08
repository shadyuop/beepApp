import React from 'react';
import { Container, Form, Item, Input, Label, Content, Text, Button, Icon } from 'native-base';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../../actions';

// import {
//     StackNavigator,
// } from 'react-navigation';

class SignUp extends React.Component {
  // Navigation options disabling header
    static navigationOptions = {
        title: 'Sign Up',
    };

  // for setting emailChanged action value
    onUserChange(text) {
      console.log(text);
      // this.props.emailChanged(text);
    }

  // for setting emailChanged action value
    onEmailChange(text) {
      this.props.emailChanged(text);
    }
  // for setting passworChanged action value
    onPasswordChange(text) {
      this.props.passwordChanged(text);
    }

    // for setting emailChanged action value
      onPasswordConfirmChange(text) {
        console.log(text);
        // this.props.emailChanged(text);
      }

  // SignUp Button function
    onButtonPress() {
      // const { email, password } = this.props;
      // this.props.loginUser({ email, password });
      // console.log(this.props);
    }

  // Facebook signup function
    onButtonFBPress() {

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
                  <Item stackedLabel style={{ marginLeft: 0 }}>
                    <Label style={{ color: '#fff' }}>Username</Label>
                    <Input
                      style={{ color: '#fff' }}
                      onChangeText={this.onUserChange.bind(this)}
                      value={this.props.User}
                    />
                  </Item>

                  {/* Email */}
                  <Item stackedLabel style={{ marginLeft: 0 }}>
                    <Label style={{ color: '#fff' }}>Email</Label>
                    <Input
                      style={{ color: '#fff' }}
                      onChangeText={this.onEmailChange.bind(this)}
                      value={this.props.email}
                    />
                  </Item>

                  {/* Password */}
                  <Item stackedLabel style={{ marginLeft: 0 }}>
                    <Label style={{ color: '#fff' }}>Password</Label>
                    <Input
                      secureTextEntry
                      style={{ color: '#fff' }}
                      onChangeText={this.onPasswordChange.bind(this)}
                      value={this.props.password}
                    />
                  </Item>

                  {/* Confirm Password */}
                  <Item stackedLabel style={{ marginLeft: 0 }}>
                    <Label style={{ color: '#fff' }}>Confirm Password</Label>
                    <Input
                      secureTextEntry
                      style={{ color: '#fff' }}
                      onChangeText={this.onPasswordConfirmChange.bind(this)}
                      value={this.props.passwordConfirm}
                    />
                  </Item>

                  {/*Sign Up Button*/}
                  <Button
                    block // Native-base streched button
                    style={styles.buttonStyle}
                    onPress={this.onButtonPress.bind(this)}
                  >
                    <Text>Sign Up</Text>
                  </Button>

                  {/*Facebook Button*/}
                  <Button
                    iconLeft
                    block // Native-base streched button
                    style={styles.buttonStyle}
                    onPress={this.onButtonFBPress.bind(this)}
                  >
                    <Icon name='home' />
                    <Text>Facebook</Text>
                  </Button>

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
    width: 110,
    height: 64,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20
  },
  buttonStyle: {
    marginTop: 10,
    backgroundColor: '#2B3D51',
    borderRadius: 5,
		borderWidth: 1,
		borderColor: '#fff',
  },
};

// for mapping states from the Redux store to the props
const mapStateToProps = state => {
  const { email, password, user } = state.auth;

  return { email, password, user };
};

// for connecting Action Creators and states to the props
export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(SignUp);
