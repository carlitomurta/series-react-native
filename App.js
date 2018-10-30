import { createStackNavigator } from 'react-navigation';
import LoginPage from './src/pages/LoginPage';

export default createStackNavigator(
  {
    Login: {
      screen: LoginPage
    },
    {
      navigationOptions:{
        title: 'Bem vindo!'
      }
    }
  },
  {
    navigationOptions: {
      title: 'Series',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#c5c5c5'
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 18
      }
    }
  }
);
