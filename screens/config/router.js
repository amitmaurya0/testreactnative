import {
  StackNavigator,TabNavigator
} from 'react-navigation';

import HomeScreen from '../home/HomeScreen';
import SecondScreen from '../secondScreen/SecondScreen' ;
import DrawerScreen from '../drawer/DrawerScreen';

const BasicApp = StackNavigator({
  HomeScreen: {screen: HomeScreen,title:'Home Screen'},
  SecondScreen: {screen: SecondScreen},
});
export default BasicApp;
