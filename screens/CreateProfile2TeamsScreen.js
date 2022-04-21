import React from 'react';
import * as CustomCode from '../components.js';
import * as Utils from '../utils';
import {
  ButtonOutline,
  Icon,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const CreateProfile2TeamsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <ScreenContainer style={styles.screen} scrollable={true} hasSafeArea={true}>
      <View style={styles.ViewjM} pointerEvents={'auto'}>
        <Surface
          style={{ borderRadius: 0, backgroundColor: theme.colors.background }}
          elevation={0}
        >
          <View style={[styles.ViewIo, { borderRadius: 0 }]}>
            <View style={styles.ViewUz} pointerEvents={'auto'}>
              <View style={[styles.ViewkT, { borderRadius: 0 }]}>
                <Touchable
                  onPress={() => {
                    try {
                      navigation.goBack();
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View style={styles.View_4P}>
                    <Icon
                      name={'Ionicons/ios-chevron-back-sharp'}
                      size={28}
                      color={theme.colors.light}
                    />
                  </View>
                </Touchable>
              </View>
              <View style={styles.ViewbL} />
              <View style={[styles.ViewUf, { borderRadius: 0 }]} />
            </View>
          </View>
        </Surface>

        <View style={styles.ViewLj}>
          <View style={styles.View_95}>
            <Text
              style={[
                styles.TextRd,
                { color: theme.colors.background_inverse },
              ]}
            >
              {'Select your favorite teams.'}
            </Text>

            <View style={styles.ViewEP}>
              <Utils.CustomCodeErrorBoundary>
                <CustomCode.MultiTeamSelect />
              </Utils.CustomCodeErrorBoundary>
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.ViewWy, { borderColor: theme.colors.divider }]}>
        <View style={styles.ViewB5}>
          <View style={styles.ViewtN}>
            <Text style={[styles.TextDw, { color: theme.colors.light }]}>
              {
                'We use this information to customize your experience. You can modify these preferences later in Settings.'
              }
            </Text>
          </View>

          <View style={styles.ViewfH}>
            <ButtonOutline
              onPress={() => {
                try {
                  navigation.navigate('CreateProfileBetaStack');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonOutlineoa,
                {
                  color: theme.colors.background,
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
  View_4P: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 16,
    paddingRight: 16,
    minHeight: 50,
  },
  ViewkT: {
    minWidth: '33%',
    maxWidth: '34%',
    alignItems: 'flex-start',
  },
  ViewbL: {
    alignContent: 'center',
    justifyContent: 'center',
    minWidth: '33%',
    maxWidth: '34%',
    maxHeight: 50,
  },
  ViewUf: {
    minWidth: '33%',
    maxWidth: '34%',
    alignItems: 'flex-end',
  },
  ViewUz: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewIo: {
    justifyContent: 'center',
  },
  TextRd: {
    textAlign: 'left',
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewEP: {
    marginTop: 30,
  },
  View_95: {
    minHeight: 50,
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingTop: '4%',
    paddingBottom: '4%',
  },
  ViewLj: {
    minHeight: 50,
  },
  ViewjM: {
    minHeight: 50,
  },
  TextDw: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 10,
    textAlign: 'center',
  },
  ViewtN: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  ButtonOutlineoa: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 16,
    minHeight: 54,
  },
  ViewfH: {
    minHeight: 50,
    paddingLeft: 34,
    paddingRight: 34,
    marginTop: 16,
  },
  ViewB5: {
    justifyContent: 'center',
  },
  ViewWy: {
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

export default withTheme(CreateProfile2TeamsScreen);
