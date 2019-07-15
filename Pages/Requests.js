import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, KeyboardAvoidingView } from 'react-native';

class NowPlaying extends React.Component {
  constructor(props) {
    super();
    this.state={
      UserName: "",
      Password: ""
    }
  }
  
  onSubmit=()=>{
    console.log('this.props',this.props.propsfn);
    this.props.propsfn.CheckAuth(this.state)
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
  render() {

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View>
          <Text>requests here</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder="user name"
            returnKeyType="next"
            name="UserName"
            KeyboardType="email-address"
            autoCapitalize={false}
            value={this.state.UserName}
          />
      </View>
      <Button
  onPress={this.onSubmit}
  title="Submit"
  color="#841584"
  accessibilityLabel="submit"
/>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default NowPlaying
