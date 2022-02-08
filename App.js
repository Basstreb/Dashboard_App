import { NavigationContainer } from '@react-navigation/native';
import LoginNavigation from './src/navigation/LoginNavigation';
import { RootSiblingParent } from 'react-native-root-siblings';
import { LogBox } from 'react-native';

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <LoginNavigation />
      </NavigationContainer>
    </RootSiblingParent>
  );
}