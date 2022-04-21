import React from 'react';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import { ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { ActivityIndicator, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native';

    

    const LoadingSplashscreenScreen = props => {
      const Constants = GlobalVariables.useValues();
         const Variables = Constants;
      
      
      // Type the code for the body of your function or hook here.
// Functions can be triggered via Button/Touchable actions.
// Hooks are run per ReactJS rules

// This is code copied from here: https://community.draftbit.com/c/help/is-there-a-way-to-only-show-a-welcome-screen-the-very-first-time-my-app-is-opened#comment_wrapper_3378885

const variables = CustomCode.useValues();
const setVariables = CustomCode.useSetValue();
console.log(variables.internalId)
console.log('here')

React.useEffect(()=>{
fetch(
    'https://sportsbettingapi20201118035253.azurewebsites.net/Account/ValidateToken?authorization='+variables.authToken,
    {
      headers: {
        Accept: 'application/json',
        Authorization: variables.authToken
      },
    }
  )
    .then(response => response.json())
    .then(json => {
      if(variables.internalId == null || variables.internalId == '' || variables.internalId == 'undefined')
      {
        setVariables({
          key: 'internalId',
          value: json,
        });
        navigation.navigate('MainTabNavigator')
      } else {
        navigation.navigate('MainTabNavigator')
      }
    })
    .catch(error => {
      if (variables.initLoginCheck === 0)
        { 
          setVariables({
            key: 'initLoginCheck',
            value: 1,
          });
        }
      navigation.navigate('Welcome1Screen')

    });
},[]);
      const { theme } = props;
      const { navigation } = props;
      
      
      
      React.useEffect(() => {
  StatusBar.setBarStyle('light-content');
}, []);
      
      
      
      
      
      
      
      
      
      

      return (
        
      <ScreenContainer  style={styles.screen} hasSafeArea={false} scrollable={false}>
        
      <View  style={styles.ViewRg} pointerEvents={"auto"}>
        
      <ImageBackground  style={styles.ImageBackgroundD5} source={Images.VaultSplashscreen1} resizeMode={"cover"}>
        <ActivityIndicator  style={styles.ActivityIndicatorBz} size={"large"} animating={true} hidesWhenStopped={true} />
      </ImageBackground>
    
      </View>
    
      </ScreenContainer>
    
      );
    };
    

const styles = StyleSheet.create({ ActivityIndicatorBz: {
width: 36,
height: 36,
}, ImageBackgroundD5: {
width: '100%',
height: '100%',
alignItems: 'center',
justifyContent: 'center',
}, TextvW: {
fontFamily: 'System', fontWeight: '700',
marginBottom: 6,
marginTop: 6,
}, TouchableAk: {
alignItems: 'center',
justifyContent: 'center',
width: '50%',
}, ViewRg: {
width: '100%',
height: '100%',
}, screen: {
alignItems: 'center',
justifyContent: 'space-between',
} });


export default withTheme(LoadingSplashscreenScreen);