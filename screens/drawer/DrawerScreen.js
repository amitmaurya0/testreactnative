import React from 'react';
import { StyleSheet, Text, View,DrawerLayoutAndroid,Button,AppRegistry  } from 'react-native';

export default class DrawerScreen extends React.Component{

  render(){
  //   const { navigate } = this.props.navigation;
  var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Ijm in the Drawer!</Text>
      <Button
        onPress={() => this.props.nav('SecondScreen')}
        title="Goto Second Screen"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

    <Button
      onPress={() => this.props.nav('HomeScreen')}
      title="Goto First Screen"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    /></View>
  );

    return(

            <DrawerLayoutAndroid drawerWidth={300} drawerPosition={DrawerLayoutAndroid.positions.Left}   renderNavigationView={() => navigationView}>
                {this.props.left}
              </DrawerLayoutAndroid>

    );
  }
}
