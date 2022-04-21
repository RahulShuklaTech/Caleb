import React from 'react';
import * as SwaggerAPIApi from '../apis/SwaggerAPIApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonOutline,
  Icon,
  ScreenContainer,
  TextField,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const CreateProfile4OtherPreferencesScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const userDefaultUnitSizeError = userDefaultUnitSize => {
    return userDefaultUnitSize >= 1 ? false : true;
  };

  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  const [userDefaultUnitSize, setUserDefaultUnitSize] = React.useState('');

  return (
    <ScreenContainer style={styles.screen} scrollable={true} hasSafeArea={true}>
      <View style={styles.ViewOW} pointerEvents={'auto'}>
        <View style={[styles.View_88, { borderRadius: 0 }]}>
          <View style={styles.ViewgQ} pointerEvents={'auto'}>
            <View style={[styles.ViewPO, { borderRadius: 0 }]}>
              <Touchable>
                <View style={styles.View_2T}>
                  <Icon
                    name={'Ionicons/ios-chevron-back-sharp'}
                    size={28}
                    color={theme.colors.background}
                  />
                </View>
              </Touchable>
            </View>
            <View style={styles.ViewzX} />
            <View style={[styles.ViewMt, { borderRadius: 0 }]} />
          </View>
        </View>

        <View style={styles.ViewUq}>
          <View style={styles.ViewaF}>
            <Text
              style={[
                styles.Textlc,
                { color: theme.colors.background_inverse },
              ]}
            >
              {"Welcome to Vault 👋\n\nLet's customize your profile!"}
            </Text>

            <Text
              style={[
                styles.TextCh,
                { color: theme.colors.background_inverse },
              ]}
            >
              {'What is your typical unit size?'}
            </Text>

            <View style={styles.ViewTN}>
              <KeyboardAvoidingView
                style={styles.KeyboardAvoidingViewKZ}
                enabled={true}
                behavior={'padding'}
              >
                <TextField
                  onChangeText={newTextFieldValue => {
                    const userDefaultUnitSize = newTextFieldValue;
                    try {
                      setUserDefaultUnitSize(userDefaultUnitSize);
                      setGlobalVariableValue({
                        key: 'userDefaultUnitSize',
                        value: userDefaultUnitSize,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.TextFieldh8,
                    { color: theme.colors.background_inverse, borderRadius: 0 },
                  ]}
                  error={userDefaultUnitSizeError(userDefaultUnitSize)}
                  placeholder={'Must be greater or equal to 1'}
                  type={'solid'}
                  value={userDefaultUnitSize}
                  autoFocus={true}
                  placeholderTextColor={theme.colors.light}
                  defaultValue={'100'}
                  leftIconMode={'outset'}
                  leftIconName={'MaterialIcons/attach-money'}
                  editable={true}
                  keyboardType={'number-pad'}
                  returnKeyLabel={'Next'}
                  returnKeyType={'next'}
                />
              </KeyboardAvoidingView>
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.Viewys, { borderColor: theme.colors.divider }]}>
        <View style={styles.Viewqo}>
          <View style={styles.ViewBB}>
            <ButtonOutline
              onPress={async () => {
                try {
                  if (userDefaultUnitSizeError(userDefaultUnitSize)) {
                    return;
                  }
                  navigation.navigate('CreateProfileBetaStack', {
                    screen: 'CreateProfile5ChooseYourPromoScreen',
                  });
                  await SwaggerAPIApi.saveUnitSizeGET(Constants, {
                    unitSize: userDefaultUnitSize,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonOutline_1d,
                {
                  color: theme.colors.strong,
                  backgroundColor: theme.colors.primary,
                },
              ]}
              title={'Next'}
            />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  View_2T: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 16,
    paddingRight: 16,
    minHeight: 50,
  },
  ViewPO: {
    minWidth: '33%',
    maxWidth: '34%',
    alignItems: 'flex-start',
  },
  ViewzX: {
    alignContent: 'center',
    justifyContent: 'center',
    minWidth: '33%',
    maxWidth: '34%',
    maxHeight: 50,
  },
  ViewMt: {
    minWidth: '33%',
    maxWidth: '34%',
    alignItems: 'flex-end',
  },
  ViewgQ: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  View_88: {
    justifyContent: 'center',
  },
  Textlc: {
    textAlign: 'left',
    fontSize: 28,
    fontFamily: 'System',
    fontWeight: '700',
    paddingTop: 10,
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  TextCh: {
    textAlign: 'left',
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
    marginLeft: '4%',
    marginRight: '4%',
    marginTop: 48,
  },
  TextFieldh8: {
    fontSize: 20,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
  },
  KeyboardAvoidingViewKZ: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  ViewTN: {
    marginTop: 25,
    marginLeft: '4%',
    marginRight: '4%',
  },
  ViewaF: {
    minHeight: 50,
  },
  ViewUq: {
    minHeight: 50,
  },
  ViewOW: {
    minHeight: 50,
    marginBottom: 25,
  },
  Text_3z: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 10,
    textAlign: 'center',
  },
  View_3D: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  ButtonOutline_1d: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 16,
    minHeight: 54,
  },
  ViewBB: {
    minHeight: 50,
    paddingLeft: 34,
    paddingRight: 34,
    marginTop: 16,
  },
  Viewqo: {
    justifyContent: 'center',
  },
  Viewys: {
    minHeight: 50,
    justifyContent: 'center',
    paddingBottom: 34,
    paddingTop: 16,
    borderTopWidth: 1,
  },
  screen: {
    justifyContent: 'space-between',
  },
});

export default withTheme(CreateProfile4OtherPreferencesScreen);
