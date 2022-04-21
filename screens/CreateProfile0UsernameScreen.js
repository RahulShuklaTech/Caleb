import React from 'react';
import { ButtonOutline, ScreenContainer, Surface, TextField, withTheme } from '@draftbit/ui';
import { KeyboardAvoidingView, StatusBar, StyleSheet, Text, View } from 'react-native';

    

    const CreateProfile0UsernameScreen = props => {
      
      
      
      
      const { theme } = props;
      
      
      
      
      React.useEffect(() => {
  StatusBar.setBarStyle('light-content');
}, []);
      
      
      
      
      
      
      
      const [textUsername, setTextUsername] = React.useState("");
      
      

      return (
        
      <ScreenContainer  style={styles.screen} scrollable={true} hasSafeArea={true}>
        
      <View  style={styles.Viewpc} pointerEvents={"auto"}>
        
      <Surface  style={{ borderRadius: 0, backgroundColor: theme.colors.background }} elevation={0}>
        
      <View  style={[styles.Viewff, { borderRadius: 0 }]} >
        
      <View  style={styles.ViewMh} pointerEvents={"auto"}>
        <View  style={[styles.ViewRi, { borderRadius: 0 }]}  /><View  style={styles.ViewZl}  /><View  style={[styles.ViewZf, { borderRadius: 0 }]}  />
      </View>
    
      </View>
    
      </Surface>
    
      <View  style={styles.Viewyc} >
        
      <View  style={styles.ViewgZ} >
        
      <Text  style={[styles.Textz4, { color: theme.colors.mediumInverse }]} >
        {"Choose a username."}
      </Text>
    
      <View  style={styles.ViewSu} >
        
      <KeyboardAvoidingView  style={styles.KeyboardAvoidingViewa4} enabled={true} behavior={"padding"}>
        <TextField onChangeText={
     (newTextFieldUnderlineValue) => { const textUsername = newTextFieldUnderlineValue;
      try {
          setTextUsername(textUsername);
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.TextFieldbb, { color: theme.colors.background_inverse }]} placeholder={"Username..."} type={"underline"} value={textUsername} placeholderTextColor={theme.colors.light} autoFocus={true} keyboardAppearance={"default"} keyboardType={"default"} returnKeyType={"next"} autoCapitalize={"none"} editable={true} maxLength={45} />
      </KeyboardAvoidingView>
    
      </View>
    
      </View>
    
      </View>
    
      </View>
    
      <View  style={[styles.ViewdG, { borderColor: theme.colors.divider }]} >
        
      <View  style={styles.ViewSd} >
        
      <View  style={styles.ViewpF} >
        
      <Text  style={[styles.Text_3w, { color: theme.colors.light }]} >
        {"We use this information to customize your experience. You can modify these preferences later in Settings."}
      </Text>
    
      </View>
    
      <View  style={styles.ViewWd} >
        <ButtonOutline  style={[styles.ButtonOutlineTU, { color: theme.colors.strong, backgroundColor: theme.colors.primary }]} title={"Next"}  />
      </View>
    
      </View>
    
      </View>
    
      </ScreenContainer>
    
      );
    };
    

const styles = StyleSheet.create({ ViewRi: {
minWidth: '33%',
maxWidth: '34%',
alignItems: 'flex-start',
}, ViewZl: {
alignContent: 'center',
justifyContent: 'center',
minWidth: '33%',
maxWidth: '34%',
maxHeight: 50,
}, ViewZf: {
minWidth: '33%',
maxWidth: '34%',
alignItems: 'flex-end',
}, ViewMh: {
flexDirection: 'row',
justifyContent: 'space-between',
}, Viewff: {
justifyContent: 'center',
}, Textz4: {
textAlign: 'left',
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, TextFieldbb: {
minHeight: 55,
}, KeyboardAvoidingViewa4: {
flexGrow: 1,
}, ViewSu: {
flexWrap: 'wrap',
flexDirection: 'row',
marginTop: 26,
}, ViewgZ: {
minHeight: 50,
paddingLeft: '4%',
paddingRight: '4%',
paddingTop: '4%',
paddingBottom: '4%',
}, Viewyc: {
minHeight: 50,
}, Viewpc: {
minHeight: 50,
}, Text_3w: {
fontFamily: 'System', fontWeight: '400',
fontSize: 10,
textAlign: 'center',
}, ViewpF: {
alignItems: 'center',
justifyContent: 'center',
paddingLeft: 16,
paddingRight: 16,
}, ButtonOutlineTU: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
borderWidth: 1,
textAlign: 'center',
fontSize: 16,
minHeight: 54,
}, ViewWd: {
minHeight: 50,
paddingLeft: 34,
paddingRight: 34,
marginTop: 16,
}, ViewSd: {
justifyContent: 'center',
}, ViewdG: {
minHeight: 50,
justifyContent: 'center',
paddingBottom: 34,
paddingTop: 16,
borderTopWidth: 1,
}, screen: {
justifyContent: 'space-between',
} });


export default withTheme(CreateProfile0UsernameScreen);