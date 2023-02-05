/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React, {useState, useEffect} from 'react';

import Root from './src/navigations/Root';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import StackNav from './src/navigations/stackNav/StackNav';

const App = () => {
  const [isSplash, setIsSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsSplash(!isSplash), 3000);
  }, []);
  return isSplash ? <SplashScreen /> : <Root />;
};

export default App;
