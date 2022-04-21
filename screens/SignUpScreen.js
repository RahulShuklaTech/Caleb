import React from 'react';
import * as SwaggerAPIApi from '../apis/SwaggerAPIApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { ButtonOutline, Checkbox, Icon, ScreenContainer, TextField, Touchable, withTheme } from '@draftbit/ui';
import * as WebBrowser from 'expo-web-browser';
import { KeyboardAvoidingView, StatusBar, StyleSheet, Text, View } from 'react-native';

    

    const SignUpScreen = props => {
      const Constants = GlobalVariables.useValues();
         const Variables = Constants;
      
const setGlobalVariableValue = GlobalVariables.useSetValue();
      const getAuthToken = (result) => {
  return "Bearer " + result.accessToken
};

const signUpAsUsername = (textUsername) => {
  return textUsername == "" ? "" : " as " + textUsername;
};

const verifySignUp = (signUpResult) => {
    if(
  signUpResult == "Username/Email Already Exists, Please Select a New One" ||
  signUpResult == "Sign Up Failed"
){
return true;
}
username = signUpResult.username;
authToken = signUpResult.accessToken;
internalId = signUpResult.internalId;
return false;
  };

const myFunctionName = (response) => {
  // Type the code for the body of your function or hook here.
// Functions can be triggered via Button/Touchable actions.
// Hooks are run per ReactJS rules
console.log(response)
};

const verifyPassword = (textPassword) => {
  return textPassword.length < 8 ? true : false;
};

const verifyEmail = (textEmail) => {
  /*const validate = (email) => {
const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r )?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r )?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

return expression.test(String(email).toLowerCase())
}*/

// Can also use other examples from https://mailtrap.io/blog/react-native-email-validation/
// Regex options:
//  /\S+@\S+/
//  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
//  (works) /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
//  /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r )?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r )?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i

const emailRegex = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r )?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r )?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

if(emailRegex.test(textEmail)){
return false;  // false, the email is valid
}else{
return true; // true, the email is invalid
};
};

const verifyCheckbox = () => {
  return checkboxTermsPrivacy == false ? true : false;
};

const getInternalId = (result) => {
  return result.internalId
};
      
      const { theme } = props;
      const { navigation } = props;
      
      
      
      React.useEffect(() => {
  StatusBar.setBarStyle('light-content');
}, []);
      
      
      
      
      
      
      
      const [checkboxError, setCheckboxError] = React.useState(false);
const [checkboxTermsPrivacy, setCheckboxTermsPrivacy] = React.useState(false);
const [emailError, setEmailError] = React.useState(false);
const [passwordError, setPasswordError] = React.useState(false);
const [textEmail, setTextEmail] = React.useState("");
const [textFirstName, setTextFirstName] = React.useState("");
const [textPassword, setTextPassword] = React.useState("");
const [textUsername, setTextUsername] = React.useState("");
      
      

      return (
        
      <ScreenContainer   scrollable={true} hasSafeArea={true}>
        
      <View  style={[styles.ViewDT, { borderRadius: 0 }]} >
        
      <View  style={styles.ViewVZ} pointerEvents={"auto"}>
        
      <View  style={[styles.View_1x, { borderRadius: 0 }]} >
        
      <Touchable onPress={
     () => { 
      try {
          navigation.goBack();
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.View_22} >
        <Icon   name={"Ionicons/ios-chevron-back"} size={32} color={theme.colors.background_inverse} />
      <Text  style={[styles.Text_5l, { color: theme.colors.background_inverse }]} >
        {"Back"}
      </Text>
    
      </View>
    
      </Touchable>
    
      </View>
    <View  style={styles.ViewT4}  /><View  style={[styles.Viewcb, { borderRadius: 0 }]}  />
      </View>
    
      </View>
    
      <View  style={styles.Viewaz} >
        
      <Text  style={[styles.Text_00, { color: theme.colors.background_inverse }]} >
        {"Sign Up"}
      </Text>
    
      <View   pointerEvents={"auto"}>
        <>{ !(verifySignUp(Constants["debugVar"])) ? null : 
      <Text  style={[styles.Textoa, { color: theme.colors.error }]}  numberOfLines={50}>
        {Constants["debugVar"]}
      </Text>
     }</><>{ !(emailError) ? null : 
      <Text  style={[styles.TextQb, { color: theme.colors.error }]} >
        {"Invalid Email"}
      </Text>
     }</><>{ !(passwordError) ? null : 
      <Text  style={[styles.TextVM, { color: theme.colors.error }]} >
        {"Password Must Be At Least 8 Characters"}
      </Text>
     }</><>{ !(checkboxError) ? null : 
      <Text  style={[styles.TextPF, { color: theme.colors.error }]} >
        {"Please Agree to the Terms and Privacy Policy"}
      </Text>
     }</>
      </View>
    
      <KeyboardAvoidingView  style={styles.KeyboardAvoidingViewj2} enabled={true} behavior={"padding"}>
        <TextField onChangeText={
     (newTextFieldUnderlineValue) => { const textFirstName = newTextFieldUnderlineValue;
      try {
          setTextFirstName(textFirstName);
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.TextFieldav, { color: theme.colors.background_inverse }]} placeholder={"First Name"} type={"underline"} value={textFirstName} placeholderTextColor={theme.colors.light} autoFocus={true} keyboardAppearance={"default"} keyboardType={"default"} returnKeyType={"next"} autoCapitalize={"words"} editable={true} maxLength={35} selectTextOnFocus={true} /><TextField onChangeText={
     (newTextFieldUnderlineValue) => { const textUsername = newTextFieldUnderlineValue;
      try {
          setTextUsername(textUsername);
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.TextField_2l, { color: theme.colors.background_inverse }]} placeholder={"Choose a Username"} type={"underline"} value={textUsername} placeholderTextColor={theme.colors.light} autoFocus={false} keyboardAppearance={"default"} keyboardType={"default"} returnKeyType={"next"} autoCapitalize={"none"} editable={true} maxLength={45} selectTextOnFocus={true} /><TextField onChangeText={
     (newTextFieldUnderlineValue) => { const textEmail = newTextFieldUnderlineValue;
      try {
          setTextEmail(textEmail);
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.TextFieldsy, { color: theme.colors.background_inverse }]} error={emailError} placeholder={"Email"} type={"underline"} value={textEmail} placeholderTextColor={theme.colors.light} autoFocus={false} keyboardAppearance={"default"} keyboardType={"email-address"} returnKeyType={"next"} autoCapitalize={"none"} editable={true} /><TextField onChangeText={
     (newTextFieldUnderlineValue) => { const textPassword = newTextFieldUnderlineValue;
      try {
          setTextPassword(textPassword);
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.TextFieldT9, { color: theme.colors.background_inverse }]} error={passwordError} placeholder={"Password"} type={"underline"} value={textPassword} placeholderTextColor={theme.colors.light} autoFocus={false} keyboardAppearance={"default"} keyboardType={"default"} returnKeyType={"next"} autoCapitalize={"none"} editable={true} secureTextEntry={true} />
      </KeyboardAvoidingView>
    
      </View>
    
      <View  style={styles.ViewjE} >
        
      <View  style={styles.Viewck} pointerEvents={"auto"}>
        
      <View  style={styles.ViewDC} pointerEvents={"auto"}>
        <Checkbox onPress={
     (newCheckboxValue) => { const checkboxTermsPrivacy = newCheckboxValue;
      try {
          setCheckboxTermsPrivacy(checkboxTermsPrivacy);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.CheckboxG8} status={checkboxTermsPrivacy} color={theme.colors.primary} />
      </View>
    
      <View  style={styles.ViewRn} pointerEvents={"auto"}>
        
      <Touchable onPress={
    async () => { 
      try {
         await WebBrowser.openBrowserAsync("https://www.vaultsportshq.com/terms-of-service");
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <Text  style={[styles.Textr4, { color: theme.colors.light }]} >
        {"I agree to the Terms of Service and Privacy Policy."}
      </Text>
    
      </Touchable>
    
      </View>
    
      </View>
    <>{ Constants["loadingSignUp"] ? null : <ButtonOutline onPress={
    async () => { 
      try {
          setEmailError(verifyEmail(textEmail));
 if (verifyEmail(textEmail)) { return }
  setPasswordError(verifyPassword(textPassword));
 if (verifyPassword(textPassword)) { return }
  setCheckboxError(verifyCheckbox(checkboxTermsPrivacy));
 if (verifyCheckbox(checkboxTermsPrivacy)) { return }
  setGlobalVariableValue({
          key: "loadingSignUp",
          value: true
        });
const signUpResult = await SwaggerAPIApi.signUpPOST(Constants, {email: textEmail, firstName: textFirstName, password: textPassword, username: textUsername,});
  setGlobalVariableValue({
          key: "debugVar",
          value: signUpResult
        });
  setGlobalVariableValue({
          key: "loadingSignUp",
          value: false
        });
 if (verifySignUp(signUpResult)) { return }
const test =  setGlobalVariableValue({
          key: "internalId",
          value: getInternalId(signUpResult)
        });
  setGlobalVariableValue({
          key: "authToken",
          value: getAuthToken(signUpResult)
        });
  navigation.navigate('CreateProfileBetaStack',
{ screen: 'CreateProfile4OtherPreferencesScreen'});
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonOutlinehN, { color: theme.colors.strong, backgroundColor: theme.colors.primary }]} title={`Sign Up${signUpAsUsername(textUsername)}`}  loading={false} /> }</><>{ !(Constants["loadingSignUp"]) ? null : <ButtonOutline  style={[styles.ButtonOutlineGq, { backgroundColor: theme.colors.primary, color: theme.colors.strong }]} title={"Signing Up"} loading={true} /> }</>
      <View  style={styles.ViewW7} >
        
      <Touchable onPress={
     () => { 
      try {
          navigation.navigate('Welcome_Stack',
{ screen: 'LogInScreen'});
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchablew0} >
        
      <Text  style={[styles.TextPa, { color: theme.colors.light }]} >
        {"Existing user? Log in."}
      </Text>
    
      </Touchable>
    
      </View>
    
      </View>
    
      </ScreenContainer>
    
      );
    };
    

const styles = StyleSheet.create({ Text_5l: {
fontSize: 18,
}, View_22: {
alignItems: 'center',
paddingRight: 16,
minHeight: 50,
flexDirection: 'row',
}, View_1x: {
minWidth: '33%',
maxWidth: '34%',
alignItems: 'flex-start',
}, ViewT4: {
alignContent: 'center',
justifyContent: 'center',
minWidth: '33%',
maxWidth: '34%',
maxHeight: 50,
}, Viewcb: {
minWidth: '33%',
maxWidth: '34%',
alignItems: 'flex-end',
}, ViewVZ: {
flexDirection: 'row',
justifyContent: 'space-between',
}, ViewDT: {
justifyContent: 'center',
}, Text_00: {
textAlign: 'center',
fontSize: 28,
fontFamily: 'System', fontWeight: '700',
}, Textoa: {
alignSelf: 'center',
textAlign: 'center',
paddingTop: 12,
}, TextQb: {
alignSelf: 'center',
textAlign: 'center',
paddingTop: 12,
}, TextVM: {
paddingTop: 12,
textAlign: 'center',
alignSelf: 'center',
}, TextPF: {
alignSelf: 'center',
textTransform: 'none',
textAlign: 'center',
paddingTop: 12,
}, TextFieldav: {
minHeight: 55,
marginTop: 20,
}, TextField_2l: {
minHeight: 55,
marginTop: 20,
}, TextFieldsy: {
minHeight: 55,
marginTop: 20,
}, TextFieldT9: {
minHeight: 55,
marginTop: 20,
}, KeyboardAvoidingViewj2: {
flexGrow: 1,
}, Viewaz: {
minHeight: 50,
paddingLeft: '4%',
paddingRight: '4%',
paddingTop: 10,
}, CheckboxG8: {
marginRight: 6,
}, ViewDC: {
justifyContent: 'center',
width: '10%',
alignItems: 'flex-start',
}, Textr4: {
width: '100%',
textAlign: 'left',
marginTop: 5,
marginBottom: 5,
fontSize: 14,
textDecorationLine: 'underline',
}, ViewRn: {
width: '90%',
}, Viewck: {
flexDirection: 'row',
marginBottom: 20,
}, ButtonOutlinehN: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
borderWidth: 1,
textAlign: 'center',
fontSize: 16,
minHeight: 54,
}, ButtonOutlineGq: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
borderWidth: 1,
textAlign: 'center',
fontSize: 16,
height: 54,
}, TextPa: {
fontFamily: 'System', fontWeight: '700',
marginTop: 14,
marginLeft: 14,
marginBottom: 14,
marginRight: 14,
}, Touchablew0: {
alignItems: 'center',
justifyContent: 'center',
}, ViewW7: {
marginTop: 28,
alignItems: 'center',
flexDirection: 'row',
justifyContent: 'center',
}, ViewjE: {
minHeight: 50,
paddingLeft: 34,
paddingRight: 34,
marginBottom: '4%',
marginTop: 30,
} });


export default withTheme(SignUpScreen);