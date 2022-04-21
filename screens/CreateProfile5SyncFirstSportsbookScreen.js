import React from 'react';
import Images from '../config/Images';
import { ButtonOutline, Icon, ScreenContainer, Surface, Touchable, withTheme } from '@draftbit/ui';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';

    

    const CreateProfile5SyncFirstSportsbookScreen = props => {
      
      
      
      
      const { theme } = props;
      const { navigation } = props;
      
      
      
      React.useEffect(() => {
  StatusBar.setBarStyle('light-content');
}, []);
      
      
      
      
      
      
      
      
      
      

      return (
        
      <ScreenContainer  style={styles.screen} scrollable={true} hasSafeArea={true}>
        
      <View  style={styles.Viewmu} pointerEvents={"auto"}>
        
      <Surface  style={{ borderRadius: 0, backgroundColor: theme.colors.background }} elevation={0}>
        
      <View  style={[styles.View_7a, { borderRadius: 0 }]} >
        
      <View  style={styles.ViewXz} pointerEvents={"auto"}>
        
      <View  style={[styles.View_4a, { borderRadius: 0 }]} >
        
      <Touchable onPress={
     () => { 
      try {
          navigation.goBack();
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.ViewTb} >
        <Icon   name={"Ionicons/ios-chevron-back"} size={32} color={theme.colors.background_inverse} />
      <Text  style={[styles.Textyw, { color: theme.colors.background_inverse }]} >
        {"Back"}
      </Text>
    
      </View>
    
      </Touchable>
    
      </View>
    <View  style={styles.Viewoh}  /><View  style={[styles.ViewXo, { borderRadius: 0 }]}  />
      </View>
    
      </View>
    
      </Surface>
    
      <View  style={styles.ViewBf} >
        
      <View  style={styles.ViewyF} >
        
      <Text  style={[styles.TextxF, { color: theme.colors.background_inverse }]} >
        {"Sync your first sportsbook."}
      </Text>
    
      <Text  style={[styles.Text_6O, { color: theme.colors.background_inverse }]} >
        {"Vault uses sportsbook sync technology to securely track your bets for you."}
      </Text>
    
      <View  style={styles.ViewNG} pointerEvents={"auto"}>
        <Image  style={styles.Imageg6} source={Images.SecureLinkToBooks} resizeMode={"contain"} />
      </View>
    
      </View>
    
      </View>
    
      </View>
    
      <View  style={[styles.Viewra, { borderColor: theme.colors.divider }]} >
        
      <View  style={styles.ViewoM} >
        
      <View  style={styles.View_6D} >
        <ButtonOutline onPress={
     () => { 
      try {
          navigation.navigate('CreateProfileBetaStack',
{ screen: 'SharpSportsFormScreen'});
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonOutliney5, { backgroundColor: theme.colors.primary, color: theme.colors.strong }]} title={"Sync A Sportsbook"}  />
      <View  style={styles.ViewDf} >
        
      <Touchable  style={styles.TouchableWV} >
        
      <Text  style={[styles.TextLx, { color: theme.colors.light }]} >
        {"Skip for now"}
      </Text>
    
      </Touchable>
    
      </View>
    
      </View>
    
      </View>
    
      </View>
    
      </ScreenContainer>
    
      );
    };
    

const styles = StyleSheet.create({ Textyw: {
fontSize: 18,
}, ViewTb: {
alignItems: 'center',
paddingRight: 16,
flexDirection: 'row',
height: 50,
}, View_4a: {
minWidth: '33%',
maxWidth: '34%',
alignItems: 'flex-start',
}, Viewoh: {
alignContent: 'center',
justifyContent: 'center',
minWidth: '33%',
maxWidth: '34%',
maxHeight: 50,
}, ViewXo: {
minWidth: '33%',
maxWidth: '34%',
alignItems: 'flex-end',
}, ViewXz: {
flexDirection: 'row',
justifyContent: 'space-between',
}, View_7a: {
justifyContent: 'center',
}, TextxF: {
textAlign: 'left',
fontSize: 28,
fontFamily: 'System', fontWeight: '700',
}, Text_6O: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
marginTop: 48,
}, Imageg6: {
maxHeight: 200,
maxWidth: 300,
}, ViewNG: {
marginTop: 24,
alignItems: 'center',
justifyContent: 'center',
alignContent: 'center',
maxHeight: 200,
}, ViewyF: {
minHeight: 50,
paddingLeft: '4%',
paddingRight: '4%',
paddingTop: '4%',
paddingBottom: '4%',
flex: 1,
}, ViewBf: {
minHeight: 50,
}, Viewmu: {
minHeight: 50,
height: '80%',
}, ButtonOutliney5: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
borderWidth: 1,
textAlign: 'center',
fontSize: 16,
minHeight: 54,
}, TextLx: {
fontFamily: 'System', fontWeight: '700',
}, TouchableWV: {
alignItems: 'center',
justifyContent: 'center',
height: '100%',
}, ViewDf: {
alignItems: 'center',
flexDirection: 'row',
justifyContent: 'center',
flex: 1,
marginTop: 24,
}, View_6D: {
width: '100%',
paddingLeft: 34,
paddingRight: 34,
}, ViewoM: {
justifyContent: 'center',
}, Viewra: {
minHeight: 50,
justifyContent: 'center',
paddingBottom: 34,
paddingTop: 16,
borderTopWidth: 1,
}, screen: {
justifyContent: 'space-between',
} });


export default withTheme(CreateProfile5SyncFirstSportsbookScreen);