import { NavigationContainer } from '@react-navigation/native';
import LoginNavigation from './src/navigation/LoginNavigation';
import { RootSiblingParent } from 'react-native-root-siblings';
import { LogBox } from 'react-native';
import * as SplashScren from 'expo-splash-screen'

export default function App() {
  LogBox.ignoreAllLogs();
  SplashScren.preventAutoHideAsync();
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <LoginNavigation />
      </NavigationContainer>
    </RootSiblingParent>
  );
}