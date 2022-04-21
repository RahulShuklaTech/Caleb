import React from 'react';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

    

    const MyBetsHelpScreen = props => {
      
      
      
      
      const { theme } = props;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      

      return (
        
      <ScreenContainer   scrollable={true} hasSafeArea={false}>
        
      <View   >
        
      <View   >
        
      <View  style={styles.Viewl0} >
        
      <Text  style={[styles.Text_0m, { color: theme.colors.background_inverse }]} >
        {"Confidence In Bet"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewbN} >
        
      <Text  style={[styles.TextaC, { color: theme.colors.background_inverse }]} >
        {"• Use the slider to select your level of confidence in a given bet hitting.*"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewrB} >
        
      <Text  style={[styles.TextaN, { color: theme.colors.background_inverse }]} >
        {"Add Tags & Notes"}
      </Text>
    
      </View>
    
      <View  style={styles.Viewm2} >
        
      <Text  style={[styles.TextPZ, { color: theme.colors.background_inverse }]} >
        {"• Add custom tags to filter bets in/out when looking at your stats.*\n\n• Add notes to look back on."}
      </Text>
    
      <Text  style={[styles.TextSP, { color: theme.colors.light }]} >
        {"*Configure the confidence level and tags before the game begins as they are locked in once it does."}
      </Text>
    
      </View>
    
      </View>
    
      </View>
    
      </ScreenContainer>
    
      );
    };
    

const styles = StyleSheet.create({ Text_0m: {
fontFamily: 'System', fontWeight: '700',
fontSize: 20,
}, Viewl0: {
opacity: 1,
marginTop: 18,
marginLeft: '4%',
marginRight: '4%',
flexDirection: 'row',
alignItems: 'center',
}, TextaC: {
fontFamily: 'System', fontWeight: '400',
fontSize: 14,
}, ViewbN: {
opacity: 1,
marginTop: 10,
marginLeft: '4%',
marginRight: '4%',
}, TextaN: {
fontFamily: 'System', fontWeight: '700',
fontSize: 20,
}, ViewrB: {
opacity: 1,
marginTop: 56,
marginLeft: '4%',
marginRight: '4%',
flexDirection: 'row',
alignItems: 'center',
}, TextPZ: {
fontFamily: 'System', fontWeight: '400',
fontSize: 14,
}, TextSP: {
fontFamily: 'System', fontWeight: '400',
fontSize: 14,
marginTop: 56,
}, Viewm2: {
opacity: 1,
marginTop: 10,
marginLeft: '4%',
marginRight: '4%',
} });


export default withTheme(MyBetsHelpScreen);