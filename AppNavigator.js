import * as React from 'react';
  import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
  import { systemWeights } from 'react-native-typography';
  import { Icon, Touchable } from '@draftbit/ui';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import theme from './themes/DraftbitTheme.js';
  import LinkingConfiguration from './LinkingConfiguration.js';

  import BankrollNetProfitScreen from './screens/BankrollNetProfitScreen';
import CreateProfile4OtherPreferencesScreen from './screens/CreateProfile4OtherPreferencesScreen';
import CreateProfile5ChooseYourPromoScreen from './screens/CreateProfile5ChooseYourPromoScreen';
import CreateProfile6ViewSyncedBooksScreen from './screens/CreateProfile6ViewSyncedBooksScreen';
import DashboardScreen from './screens/DashboardScreen';
import GamesScreen from './screens/GamesScreen';
import GamesTestingScreen from './screens/GamesTestingScreen';
import LoadingSplashscreenScreen from './screens/LoadingSplashscreenScreen';
import LogInResetPasswordScreen from './screens/LogInResetPasswordScreen';
import LogInScreen from './screens/LogInScreen';
import MyBetsBetInfoScreen from './screens/MyBetsBetInfoScreen';
import MyBetsHelpScreen from './screens/MyBetsHelpScreen';
import MyBetsSaveFilterScreen from './screens/MyBetsSaveFilterScreen';
import MyBetsScreen from './screens/MyBetsScreen';
import SettingsBetaScreen from './screens/SettingsBetaScreen';
import SharpSportsFormScreen from './screens/SharpSportsFormScreen';
import SignUpScreen from './screens/SignUpScreen';
import Welcome1Screen from './screens/Welcome1Screen';

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  function Placeholder() {
return (
  <View
    style={{
      flex: 1,
      backgroundColor: "#131A2A",
      justifyContent: "center",
      alignItems: "center",
      padding: 36,
    }}
  >
    <Text
      style={{
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 12,
        color: "#FFF",
      }}
    >
      Missing Screens
    </Text>
    <Text style={{ textAlign: "center", fontSize: 16, color: "#FFF", marginBottom: 8 }}>
      Your app doesn't have any screens added to the Root Navigator.
    </Text>
    <Text style={{ textAlign: "center", fontSize: 16, color: "#FFF" }}>
      Click the + (plus) icon in the Navigator tab on the left side to add some.
    </Text>
  </View>
);
}
  function Welcome_Stack() {
  return (
    <Stack.Navigator mode="card"
headerMode="screen"
initialRouteName="LoadingSplashscreenScreen"
screenOptions={{
      headerStyle: {
backgroundColor: theme.colors.background
},
cardStyle: {
backgroundColor: theme.colors.background
},
headerTintColor: theme.colors.background_inverse,
headerTitleAlign: "center",
headerTitleAllowFontScaling: true,
headerTransparent: false,
gestureEnabled: false,
headerTitleStyle: theme.typography.custom184
    }}>
      <Stack.Screen name="SignUpScreen"
component={SignUpScreen}
options={{headerShown: false,
gestureEnabled: false,
title: "Sign Up"}} />
<Stack.Screen name="LogInScreen"
component={LogInScreen}
options={{headerShown: false,
gestureEnabled: false,
title: "Log In"}} />
<Stack.Screen name="Welcome1Screen"
component={Welcome1Screen}
options={{headerShown: false,
gestureEnabled: false,
title: "Welcome 1"}} />
<Stack.Screen name="LogInResetPasswordScreen"
component={LogInResetPasswordScreen}
options={{headerShown: false,
gestureEnabled: false,
title: "Log In - Reset Password"}} />
<Stack.Screen name="LoadingSplashscreenScreen"
component={LoadingSplashscreenScreen}
options={{headerShown: false,
gestureEnabled: false,
title: "Loading Splashscreen"}} />
    </Stack.Navigator>
  );
}


function BankrollStack() {
  return (
    <Stack.Navigator mode="modal"
headerMode="screen"
initialRouteName="BankrollNetProfitScreen"
screenOptions={{
      headerTitleAlign: "center",
headerTitleAllowFontScaling: true,
cardOverlayEnabled: false,
gestureEnabled: false,
headerTitleStyle: theme.typography.custom208
    }}>
      <Stack.Screen name="BankrollNetProfitScreen"
component={BankrollNetProfitScreen}
options={{headerShown: false,
gestureEnabled: false,
title: "Bankroll/Net Profit"}} />
<Stack.Screen name="SharpSportsFormScreen"
component={SharpSportsFormScreen}
options={{headerShown: false,
headerStyle: {
backgroundColor: theme.colors.background
},
headerTintColor: theme.colors.background_inverse,
headerTitleAlign: "center",
headerTransparent: true,
gestureEnabled: false,
headerTitleStyle: theme.typography.custom196,
title: "SharpSportsForm"}} />
    </Stack.Navigator>
  );
}


function DashboardStack() {
  return (
    <Stack.Navigator mode="modal"
headerMode="screen"
initialRouteName="DashboardScreen"
screenOptions={{
      headerTitleAlign: "center",
headerTitleAllowFontScaling: true,
gestureEnabled: false,
headerTitleStyle: theme.typography.custom205
    }}>
      <Stack.Screen name="DashboardScreen"
component={DashboardScreen}
options={{headerShown: false,
gestureEnabled: false,
title: "Dashboard"}} />
<Stack.Screen name="SharpSportsFormScreen"
component={SharpSportsFormScreen}
options={{headerShown: false,
headerStyle: {
backgroundColor: theme.colors.background
},
headerTintColor: theme.colors.background_inverse,
headerTitleAlign: "center",
headerTransparent: true,
gestureEnabled: false,
headerTitleStyle: theme.typography.custom196,
title: "SharpSportsForm"}} />
<Stack.Screen name="SettingsBetaScreen"
component={SettingsBetaScreen}
options={{headerStyle: {
backgroundColor: theme.colors.background
},
headerTintColor: theme.colors.background_inverse,
headerTitle: "Settings",
headerTitleAlign: "center",
headerTitleAllowFontScaling: true,
gestureEnabled: true,
headerTitleStyle: theme.typography.custom203,
headerBackTitle: 'Back',
title: "Settings (Beta)"}} />
    </Stack.Navigator>
  );
}


function MyBetsStack() {
  return (
    <Stack.Navigator mode="modal"
headerMode="screen"
initialRouteName="MyBetsScreen"
screenOptions={{
      headerTitleAlign: "center",
headerTitleAllowFontScaling: true,
gestureEnabled: false,
headerTitleStyle: theme.typography.custom211
    }}>
      <Stack.Screen name="MyBetsScreen"
component={MyBetsScreen}
options={{headerShown: false,
cardOverlayEnabled: true,
gestureEnabled: false,
title: "My Bets"}} />
<Stack.Screen name="MyBetsBetInfoScreen"
component={MyBetsBetInfoScreen}
options={{headerStyle: {
backgroundColor: theme.colors.background
},
headerTintColor: theme.colors.background_inverse,
headerTitle: "Bet Info",
headerTitleAlign: "center",
headerTitleAllowFontScaling: true,
gestureEnabled: true,
headerTitleStyle: theme.typography.custom213,
headerBackTitle: 'Back',
title: "My Bets - Bet Info"}} />
<Stack.Screen name="MyBetsSaveFilterScreen"
component={MyBetsSaveFilterScreen}
options={{headerStyle: {
backgroundColor: theme.colors.background
},
headerTintColor: theme.colors.background_inverse,
headerTitle: "Save Filter",
headerTitleAlign: "center",
headerTitleAllowFontScaling: true,
gestureEnabled: true,
headerTitleStyle: theme.typography.custom175,
headerBackImage: ({ tintColor }) => (
       <Icon
         name="Ionicons/ios-chevron-back-sharp"
         size={Platform.OS === 'ios' ? 21 : 24}
         color={theme.colors.light}
         style={[styles.headerIcon, styles.headerIconLeft]}
       />
     ),
headerBackTitle: 'Back',
title: "My Bets - Save Filter"}} />
<Stack.Screen name="MyBetsHelpScreen"
component={MyBetsHelpScreen}
options={{headerStyle: {
backgroundColor: theme.colors.background
},
headerTintColor: theme.colors.background_inverse,
headerTitle: "Help",
headerTitleAlign: "center",
headerTitleAllowFontScaling: true,
gestureEnabled: true,
headerTitleStyle: theme.typography.custom178,
headerBackImage: ({ tintColor }) => (
       <Icon
         name="Ionicons/ios-chevron-back-sharp"
         size={Platform.OS === 'ios' ? 21 : 24}
         color={theme.colors.light}
         style={[styles.headerIcon, styles.headerIconLeft]}
       />
     ),
headerBackTitle: 'Back',
title: "My Bets - Help"}} />
    </Stack.Navigator>
  );
}


function GamesStack() {
  return (
    <Stack.Navigator mode="modal"
headerMode="screen"
initialRouteName="GamesScreen"
screenOptions={{
      headerStyle: {
backgroundColor: theme.colors.background
},
headerTintColor: theme.colors.background_inverse,
headerTitle: "VAULT",
headerTitleAlign: "center",
headerTitleAllowFontScaling: true,
gestureEnabled: false,
headerTitleStyle: theme.typography.custom97
    }}>
      <Stack.Screen name="GamesScreen"
component={GamesScreen}
options={{headerShown: false,
gestureEnabled: false,
title: "Games"}} />
    </Stack.Navigator>
  );
}


function MainTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="BankrollStack"
tabBarOptions={{
keyboardHidesTabBar: true,
activeTintColor: theme.colors.primary,
inactiveTintColor: theme.colors.background_inverse,
activeBackgroundColor: theme.colors.divider,
inactiveBackgroundColor: theme.colors.divider,
labelStyle: theme.typography.custom98,
style: { backgroundColor: theme.colors.divider,borderTopColor: null }
}}
backBehavior="none">
      <Tab.Screen
    name="GamesStack"
component={GamesStack}

      options={{
        tabBarIcon: ({ focused, color }) => (
<Icon
name="Ionicons/ios-flag"
size={25}
color={(focused ? theme.colors.primary : theme.colors.background_inverse )}
/>
),
tabBarLabel: "Games",
title: "Games Stack"
      }}
    
  />
<Tab.Screen
    name="MyBetsStack"
component={MyBetsStack}

      options={{
        tabBarIcon: ({ focused, color }) => (
<Icon
name="MaterialCommunityIcons/chart-donut"
size={25}
color={(focused ? theme.colors.primary : theme.colors.background_inverse )}
/>
),
tabBarLabel: "My Bets",
title: "My Bets Stack"
      }}
    
  />
<Tab.Screen
    name="BankrollStack"
component={BankrollStack}

      options={{
        tabBarIcon: ({ focused, color }) => (
<Icon
name="MaterialCommunityIcons/chart-line"
size={25}
color={(focused ? theme.colors.primary : theme.colors.background_inverse )}
/>
),
tabBarLabel: "Money",
title: "Bankroll Stack"
      }}
    
  />
<Tab.Screen
    name="DashboardStack"
component={DashboardStack}

      options={{
        tabBarIcon: ({ focused, color }) => (
<Icon
name="MaterialCommunityIcons/view-dashboard"
size={25}
color={(focused ? theme.colors.primary : theme.colors.background_inverse )}
/>
),
tabBarLabel: "Dashboard",
title: "Dashboard Stack"
      }}
    
  />
    </Tab.Navigator>
  );
}


function DemoModeStack() {
  return (
    <Stack.Navigator screenOptions={{
      gestureEnabled: false
    }}>
      <Stack.Screen name="Placeholder"
component={Placeholder}
options={{mode: "modal",
headerShown: false}} />
    </Stack.Navigator>
  );
}


function CreateProfileBetaStack() {
  return (
    <Stack.Navigator headerMode="screen"
initialRouteName="CreateProfile4OtherPreferencesScreen"
screenOptions={{
      gestureEnabled: false,
gestureResponseDistance: { vertical: null,horizontal: 50 },
headerTitleStyle: theme.typography.custom217
    }}>
      <Stack.Screen name="CreateProfile4OtherPreferencesScreen"
component={CreateProfile4OtherPreferencesScreen}
options={{headerShown: false,
headerTransparent: true,
gestureEnabled: false,
title: "Create Profile 4 - Other Preferences"}} />
<Stack.Screen name="CreateProfile6ViewSyncedBooksScreen"
component={CreateProfile6ViewSyncedBooksScreen}
options={{headerShown: false,
headerTransparent: true,
gestureEnabled: false,
title: "Create Profile 6 - View Synced Books"}} />
<Stack.Screen name="SharpSportsFormScreen"
component={SharpSportsFormScreen}
options={{headerShown: false,
headerStyle: {
backgroundColor: theme.colors.background
},
headerTintColor: theme.colors.background_inverse,
headerTitleAlign: "center",
headerTransparent: true,
gestureEnabled: false,
headerTitleStyle: theme.typography.custom196,
title: "SharpSportsForm"}} />
<Stack.Screen name="CreateProfile5ChooseYourPromoScreen"
component={CreateProfile5ChooseYourPromoScreen}
options={{headerShown: false,
headerTransparent: true,
gestureEnabled: false,
title: "Create Profile 5 - Choose Your Promo"}} />
    </Stack.Navigator>
  );
}


export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator mode="modal"
headerMode="none"
initialRouteName="MainTabNavigator"
screenOptions={{
      headerStyle: {
backgroundColor: theme.colors.background
},
headerTintColor: theme.colors.background_inverse,
headerTitleAllowFontScaling: false,
headerTransparent: false,
cardOverlayEnabled: true,
gestureEnabled: false,
headerTitleStyle: theme.typography.custom47,
headerBackTitle: ' '
    }}>
        <Stack.Screen name="GamesTestingScreen"
component={GamesTestingScreen}
options={{title: "Games Testing"}} />
        <Stack.Screen name="Welcome_Stack"
component={Welcome_Stack} />
<Stack.Screen name="MainTabNavigator"
component={MainTabNavigator} />
<Stack.Screen name="DemoModeStack"
component={DemoModeStack} />
<Stack.Screen name="CreateProfileBetaStack"
component={CreateProfileBetaStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

  const styles = StyleSheet.create({
    headerIcon: Platform.select({
      ios: {
        marginVertical: 12,
        resizeMode: 'contain',
        transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
      },
      default: {
        margin: 3,
        resizeMode: 'contain',
        transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
      },
    }),
    headerIconLeft: Platform.select({
      ios: {
        marginRight: 6,
      },
    }),
    headerIconRight: Platform.select({
      ios: {
        marginLeft: 6,
      },
    }),
    headerContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      ...Platform.select({
        ios: null,
        default: {
          marginVertical: 3,
          marginHorizontal: 11,
        },
      }),
    },
    headerContainerLeft: Platform.select({
      ios: {
        marginLeft: 8,
      },
    }),
    headerContainerRight: Platform.select({
      ios: {
        marginRight: 8,
      },
    }),
    headerLabelWrapper: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    headerLabel: {
      fontSize: 17,
      letterSpacing: 0.35,
    },
  });