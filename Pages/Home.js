import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Tabs from 'react-native-tabs';
import NowPlaying from './NowPlaying.js'
import SelectGenre from './SelectGenre.js'
import Requests from './Requests.js'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e2e2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button:{
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
});


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    headerRight: <Button title="profile" onPress={() => this.props.navigation.navigate('Profile', {name: 'ak'})} />
  };
  constructor(props){
    super(props);
    this.state = {page: 'SelectGenre'};
  }
  renderPage=(page)=>{
    console.log('page',page);
    switch (page) {
      case "NowPlaying":
        return <NowPlaying />
        break;
      case "SelectGenre":
        return <SelectGenre />
        break;
      case "Requests":
        return <Requests />
        break;
      default:

    }
  }

  render() {
    let {page} = this.state
    return (
      <View style={styles.container}>

      {this.renderPage(page)}
      <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
              selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
            <Text name="NowPlaying" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Now Playing</Text>
            <Text name="SelectGenre" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Genre</Text>
            <Text name="Requests" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}} >Requests</Text>
        </Tabs>
      </View>
    );
  }
}


export default HomeScreen
