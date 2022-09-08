import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, Text} from 'react-native';
import Home from './screens/Home';
import Questions from './screens/Questions/Questions';
import * as React from 'react';
import GameOver from './screens/GameOver/GameOver';
import auth from '@react-native-firebase/auth';
import Register from './screens/auth/Register';
import StartGame from './screens/StartGame';
import LeaderBoard from './screens/LeaderBoard/LeaderBoard';
import Login from './screens/auth/Login';
import Boarding from './screens/auth/Boarding/Boarding';

const Stack = createNativeStackNavigator();

function Router() {
  const [user, setUser] = React.useState();
  const [initializing, setInitializing] = React.useState(true);

  const authStatusCheck = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };
  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(authStatusCheck);
    return subscriber;
  }, []);
  console.log(user);
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        {user ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="StartGame" component={StartGame} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Questions" component={Questions} />
            <Stack.Screen name="GameOver" component={GameOver} />
            <Stack.Screen name="Leaderboard" component={LeaderBoard} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            defaultScreenOptions={Boarding}>
            <Stack.Screen name="Boarding" component={Boarding} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default Router;
