import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, TextInput, Button, KeyboardAvoidingView,  Image, TouchableOpacity } from 'react-native';
import logo  from '../assets/logo.jpeg'
class Auth extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      UserName: "",
      Password: "",
      myuser: 'ak',
      pass:  'ak'
    }
  }
  // this.onSubmit = this.onSubmit.bind(this)
  onSubmit=(navigate)=>{
    console.log('clikced',this.state);
    if (this.state.myuser ===  this.state.UserName &&  this.state.pass === this.state.Password) {
      navigate('Home', {name: 'Jane'})
    }else {
      alert('please enter  a correct  password')
    }
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
render(){
  const {navigate} = this.props.navigation;
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <StatusBar translucent backgroundColor="#e2e2e2" />
    <View style={styles.FormContainer}>
    <Image style={styles.logo} source={logo} />
      <Text style={styles.headerText}>LOGIN</Text>
      <TextInput
        placeholder="user name"
        returnKeyType="next"
        name="UserName"
        KeyboardType="email-address"
        autoCapitalize={false}
        style={styles.input}
        onChangeText={(UserName) => this.setState({UserName})}
        value={this.state.UserName}
      />
      <TextInput
      placeholder="password"
      name="Password"
      style={styles.input}
      returnKeyType="go"
        secureTextEntry
        onChangeText={(Password) => this.setState({Password})}
        value={this.state.Password}
      />
      <TouchableOpacity
  style={styles.button}
  onPress={()=>this.onSubmit(navigate)}
  color="#841584">
  <Text style={styles.loginText}>Login</Text>
  </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  headerText: {
    marginTop: 45,
    marginBottom:  20
  },
  FormContainer: {
    margin: 15,
    justifyContent:  'center',
    alignItems: 'center'
  },
  logo:{
    marginTop: 40,
    width: 200,
    height: 50
  },
  button:  {
    marginRight:40,
    marginLeft:40,
   marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  }
});
export default Auth
