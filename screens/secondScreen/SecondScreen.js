import React from 'react';
import { StyleSheet, Text, View,Button  } from 'react-native';
import DrawerScreen from '../drawer/DrawerScreen';
import './../config/Colors';

export default class SecondScreen extends React.Component{
  render(){

    // const { navigate } = this.props.navigation;
     var view = (
       <View style={styles.container}>

           <View style={styles.firstContainer}>
               <Text style={styles.text}>This is Second Screen </Text>
               <Button
                 onPress={() => this.props.navigation.navigate('HomeScreen')}
                 title="Goto First Screen"
                 color="black"
                 accessibilityLabel="Learn more about this purple button"
               />
           </View>

           <View style={styles.secondContainer}>

           </View>
       </View>
     );
    return(
              <DrawerScreen left={view} nav={this.props.navigation.navigate} />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:100
  },
  text:{
    color: Colors.white,
    fontSize:20
  },
  firstContainer:{
    flex: 1,
    marginTop: 20,
    backgroundColor:'red'
  },
  secondContainer:{
    flex: 0.3,
    backgroundColor:'black'
  }

});
