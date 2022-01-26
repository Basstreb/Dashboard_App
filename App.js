import { NavigationContainer } from '@react-navigation/native';
import LoginNavigation from './src/navigation/LoginNavigation';
import { RootSiblingParent } from 'react-native-root-siblings';

export default function App() {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <LoginNavigation />
      </NavigationContainer>
    </RootSiblingParent>
  );
}