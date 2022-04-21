import * as React from 'react';
import AppLoading from 'expo-app-loading';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, ActivityIndicator } from 'react-native';
import { Provider as ThemeProvider } from '@draftbit/ui';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalVariableProvider } from './config/GlobalVariableContext';
import * as ScreenOrientation from 'expo-screen-orientation';
import DraftbitTheme from './themes/DraftbitTheme.js';
import AppNavigator from './AppNavigator';
import BankrollNetProfitScreen from './screens/BankrollNetProfitScreen';
const queryClient = new QueryClient()
function App() {
const fontsLoaded = true;
React.useEffect(() => {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
}, []);
if (!fontsLoaded) {
  return <AppLoading />;
}

return (
  <SafeAreaProvider>
    <GlobalVariableProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={DraftbitTheme}>
          
          <AppNavigator />
        </ThemeProvider>
      </QueryClientProvider>
    </GlobalVariableProvider>
  </SafeAreaProvider>
);
}
export default App