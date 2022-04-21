import React from 'react';
import { Icon, ScreenContainer, withTheme } from '@draftbit/ui';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

    

    const FeaturenotavailableScreen = props => {
      
      
      
      
      const { theme } = props;
      
      
      
      
      React.useEffect(() => {
  StatusBar.setBarStyle('light-content');
}, []);
      
      
      
      
      
      
      
      
      
      

      return (
        
      <ScreenContainer   scrollable={false} hasSafeArea={false}>
        
      <View  style={styles.View_2v} pointerEvents={"auto"}>
        
      <View  style={styles.Viewj5} pointerEvents={"auto"}>
        <Icon  style={styles.Iconlx} name={"Ionicons/ios-alert-circle"} color={theme.colors.error} size={28} />
      <View  style={styles.ViewMA} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextlT, { color: theme.colors.error }]} >
        {"Sorry, this feature is not yet available. Try again soon!"}
      </Text>
    
      </View>
    
      </View>
    
      </View>
    
      </ScreenContainer>
    
      );
    };
    

const styles = StyleSheet.create({ Iconlx: {
marginRight: 6,
}, TextlT: {
fontFamily: 'System', fontWeight: '400',
}, ViewMA: {
flexDirection: 'row',
alignItems: 'center',
flex: 1,
}, Viewj5: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
}, View_2v: {
paddingTop: 18,
paddingLeft: '4%',
paddingRight: '4%',
} });


export default withTheme(FeaturenotavailableScreen);