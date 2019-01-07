import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import AddTodo from '../screens/AddTodo';

const MainStack = createStackNavigator(
  {
    Home,
    AddTodo,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(MainStack);
