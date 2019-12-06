import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import { loadTimeStamps } from './src/Utils/AsyncStorageHelper';

loadTimeStamps();
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Timestamps App'
    }
  }
);

export default createAppContainer(navigator);
