import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'profile',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
      <Button
        title="Go to home"
        onPress={() => navigate('Home', {name: 'Jane'})}
      />
      </View>
    );
  }
}

export default ProfileScreen
