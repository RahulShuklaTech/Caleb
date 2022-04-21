import React from 'react';
import * as SwaggerAPIApi from '../apis/SwaggerAPIApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { ButtonOutline, Icon, ScreenContainer, TextField, Touchable, withTheme } from '@draftbit/ui';
import { KeyboardAvoidingView, Modal, StatusBar, StyleSheet, Text, View } from 'react-native';

    

    const LogInScreen = props => {
      const Constants = GlobalVariables.useValues();
         const Variables = Constants;
      
const setGlobalVariableValue = GlobalVariables.useSetValue();
      const verifyLogin = (loginResult) => {
    if(loginResult == "Invalid Username/Email or Password"){
return true;
}
username = loginResult.username;
authToken = loginResult.accessToken;
internalId = loginResult.internalId;
return false;
  };

// Popup that prompts the user to enter their email for a password reset email to be sent to them.
  const forgetPasswordModal = () => {
    //import React, { useState } from "react";
//import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from "react-native";

const App = () => {
const [modalVisible, setModalVisible] = useState(false);
return (
  <View style={styles.centeredView}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Forget your password?</Text>
          <Text style={styles.modalTextSmall}>We'll send you an email so you can reset it.</Text>
          <Pressable
            style={[styles.button, styles.buttonSendEmail]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textSendEmail}>Send Email</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
    <Pressable
      style={[styles.button, styles.buttonOpen]}
      onPress={() => setModalVisible(true)}
    >
      <Text style={styles.textStyle}>Show Modal</Text>
    </Pressable>
  </View>
);
};

const styles = StyleSheet.create({
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},
modalView: {
  margin: 20,
  backgroundColor: "#3a3838",
  borderRadius: 6,
  paddingLeft: 35,
  paddingRight: 35,
  paddingTop: 35,
  paddingBottom: 27,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.5,
  shadowRadius: 4,
  elevation: 3
},
button: {
  borderRadius: 6,
  paddingRight: 32,
  paddingLeft: 32,
  paddingTop: 16,
  paddingBottom: 16,
  elevation: 0
},
buttonOpen: {
  backgroundColor: "#F194FF",
},
buttonSendEmail: {
  backgroundColor: "#BFAB80",
  marginBottom: 10,
},
buttonClose: {
  backgroundColor: "transparent",
},
textSendEmail: {
  color: "#0f0f0f",
  fontWeight: "bold",
  textAlign: "center",
  fontSize: "14"
},
textStyle: {
  color: "#FE2900",
  fontWeight: "bold",
  textAlign: "center"
},
modalTextSmall: {
  marginBottom: 16,
  color: "#F2F2F2",
  fontWeight: "bold",
  fontSize: "14",
  textAlign: "center"
},
modalText: {
  marginBottom: 10,
  fontWeight: "bold",
  fontSize: "20",
  color: "#F2F2F2",
  textAlign: "center"
}
});

//export default App;

//////// See https://reactnative.dev/docs/modal
//////// Still need: Email text input area, send email button and link //////// through Zapier or whatever integration needed,
//////// set "Forget your password?" touchable as open
//////// Ideally remove cancel button and make clicking outside area
//////// close the modal. Make button get darker when pressed (see other
//////// main buttons to understand what I mean.

// Functions can be triggered via Button/Touchable actions.
// Hooks are run per ReactJS rules
  };

const forgotPasswordModalTwo = () => {
      const [visible, setVisible] = React.useState(false);

// methods that handle a component's visibility state
const showModal = () => setVisible(true);
const hideModal = () => setVisible(false);

// define styles for the Modal here
const containerStyle = {
  backgroundColor: '#3a3838',
  paddingLeft: 35,
  paddingRight: 35,
  paddingTop: 35,
  paddingBottom: 27,
  marginLeft: 32,
  marginRight: 32,
  borderRadius: 6,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.5,
  shadowRadius: 4,
  elevation: 3
};

return (
  <Provider>
    <Portal>
      <Modal
        animationType="slide"
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
        <Text style={{ fontSize: 20, color: '#F2F2F2', textAlign: 'center', fontWeight: "bold", marginBottom: 10 }}>
          Forget your password?
        </Text>
        <Text style={{ fontSize: 14, color: '#F2F2F2', textAlign: 'center', fontWeight: "bold", marginBottom: 16 }}>
          We'll send you an email so you can reset it.
        </Text>         
      </Modal>
    </Portal>
    {/* Below is a Button Component */}
    {/* You can use any Touchable component from React Native */}
   <Button
      style={{ marginTop: 0 }}
      labelStyle={{ fontFamily: 'System', fontSize: 14, color: '#A5ADB7', fontWeight: "700", textTransform: "none", textSpacing: "0" }}
      onPress={showModal}
    >
      Forget your password?
    </Button>
  </Provider>
);
  };

const getInternalId = (result) => {
  return result.internalId
};

const getAuthToken = (result) => {
  return "Bearer " + result.accessToken
};
      
      const { theme } = props;
      const { navigation } = props;
      
      
      
      React.useEffect(() => {
  StatusBar.setBarStyle('light-content');
}, []);
      
      
      
      
      
      
      
      const [textPassword, setTextPassword] = React.useState("");
const [userEmail, setUserEmail] = React.useState("");
      
      

      return (
        
      <ScreenContainer  style={{ backgroundColor: theme.colors.background }} scrollable={true} hasSafeArea={true}>
        
      <View  style={[styles.ViewbQ, { borderRadius: 0 }]} >
        
      <View  style={styles.ViewhS} pointerEvents={"auto"}>
        
      <View  style={[styles.ViewmW, { borderRadius: 0 }]} >
        
      <Touchable onPress={
     () => { 
      try {
          navigation.goBack();
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.ViewNg} >
        <Icon   name={"Ionicons/ios-chevron-back"} size={32} color={theme.colors.background_inverse} />
      <Text  style={[styles.Textyu, { color: theme.colors.background_inverse }]} >
        {"Back"}
      </Text>
    
      </View>
    
      </Touchable>
    
      </View>
    <View  style={styles.ViewtH}  /><View  style={[styles.ViewX5, { borderRadius: 0 }]}  />
      </View>
    
      </View>
    
      <View  style={styles.ViewWg} pointerEvents={"auto"}>
        
      <View  style={styles.Viewg7} >
        
      <View  style={styles.View_79} >
        
      <View  style={styles.ViewZG} >
        
      <Text  style={[styles.Textdg, { color: theme.colors.background_inverse }]} >
        {"Log In"}
      </Text>
    
      <View   pointerEvents={"auto"}>
        <>{ !(verifyLogin(Constants["debugVar"])) ? null : 
      <Text  style={[styles.TextP6, { color: theme.colors.error }]} >
        {Constants["debugVar"]}
      </Text>
     }</>
      </View>
    
      <KeyboardAvoidingView  style={styles.KeyboardAvoidingViewds} enabled={true} behavior={"padding"}>
        <TextField onChangeText={
     (newTextFieldUnderlineValue) => { const userEmail = newTextFieldUnderlineValue;
      try {
          setUserEmail(userEmail);
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.TextFieldWL, { color: theme.colors.background_inverse }]} placeholder={"Email or Username"} type={"underline"} value={userEmail} placeholderTextColor={theme.colors.light} autoFocus={true} keyboardAppearance={"default"} keyboardType={"email-address"} returnKeyType={"next"} autoCapitalize={"none"} editable={true} /><TextField onChangeText={
     (newTextFieldUnderlineValue) => { const textPassword = newTextFieldUnderlineValue;
      try {
          setTextPassword(textPassword);
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.TextFieldvB, { color: theme.colors.background_inverse }]} type={"underline"} value={textPassword} placeholderTextColor={theme.colors.light} autoFocus={false} keyboardAppearance={"default"} keyboardType={"default"} returnKeyType={"next"} autoCapitalize={"none"} editable={true} secureTextEntry={true} placeholder={"Password"} />
      </KeyboardAvoidingView>
    
      </View>
    
      <View  style={styles.Viewau} >
        <>{ Constants["loadingLogin"] ? null : <ButtonOutline onPress={
    async () => { 
      try {
          setGlobalVariableValue({
          key: "loadingLogin",
          value: true
        });
const loginResult = await SwaggerAPIApi.loginPOST(Constants, {loginIdentity: userEmail, passwrd: textPassword,});
  setGlobalVariableValue({
          key: "loadingLogin",
          value: false
        });
  setGlobalVariableValue({
          key: "debugVar",
          value: loginResult
        });
 if (verifyLogin(loginResult)) { return }
  setGlobalVariableValue({
          key: "internalId",
          value: getInternalId(loginResult)
        });
  setGlobalVariableValue({
          key: "authToken",
          value: getAuthToken(loginResult)
        });
  navigation.navigate("MainTabNavigator");
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonOutlineaW, { color: theme.colors.strong, backgroundColor: theme.colors.primary }]} title={"Log In"}  loading={false} disabled={false} /> }</><>{ !(Constants["loadingLogin"]) ? null : <ButtonOutline  style={[styles.ButtonOutline_1V, { backgroundColor: theme.colors.primary, color: theme.colors.strong }]} title={"Logging In"} loading={true} /> }</>
      </View>
    
      </View>
    
      </View>
    
      <View  style={styles.ViewM1} >
        
      <View  style={styles.View_2H} >
        
      <Touchable onPress={
     () => { 
      try {
          navigation.navigate('Welcome_Stack',
{ screen: 'SignUpScreen'});
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_3E} >
        
      <Text  style={[styles.TextIi, { color: theme.colors.light }]} >
        {"Not a member? Sign up!"}
      </Text>
    
      </Touchable>
    
      </View>
    
      </View>
    
      </View>
    
      <Modal  style={{ backgroundColor: theme.colors.background }} visible={Constants["toggleForgotPasswordModal"]} animationType={"slide"} transparent={false} presentationStyle={"pageSheet"}>
        
      <View  style={[styles.View_1m, { backgroundColor: theme.colors.background, borderRadius: 10 }]} pointerEvents={"auto"}>
        
      <View   pointerEvents={"auto"}>
        
      <View  style={styles.Viewf2} pointerEvents={"auto"}>
        
      <View  style={styles.ViewwO} pointerEvents={"auto"}>
        
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleForgotPasswordModal",
          value: false
        });
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.ViewC1} pointerEvents={"auto"}>
        <Icon   name={"Ionicons/ios-chevron-back"} size={32} color={theme.colors.background_inverse} />
      <Text  style={[styles.Textiz, { color: theme.colors.background_inverse }]} >
        {"Back"}
      </Text>
    
      </View>
    
      </Touchable>
    
      </View>
    
      <View  style={styles.ViewbW} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_46, { color: theme.colors.background_inverse }]} >
        {"Forgot Password?"}
      </Text>
    
      </View>
    <View  style={styles.ViewA7} pointerEvents={"auto"} />
      </View>
    
      <View  style={styles.Viewh0} pointerEvents={"auto"}>
        
      <View   pointerEvents={"auto"}>
        
      <Text  style={[styles.TextLd, { color: theme.colors.error }]} >
        {"This email is not associated with an existing account."}
      </Text>
    
      <View  style={styles.View_3V} pointerEvents={"auto"}>
        
      <Touchable   >
        
      <Text  style={[styles.TextEC, { color: theme.colors.light }]} >
        {"Create a new account"}
      </Text>
    
      </Touchable>
    
      </View>
    
      </View>
    
      <View   pointerEvents={"auto"}>
        
      <Text  style={[styles.Textbd, { color: theme.colors.primary }]} >
        {"You will receive an email with instructions about how to reset your password in a few minutes."}
      </Text>
    
      <View  style={styles.ViewO6} pointerEvents={"auto"}>
        
      <Touchable   >
        
      <Text  style={[styles.TextMU, { color: theme.colors.light }]} >
        {"Close"}
      </Text>
    
      </Touchable>
    
      </View>
    
      </View>
    <TextField onChangeText={
     (newTextFieldUnderlineValue) => { const textPassword = newTextFieldUnderlineValue;
      try {
          setTextPassword(textPassword);
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.TextFieldUU, { color: theme.colors.background_inverse }]} type={"underline"} value={textPassword} placeholderTextColor={theme.colors.light} autoFocus={true} keyboardAppearance={"default"} keyboardType={"default"} returnKeyType={"done"} autoCapitalize={"none"} editable={true} secureTextEntry={false} placeholder={"Enter email..."} />
      <View  style={styles.Viewjz} >
        
      <Touchable  style={styles.TouchablekQ} >
        
      <Text  style={[styles.TextIS, { color: theme.colors.light }]} >
        {"Send Password Reset Email"}
      </Text>
    
      </Touchable>
    
      </View>
    
      </View>
    
      </View>
    <View  style={[styles.Viewu4, { backgroundColor: theme.colors.background }]} pointerEvents={"auto"} />
      </View>
    
      </Modal>
    
      </ScreenContainer>
    
      );
    };
    

const styles = StyleSheet.create({ Textyu: {
fontSize: 18,
}, ViewNg: {
alignItems: 'center',
paddingRight: 16,
minHeight: 50,
flexDirection: 'row',
}, ViewmW: {
minWidth: '33%',
maxWidth: '34%',
alignItems: 'flex-start',
}, ViewtH: {
alignContent: 'center',
justifyContent: 'center',
minWidth: '33%',
maxWidth: '34%',
maxHeight: 50,
}, ViewX5: {
minWidth: '33%',
maxWidth: '34%',
alignItems: 'flex-end',
}, ViewhS: {
flexDirection: 'row',
justifyContent: 'space-between',
}, ViewbQ: {
justifyContent: 'center',
}, Textdg: {
textAlign: 'center',
fontSize: 28,
fontFamily: 'System', fontWeight: '700',
}, TextP6: {
alignSelf: 'center',
textAlign: 'center',
paddingTop: 12,
}, TextFieldWL: {
minHeight: 55,
marginTop: 20,
}, TextFieldvB: {
minHeight: 55,
marginTop: 20,
}, KeyboardAvoidingViewds: {
flexGrow: 1,
}, TextEo: {
fontFamily: 'System', fontWeight: '400',
marginTop: 8,
marginBottom: 8,
}, TouchableaV: {
alignItems: 'center',
justifyContent: 'center',
}, Viewns: {
alignItems: 'flex-end',
justifyContent: 'center',
}, ViewZG: {
minHeight: 50,
paddingLeft: '4%',
paddingRight: '4%',
paddingTop: 10,
}, ButtonOutlineaW: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
borderWidth: 1,
textAlign: 'center',
fontSize: 16,
height: 54,
}, ButtonOutline_1V: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
borderWidth: 1,
textAlign: 'center',
fontSize: 16,
height: 54,
}, Viewau: {
minHeight: 50,
paddingLeft: 34,
paddingRight: 34,
marginTop: 30,
}, View_79: {
minHeight: 50,
}, Viewg7: {
minHeight: 50,
}, TextIi: {
fontFamily: 'System', fontWeight: '700',
marginTop: 14,
marginBottom: 14,
marginLeft: 14,
marginRight: 14,
}, Touchable_3E: {
alignItems: 'center',
justifyContent: 'center',
}, View_2H: {
alignItems: 'center',
flexDirection: 'row',
justifyContent: 'center',
}, ViewM1: {
justifyContent: 'center',
marginTop: 28,
}, ViewWg: {
justifyContent: 'space-between',
}, Textiz: {
fontSize: 18,
fontFamily: 'System', fontWeight: '400',
}, ViewC1: {
flexDirection: 'row',
alignItems: 'center',
height: 50,
}, ViewwO: {
width: '25%',
}, Text_46: {
textAlign: 'center',
fontFamily: 'System', fontWeight: '700',
fontSize: 18,
}, ViewbW: {
width: '50%',
height: 50,
alignItems: 'center',
justifyContent: 'center',
}, ViewA7: {
width: '25%',
}, Viewf2: {
flexDirection: 'row',
justifyContent: 'space-between',
}, TextLd: {
alignSelf: 'center',
textAlign: 'center',
}, TextEC: {
marginTop: 8,
marginBottom: 8,
fontFamily: 'System', fontWeight: '700',
alignSelf: 'center',
}, View_3V: {
alignItems: 'center',
justifyContent: 'center',
marginTop: 18,
}, Textbd: {
alignSelf: 'center',
textAlign: 'center',
}, TextMU: {
marginTop: 8,
marginBottom: 8,
fontFamily: 'System', fontWeight: '700',
alignSelf: 'center',
paddingLeft: 16,
paddingRight: 16,
}, ViewO6: {
alignItems: 'center',
justifyContent: 'center',
marginTop: 18,
}, TextFieldUU: {
minHeight: 55,
}, TextIS: {
fontFamily: 'System', fontWeight: '700',
marginTop: 8,
marginBottom: 8,
}, TouchablekQ: {
alignItems: 'center',
justifyContent: 'center',
}, Viewjz: {
alignItems: 'center',
justifyContent: 'center',
marginTop: 18,
}, Viewh0: {
paddingLeft: '4%',
paddingRight: '4%',
paddingTop: 18,
}, Viewu4: {
height: 11,
}, View_1m: {
height: '100%',
justifyContent: 'space-between',
} });


export default withTheme(LogInScreen);