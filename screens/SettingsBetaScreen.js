import React from 'react';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as Utils from '../utils';
import { Divider, Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import * as WebBrowser from 'expo-web-browser';
import { Modal, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

    

    const SettingsBetaScreen = props => {
      const Constants = GlobalVariables.useValues();
         const Variables = Constants;
      
const setGlobalVariableValue = GlobalVariables.useSetValue();
      
      
      const { theme } = props;
      const { navigation } = props;
      
      
      
      React.useEffect(() => {
  StatusBar.setBarStyle('light-content');
}, []);
      
      
      
      
      
      
      
      
      
      

      return (
        
      <ScreenContainer   scrollable={false} hasSafeArea={false}>
        
      <ScrollView  style={styles.ScrollViewOT} contentContainerStyle={styles.ScrollViewOTContent} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} bounces={true}>
        
      <View   pointerEvents={"auto"}>
        
      <View   >
        
      <View   >
        
      <View  style={styles.ViewIG} >
        
      <Text  style={[styles.TextQe, { color: theme.colors.background_inverse }]} >
        {"Account Settings"}
      </Text>
    
      </View>
    <>{ Constants["waitlisted"] ? null : 
      <View  style={styles.ViewiL} pointerEvents={"auto"}>
        <Divider  style={styles.DividerW3} color={theme.colors.divider} height={1} />
      <Touchable onPress={
     () => { 
      try {
          navigation.navigate('SharpSportsFormScreen');
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.Viewy6} pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.background_inverse }} >
        {"Sync A Sportsbook"}
      </Text>
    <Icon   name={"Ionicons/ios-chevron-forward"} color={theme.colors.background_inverse} size={24} />
      </View>
    
      </Touchable>
    <Divider  style={styles.DividerEI} color={theme.colors.divider} height={1} />
      </View>
     }</>
      <View  style={styles.ViewtE} pointerEvents={"auto"}>
        
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleSignOutModal",
          value: true
        });
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.View_73} pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.background_inverse }} >
        {"Sign Out"}
      </Text>
    <Icon   name={"Ionicons/ios-chevron-forward"} color={theme.colors.background_inverse} size={24} />
      </View>
    
      </Touchable>
    <Divider  style={styles.Dividervt} color={theme.colors.divider} height={1} />
      </View>
    
      </View>
    
      </View>
    
      <View  style={styles.View_9O} >
        
      <View   >
        
      <View  style={styles.ViewJv} >
        
      <Text  style={[styles.Textlw, { color: theme.colors.background_inverse }]} >
        {"About\n"}
      </Text>
    
      </View>
    <Utils.CustomCodeErrorBoundary><CustomCode.ShareVault/></Utils.CustomCodeErrorBoundary>
      <View  style={styles.ViewAn} pointerEvents={"auto"}>
        
      <Touchable onPress={
    async () => { 
      try {
         await WebBrowser.openBrowserAsync("https://forms.gle/9FWZe41LxScEhUFR9");
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.ViewMP} pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.background_inverse }} >
        {"Give Us Feedback"}
      </Text>
    <Icon   name={"Ionicons/ios-chevron-forward"} color={theme.colors.background_inverse} size={24} />
      </View>
    
      </Touchable>
    <Divider  style={styles.Dividerad} color={theme.colors.divider} height={1} />
      </View>
    
      <View  style={styles.Viewhu} pointerEvents={"auto"}>
        
      <Touchable onPress={
    async () => { 
      try {
         await WebBrowser.openBrowserAsync("https://apps.apple.com/us/app/vault-the-sports-bet-tracker/id1595719004");
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.ViewEj} pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.background_inverse }} >
        {"Rate and Review Vault"}
      </Text>
    <Icon   name={"Ionicons/ios-chevron-forward"} color={theme.colors.background_inverse} size={24} />
      </View>
    
      </Touchable>
    <Divider  style={styles.Dividersu} color={theme.colors.divider} height={1} />
      </View>
    
      <View  style={styles.ViewhJ} pointerEvents={"auto"}>
        
      <Touchable onPress={
    async () => { 
      try {
         await WebBrowser.openBrowserAsync("https://www.vaultsportshq.com/");
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.ViewKc} pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.background_inverse }} >
        {"Visit Our Website"}
      </Text>
    <Icon   name={"Ionicons/ios-chevron-forward"} color={theme.colors.background_inverse} size={24} />
      </View>
    
      </Touchable>
    <Divider  style={styles.DividerDa} color={theme.colors.divider} height={1} />
      </View>
    
      <View  style={styles.View_6a} pointerEvents={"auto"}>
        
      <Touchable onPress={
    async () => { 
      try {
         await WebBrowser.openBrowserAsync("https://www.vaultsportshq.com/contact");
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.Viewa7} pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.background_inverse }} >
        {"Contact"}
      </Text>
    <Icon   name={"Ionicons/ios-chevron-forward"} color={theme.colors.background_inverse} size={24} />
      </View>
    
      </Touchable>
    <Divider  style={styles.Divideron} color={theme.colors.divider} height={1} />
      </View>
    
      <View  style={styles.Viewm0} pointerEvents={"auto"}>
        
      <Touchable onPress={
    async () => { 
      try {
         await WebBrowser.openBrowserAsync("https://www.vaultsportshq.com/terms-of-service");
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.ViewXj} pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.background_inverse }} >
        {"Terms of Service"}
      </Text>
    <Icon   name={"Ionicons/ios-chevron-forward"} color={theme.colors.background_inverse} size={24} />
      </View>
    
      </Touchable>
    <Divider  style={styles.DividerFf} color={theme.colors.divider} height={1} />
      </View>
    
      <View  style={styles.View_4c} pointerEvents={"auto"}>
        
      <Touchable onPress={
    async () => { 
      try {
         await WebBrowser.openBrowserAsync("https://www.vaultsportshq.com/privacy");
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.ViewQy} pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.background_inverse }} >
        {"Privacy Policy"}
      </Text>
    <Icon   name={"Ionicons/ios-chevron-forward"} color={theme.colors.background_inverse} size={24} />
      </View>
    
      </Touchable>
    <Divider  style={styles.DividerXn} color={theme.colors.divider} height={1} />
      </View>
    
      </View>
    
      </View>
    
      </View>
    
      <View  style={styles.Viewy3} >
        
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleSignOutModal",
          value: true
        });
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.View_0D} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textgt, { color: theme.colors.light }]} >
        {"Sign Out"}
      </Text>
    
      </View>
    
      </Touchable>
    
      </View>
    
      </ScrollView>
    
      <Modal   visible={Constants["toggleSignOutModal"]} animationType={"slide"} transparent={true} presentationStyle={"pageSheet"}>
        <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleSignOutModal",
          value: false
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchableta}  />
      <View  style={[styles.ViewNS, { backgroundColor: theme.colors.background, borderRadius: 10 }]} pointerEvents={"auto"}>
        
      <View   pointerEvents={"auto"}>
        
      <View  style={styles.ViewJs} pointerEvents={"auto"}>
        
      <View  style={styles.Viewcl} pointerEvents={"auto"}>
        
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleSignOutModal",
          value: false
        });
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.ViewzD} pointerEvents={"auto"}>
        <Icon   name={"Ionicons/ios-chevron-back"} size={32} color={theme.colors.background_inverse} />
      <Text  style={[styles.Text_1D, { color: theme.colors.background_inverse }]} >
        {"Cancel"}
      </Text>
    
      </View>
    
      </Touchable>
    
      </View>
    
      <View  style={styles.Viewsy} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_4A, { color: theme.colors.background_inverse }]} >
        {"Are you sure?"}
      </Text>
    
      </View>
    <View  style={styles.ViewWN} pointerEvents={"auto"} />
      </View>
    
      <View  style={styles.View_0r} pointerEvents={"auto"}>
        
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleSignOutModal",
          value: false
        });
  setGlobalVariableValue({
          key: "authToken",
          value: ""
        });
  navigation.navigate('Welcome_Stack',
{ screen: 'Welcome1Screen'});
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.View_13} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextLo, { color: theme.colors.light }]} >
        {"Sign Out"}
      </Text>
    
      </View>
    
      </Touchable>
    
      </View>
    
      </View>
    <View  style={[styles.ViewbL, { backgroundColor: theme.colors.background }]} pointerEvents={"auto"} />
      </View>
    
      </Modal>
    
      </ScreenContainer>
    
      );
    };
    

const styles = StyleSheet.create({ TextQe: {
fontFamily: 'System', fontWeight: '700',
fontSize: 28,
}, ViewIG: {
opacity: 1,
marginTop: 18,
marginLeft: '4%',
marginRight: 4,
flexDirection: 'row',
alignItems: 'center',
}, DividerW3: {
height: 1,
}, Viewy6: {
minHeight: 50,
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
}, DividerEI: {
height: 1,
}, ViewiL: {
marginTop: 24,
marginLeft: '4%',
marginRight: '4%',
}, View_73: {
minHeight: 50,
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
}, Dividervt: {
height: 1,
}, ViewtE: {
marginLeft: '4%',
marginRight: '4%',
}, View_4D: {
minHeight: 50,
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
}, DividereE: {
height: 1,
}, ViewYf: {
marginLeft: '4%',
marginRight: '4%',
}, Text_1p: {
fontFamily: 'System', fontWeight: '700',
fontSize: 28,
}, ViewE9: {
opacity: 1,
marginTop: 12,
marginLeft: '4%',
marginRight: 4,
flexDirection: 'row',
alignItems: 'center',
}, TextqY: {
marginTop: 18,
marginLeft: '4%',
marginRight: '4%',
}, Divider_9X: {
marginTop: 32,
height: 1,
marginLeft: '4%',
marginRight: '4%',
}, Viewtd: {
marginTop: 40,
}, Textlw: {
fontFamily: 'System', fontWeight: '700',
fontSize: 28,
}, ViewJv: {
opacity: 1,
marginTop: 12,
marginLeft: '4%',
marginRight: 4,
flexDirection: 'row',
alignItems: 'center',
}, ViewMP: {
minHeight: 50,
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
}, Dividerad: {
height: 1,
}, ViewAn: {
marginLeft: '4%',
marginRight: '4%',
}, ViewEj: {
minHeight: 50,
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
}, Dividersu: {
height: 1,
}, Viewhu: {
marginLeft: '4%',
marginRight: '4%',
}, ViewKc: {
minHeight: 50,
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
}, DividerDa: {
height: 1,
}, ViewhJ: {
marginLeft: '4%',
marginRight: '4%',
}, Viewa7: {
minHeight: 50,
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
}, Divideron: {
height: 1,
}, View_6a: {
marginLeft: '4%',
marginRight: '4%',
}, ViewXj: {
minHeight: 50,
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
}, DividerFf: {
height: 1,
}, Viewm0: {
marginLeft: '4%',
marginRight: '4%',
}, ViewQy: {
minHeight: 50,
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
}, DividerXn: {
height: 1,
}, View_4c: {
marginLeft: '4%',
marginRight: '4%',
}, View_9O: {
marginTop: 40,
}, Textgt: {
fontFamily: 'System', fontWeight: '700',
alignSelf: 'center',
fontSize: 16,
}, View_0D: {
justifyContent: 'center',
paddingTop: 10,
paddingLeft: 16,
paddingRight: 16,
paddingBottom: 10,
}, Viewy3: {
marginTop: 44,
paddingTop: 14,
paddingBottom: 34,
paddingRight: 32,
paddingLeft: 32,
alignItems: 'center',
}, ScrollViewOT: {
flexGrow: 1,
}, ScrollViewOTContent: {
justifyContent: 'space-between',
}, Touchableta: {
height: '80%',
}, Text_1D: {
fontSize: 18,
fontFamily: 'System', fontWeight: '400',
}, ViewzD: {
flexDirection: 'row',
alignItems: 'center',
height: 50,
}, Viewcl: {
width: '25%',
}, Text_4A: {
textAlign: 'center',
fontFamily: 'System', fontWeight: '700',
fontSize: 18,
}, Viewsy: {
width: '50%',
height: 50,
alignItems: 'center',
justifyContent: 'center',
}, ViewWN: {
width: '25%',
}, ViewJs: {
flexDirection: 'row',
justifyContent: 'space-between',
}, TextLo: {
fontFamily: 'System', fontWeight: '700',
alignSelf: 'center',
fontSize: 16,
}, View_13: {
justifyContent: 'center',
paddingTop: 10,
paddingLeft: 16,
paddingRight: 16,
paddingBottom: 10,
alignItems: 'center',
}, View_0r: {
justifyContent: 'flex-end',
}, ViewbL: {
height: 11,
}, ViewNS: {
height: '20%',
justifyContent: 'space-between',
} });


export default withTheme(SettingsBetaScreen);