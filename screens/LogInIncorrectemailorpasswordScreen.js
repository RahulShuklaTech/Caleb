import React from 'react';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonOutline,
  Icon,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const LogInIncorrectemailorpasswordScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

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
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Forget your password?</Text>
                <Text style={styles.modalTextSmall}>
                  We'll send you an email so you can reset it.
                </Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: '#3a3838',
        borderRadius: 6,
        paddingLeft: 35,
        paddingRight: 35,
        paddingTop: 35,
        paddingBottom: 27,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 3,
      },
      button: {
        borderRadius: 6,
        paddingRight: 32,
        paddingLeft: 32,
        paddingTop: 16,
        paddingBottom: 16,
        elevation: 0,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonSendEmail: {
        backgroundColor: '#BFAB80',
        marginBottom: 10,
      },
      buttonClose: {
        backgroundColor: 'transparent',
      },
      textSendEmail: {
        color: '#0f0f0f',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '14',
      },
      textStyle: {
        color: '#FE2900',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalTextSmall: {
        marginBottom: 16,
        color: '#F2F2F2',
        fontWeight: 'bold',
        fontSize: '14',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: '20',
        color: '#F2F2F2',
        textAlign: 'center',
      },
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
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 3,
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
            <Text
              style={{
                fontSize: 20,
                color: '#F2F2F2',
                textAlign: 'center',
                fontWeight: 'bold',
                marginBottom: 10,
              }}
            >
              Forget your password?
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#F2F2F2',
                textAlign: 'center',
                fontWeight: 'bold',
                marginBottom: 16,
              }}
            >
              We'll send you an email so you can reset it.
            </Text>
          </Modal>
        </Portal>
        {/* Below is a Button Component */}
        {/* You can use any Touchable component from React Native */}
        <Button
          style={{ marginTop: 0 }}
          labelStyle={{
            fontFamily: 'System',
            fontSize: 14,
            color: '#A5ADB7',
            fontWeight: '700',
            textTransform: 'none',
            textSpacing: '0',
          }}
          onPress={showModal}
        >
          Forget your password?
        </Button>
      </Provider>
    );
  };

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.background }}
      scrollable={true}
      hasSafeArea={true}
    >
      <Surface
        style={{ borderRadius: 0, backgroundColor: theme.colors.background }}
        elevation={0}
      >
        <View style={[styles.ViewAu, { borderRadius: 0 }]}>
          <View style={styles.View_10} pointerEvents={'auto'}>
            <View style={[styles.Viewc7, { borderRadius: 0 }]}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.goBack();
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View style={styles.ViewZ5}>
                  <Icon
                    name={'Ionicons/ios-chevron-back-sharp'}
                    size={28}
                    color={theme.colors.light}
                  />
                </View>
              </Touchable>
            </View>
            <View style={styles.Viewfs} />
            <View style={[styles.ViewR2, { borderRadius: 0 }]} />
          </View>
        </View>
      </Surface>

      <View style={styles.ViewVK} pointerEvents={'auto'}>
        <View style={styles.Viewxs}>
          <Text
            style={[styles.TextCU, { color: theme.colors.background_inverse }]}
          >
            {'Your email or password are incorrect.'}
          </Text>
        </View>

        <View style={styles.ViewTf}>
          <ButtonOutline
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonOutlinevE,
              {
                color: theme.colors.strong,
                backgroundColor: theme.colors.primary,
              },
            ]}
            title={'Try again'}
          />
        </View>

        <View style={styles.View_3U}>
          <View style={styles.ViewZd}>
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Welcome_Stack');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.TouchableVN}
            >
              <Text style={[styles.TextbS, { color: theme.colors.light }]}>
                {'Not a member? Sign up!'}
              </Text>
            </Touchable>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ViewZ5: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 16,
    paddingRight: 16,
    minHeight: 50,
  },
  Viewc7: {
    minWidth: '33%',
    maxWidth: '34%',
    alignItems: 'flex-start',
  },
  Viewfs: {
    alignContent: 'center',
    justifyContent: 'center',
    minWidth: '33%',
    maxWidth: '34%',
    maxHeight: 50,
  },
  ViewR2: {
    minWidth: '33%',
    maxWidth: '34%',
    alignItems: 'flex-end',
  },
  View_10: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewAu: {
    justifyContent: 'center',
  },
  TextCU: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Viewxs: {
    minHeight: 50,
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  ButtonOutlinevE: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 16,
    minHeight: 54,
  },
  ViewTf: {
    minHeight: 50,
    paddingLeft: 34,
    paddingRight: 34,
    marginTop: 50,
  },
  TextbS: {
    fontFamily: 'System',
    fontWeight: '700',
    marginTop: 14,
    marginBottom: 14,
    marginLeft: 14,
    marginRight: 14,
  },
  TouchableVN: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewZd: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  View_3U: {
    justifyContent: 'center',
    paddingBottom: '8%',
    paddingTop: '8%',
  },
  ViewVK: {
    justifyContent: 'space-between',
  },
});

export default withTheme(LogInIncorrectemailorpasswordScreen);
