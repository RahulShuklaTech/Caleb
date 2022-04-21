import React from 'react';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { ButtonOutline, Icon, ScreenContainer, Surface, TextField, Touchable, withTheme } from '@draftbit/ui';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';

    

    const LogInResetPasswordScreen = props => {
      const Constants = GlobalVariables.useValues();
         const Variables = Constants;
      
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
      
      const { theme } = props;
      const { navigation } = props;
      
      
      
      
      
      
      
      
      
      
      
      const [userEmail, setUserEmail] = React.useState("");
      
      

      return (
        
      <ScreenContainer  style={{ backgroundColor: theme.colors.background }} scrollable={true} hasSafeArea={true}>
        
      <Surface  style={{ borderRadius: 0, backgroundColor: theme.colors.background }} elevation={0}>
        
      <View  style={[styles.View_0m, { borderRadius: 0 }]} >
        
      <View  style={styles.Viewke} pointerEvents={"auto"}>
        
      <View  style={[styles.View_77, { borderRadius: 0 }]} >
        
      <Touchable onPress={
     () => { 
      try {
          navigation.goBack();
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.ViewwY} >
        <Icon   name={"Ionicons/ios-chevron-back-sharp"} size={28} color={theme.colors.light} />
      </View>
    
      </Touchable>
    
      </View>
    <View  style={styles.ViewhQ}  /><View  style={[styles.ViewxS, { borderRadius: 0 }]}  />
      </View>
    
      </View>
    
      </Surface>
    
      <View  style={styles.ViewH0} pointerEvents={"auto"}>
        
      <View  style={styles.ViewLb} >
        
      <Text  style={[styles.Text_2I, { color: theme.colors.background_inverse }]} >
        {"Reset password."}
      </Text>
    
      <KeyboardAvoidingView  style={styles.KeyboardAvoidingViewjF} enabled={true} behavior={"padding"}>
        <TextField onChangeText={
     (newTextFieldUnderlineValue) => { const userEmail = newTextFieldUnderlineValue;
      try {
          setUserEmail(userEmail);
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.TextFieldME, { color: theme.colors.background_inverse }]} placeholder={"Email..."} type={"underline"} value={userEmail} placeholderTextColor={theme.colors.light} autoFocus={true} keyboardAppearance={"default"} keyboardType={"email-address"} returnKeyType={"next"} autoCapitalize={"none"} editable={true} />
      </KeyboardAvoidingView>
    
      </View>
    
      <View  style={styles.Viewct} >
        <ButtonOutline  style={[styles.ButtonOutlineLx, { color: theme.colors.strong, backgroundColor: theme.colors.primary }]} title={"Send Email"}  />
      </View>
    
      </View>
    
      </ScreenContainer>
    
      );
    };
    

const styles = StyleSheet.create({ ViewwY: {
justifyContent: 'center',
alignItems: 'flex-start',
paddingLeft: 16,
paddingRight: 16,
minHeight: 50,
}, View_77: {
minWidth: '33%',
maxWidth: '34%',
alignItems: 'flex-start',
}, ViewhQ: {
alignContent: 'center',
justifyContent: 'center',
minWidth: '33%',
maxWidth: '34%',
maxHeight: 50,
}, ViewxS: {
minWidth: '33%',
maxWidth: '34%',
alignItems: 'flex-end',
}, Viewke: {
flexDirection: 'row',
justifyContent: 'space-between',
}, View_0m: {
justifyContent: 'center',
}, Text_2I: {
textAlign: 'center',
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, TextFieldME: {
minHeight: 55,
marginTop: 20,
}, KeyboardAvoidingViewjF: {
flexGrow: 1,
}, ViewLb: {
minHeight: 50,
paddingLeft: '4%',
paddingRight: '4%',
}, ButtonOutlineLx: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
borderWidth: 1,
textAlign: 'center',
fontSize: 16,
minHeight: 54,
}, Viewct: {
minHeight: 50,
paddingLeft: 34,
paddingRight: 34,
marginBottom: '4%',
marginTop: 50,
}, ViewH0: {
justifyContent: 'space-between',
} });


export default withTheme(LogInResetPasswordScreen);