import React from 'react';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as Utils from '../utils';
import { Icon, ScreenContainer, Surface, Touchable, withTheme } from '@draftbit/ui';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

    

    const SharpSportsFormScreen = props => {
      const Constants = GlobalVariables.useValues();
         const Variables = Constants;
      
const setGlobalVariableValue = GlobalVariables.useSetValue();
      const refreshSportsbook = (updatedSportsbook) => {
  return updatedSportsbook + 1;
};
      
      const { theme } = props;
      const { navigation } = props;
      
      
      
      React.useEffect(() => {
  StatusBar.setBarStyle('light-content');
}, []);
      
      
      
      
      
      
      
      
      
      

      return (
        
      <ScreenContainer  style={[styles.screen, { backgroundColor: theme.colors.strongInverse }]} scrollable={false} hasSafeArea={false} hasTopSafeArea={true}>
        
      <Surface  style={[styles.SurfaceE8, { borderRadius: 0, backgroundColor: theme.colors.background }]} elevation={0}>
        
      <View  style={[styles.ViewDW, { borderRadius: 0 }]} >
        
      <View  style={styles.ViewHm} pointerEvents={"auto"}>
        
      <View  style={[styles.Viewfz, { borderRadius: 0 }]} >
        
      <Touchable onPress={
     () => { 
      try {
          navigation.goBack();
  setGlobalVariableValue({
          key: "updatedSportsBook",
          value: refreshSportsbook(Constants["updatedSportsBook"])
        });
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.View_2F} >
        <Icon   name={"Ionicons/ios-chevron-back"} size={32} color={theme.colors.background_inverse} />
      <Text  style={[styles.TextMT, { color: theme.colors.background_inverse }]} >
        {"Back"}
      </Text>
    
      </View>
    
      </Touchable>
    
      </View>
    
      <View  style={styles.View_2a} >
        
      <Text  style={[styles.TextRu, { color: theme.colors.background_inverse }]} >
        {"Sync A Sportsbook"}
      </Text>
    
      </View>
    <View  style={[styles.ViewCW, { borderRadius: 0 }]}  />
      </View>
    
      </View>
    
      </Surface>
    <Utils.CustomCodeErrorBoundary><CustomCode.SharpSportsForm navigation = {props.navigation} /></Utils.CustomCodeErrorBoundary>
      </ScreenContainer>
    
      );
    };
    

const styles = StyleSheet.create({ TextMT: {
fontSize: 18,
}, View_2F: {
alignItems: 'center',
flexDirection: 'row',
height: 50,
}, Viewfz: {
alignItems: 'flex-start',
width: '25%',
}, TextRu: {
fontSize: 17,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
}, View_2a: {
alignContent: 'center',
justifyContent: 'center',
maxHeight: 50,
width: '50%',
}, ViewCW: {
alignItems: 'flex-end',
width: '25%',
}, ViewHm: {
flexDirection: 'row',
justifyContent: 'space-between',
}, ViewDW: {
justifyContent: 'center',
}, SurfaceE8: {
height: 50,
}, screen: {
paddingBottom: 28,
} });


export default withTheme(SharpSportsFormScreen);