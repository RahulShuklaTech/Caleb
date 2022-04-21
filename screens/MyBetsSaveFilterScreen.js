import React from 'react';
import { ButtonOutline, ScreenContainer, TextField, Touchable, withTheme } from '@draftbit/ui';
import { KeyboardAvoidingView, StatusBar, StyleSheet, Text, View } from 'react-native';

    

    const MyBetsSaveFilterScreen = props => {
      
      
      
      
      const { theme } = props;
      const { navigation } = props;
      
      
      
      React.useEffect(() => {
  StatusBar.setBarStyle('light-content');
}, []);
      
      
      
      
      
      
      
      const [savedFilterDescription, setSavedFilterDescription] = React.useState("");
const [savedFilterName, setSavedFilterName] = React.useState("");
      
      

      return (
        
      <ScreenContainer   scrollable={true} hasSafeArea={false}>
        
      <View   >
        
      <View   >
        
      <View  style={styles.ViewTO} >
        
      <Text  style={[styles.TextXi, { color: theme.colors.background_inverse }]} >
        {"Save Filter"}
      </Text>
    
      </View>
    
      <Text  style={[styles.TextIO, { color: theme.colors.light }]} >
        {"Filters Applied:"}
      </Text>
    
      <View  style={styles.ViewHd} >
        
      <View  style={[styles.ViewYb, { borderRadius: theme.roundness, backgroundColor: theme.colors.primary }]} >
        
      <Text  style={[styles.Textx3, { color: theme.colors.strong }]} >
        {"Moneyline"}
      </Text>
    
      </View>
    
      <View  style={[styles.ViewAL, { borderRadius: theme.roundness, backgroundColor: theme.colors.primary }]} >
        
      <Text  style={[styles.Texta4, { color: theme.colors.strong }]} >
        {"Moneyline"}
      </Text>
    
      </View>
    
      <View  style={[styles.ViewoO, { borderRadius: theme.roundness, backgroundColor: theme.colors.primary }]} >
        
      <Text  style={[styles.TextSR, { color: theme.colors.strong }]} >
        {"Moneyline"}
      </Text>
    
      </View>
    
      <View  style={[styles.Viewm2, { borderRadius: theme.roundness, backgroundColor: theme.colors.light }]} >
        
      <Text  style={[styles.TextLB, { color: theme.colors.strong }]} >
        {"None"}
      </Text>
    
      </View>
    
      </View>
    
      <KeyboardAvoidingView  style={styles.KeyboardAvoidingViewqa} enabled={true} behavior={"padding"}>
        
      <View  style={styles.ViewNn} pointerEvents={"auto"}>
        <TextField onChangeText={
     (newTextFieldUnderlineValue) => { const savedFilterName = newTextFieldUnderlineValue;
      try {
          setSavedFilterName(savedFilterName);
      } catch (err) {
        console.error(err)
      }
    }
  } style={{ color: theme.colors.background_inverse }} placeholder={"+ Name this filter"} type={"underline"} value={savedFilterName} keyboardAppearance={"default"} keyboardType={"default"} returnKeyLabel={""} returnKeyType={"done"} />
      </View>
    
      <View  style={styles.View_5Q} pointerEvents={"auto"}>
        <TextField onChangeText={
     (newTextAreaUnderlineValue) => { const savedFilterDescription = newTextAreaUnderlineValue;
      try {
          setSavedFilterDescription(savedFilterDescription);
      } catch (err) {
        console.error(err)
      }
    }
  } style={{ color: theme.colors.background_inverse }} placeholder={"+ Add a description"} type={"underline"} multiline={true} value={savedFilterDescription} autoCorrect={true} autoCapitalize={"sentences"} keyboardAppearance={"default"} keyboardType={"default"} returnKeyType={"done"} />
      </View>
    
      </KeyboardAvoidingView>
    
      </View>
    
      </View>
    
      <View  style={styles.Viewiv} >
        
      <View  style={styles.ViewY8} >
        <ButtonOutline  style={[styles.ButtonOutlineVe, { color: theme.colors.strong, backgroundColor: theme.colors.primary }]} title={"Save"}  />
      </View>
    
      <View  style={styles.ViewQg} >
        
      <Touchable onPress={
     () => { 
      try {
          navigation.goBack();
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchablezy} >
        
      <Text  style={[styles.TextmF, { color: theme.colors.error }]} >
        {"Cancel"}
      </Text>
    
      </Touchable>
    
      </View>
    
      </View>
    
      </ScreenContainer>
    
      );
    };
    

const styles = StyleSheet.create({ TextXi: {
fontFamily: 'System', fontWeight: '700',
fontSize: 20,
}, ViewTO: {
opacity: 1,
marginLeft: '4%',
marginRight: 4,
flexDirection: 'row',
alignItems: 'center',
marginTop: 18,
}, TextIO: {
marginTop: 10,
marginLeft: '4%',
marginRight: '4%',
fontSize: 14,
}, Textx3: {
fontSize: 10,
fontFamily: 'System', fontWeight: '400',
}, ViewYb: {
paddingLeft: 6,
paddingRight: 6,
paddingTop: 3,
paddingBottom: 3,
marginRight: 3,
marginTop: 4,
}, Texta4: {
fontSize: 10,
fontFamily: 'System', fontWeight: '400',
}, ViewAL: {
paddingLeft: 6,
paddingRight: 6,
paddingTop: 3,
paddingBottom: 3,
marginRight: 3,
marginTop: 4,
}, TextSR: {
fontSize: 10,
fontFamily: 'System', fontWeight: '400',
}, ViewoO: {
paddingLeft: 6,
paddingRight: 6,
paddingTop: 3,
paddingBottom: 3,
marginRight: 3,
marginTop: 4,
}, TextLB: {
fontSize: 10,
fontFamily: 'System', fontWeight: '400',
}, Viewm2: {
paddingLeft: 6,
paddingRight: 6,
paddingTop: 3,
paddingBottom: 3,
marginRight: 3,
marginTop: 4,
}, ViewHd: {
flexWrap: 'wrap',
flexDirection: 'row',
marginLeft: '4%',
marginRight: '4%',
}, ViewNn: {
minHeight: 50,
marginLeft: '4%',
marginRight: '4%',
marginTop: 12,
justifyContent: 'space-between',
}, View_5Q: {
minHeight: 50,
marginLeft: '4%',
marginRight: '4%',
marginTop: 12,
justifyContent: 'space-between',
}, KeyboardAvoidingViewqa: {
flexGrow: 1,
}, ButtonOutlineVe: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
borderWidth: 1,
textAlign: 'center',
fontSize: 16,
}, ViewY8: {
minHeight: 50,
paddingLeft: 34,
paddingRight: 34,
marginTop: 16,
}, TextmF: {
fontFamily: 'System', fontWeight: '700',
}, Touchablezy: {
alignItems: 'center',
justifyContent: 'center',
minHeight: '100%',
width: '50%',
}, ViewQg: {
marginTop: 6,
alignItems: 'center',
flexDirection: 'row',
justifyContent: 'center',
height: 34,
marginBottom: 12,
}, Viewiv: {
width: '100%',
paddingLeft: 34,
paddingRight: 34,
paddingBottom: '4%',
paddingTop: 35,
} });


export default withTheme(MyBetsSaveFilterScreen);