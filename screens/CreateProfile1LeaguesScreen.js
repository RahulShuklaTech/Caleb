import React from 'react';
import {
  ButtonOutline,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const CreateProfile1LeaguesScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <ScreenContainer style={styles.screen} scrollable={true} hasSafeArea={true}>
      <View style={styles.ViewUh} pointerEvents={'auto'}>
        <Surface
          style={{ borderRadius: 0, backgroundColor: theme.colors.background }}
          elevation={0}
        >
          <View style={[styles.ViewRL, { borderRadius: 0 }]}>
            <View style={styles.Viewh1} pointerEvents={'auto'}>
              <View style={[styles.Viewaz, { borderRadius: 0 }]} />
              <View style={styles.View_6n} />
              <View style={[styles.ViewCh, { borderRadius: 0 }]} />
            </View>
          </View>
        </Surface>

        <View style={styles.Viewa1}>
          <View style={styles.ViewcH}>
            <Text
              style={[styles.TextcB, { color: theme.colors.mediumInverse }]}
            >
              {'Customize your profile by selecting your favorite leagues.'}
            </Text>

            <View style={styles.Viewjq}>
              <Touchable style={styles.TouchableXD}>
                <View
                  style={[
                    styles.Viewvl,
                    {
                      backgroundColor: theme.colors.primary,
                      borderRadius: theme.roundness,
                    },
                  ]}
                >
                  <Text style={[styles.TextV7, { color: theme.colors.strong }]}>
                    {'NFL'}
                  </Text>
                </View>
              </Touchable>

              <Touchable style={styles.TouchableNn}>
                <View
                  style={[
                    styles.ViewOm,
                    {
                      borderRadius: theme.roundness,
                      backgroundColor: theme.colors.divider,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.Textlv,
                      { color: theme.colors.background_inverse },
                    ]}
                  >
                    {'NCAAF'}
                  </Text>
                </View>
              </Touchable>

              <Touchable style={styles.TouchableWA}>
                <View
                  style={[
                    styles.ViewCJ,
                    {
                      borderRadius: theme.roundness,
                      backgroundColor: theme.colors.primary,
                    },
                  ]}
                >
                  <Text style={[styles.TextZX, { color: theme.colors.strong }]}>
                    {'NBA'}
                  </Text>
                </View>
              </Touchable>

              <Touchable style={styles.TouchableAJ}>
                <View
                  style={[
                    styles.ViewzG,
                    {
                      borderRadius: theme.roundness,
                      backgroundColor: theme.colors.divider,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.TextCv,
                      { color: theme.colors.background_inverse },
                    ]}
                  >
                    {'NCAAB'}
                  </Text>
                </View>
              </Touchable>

              <Touchable style={styles.Touchable_9o}>
                <View
                  style={[
                    styles.ViewOn,
                    {
                      borderRadius: theme.roundness,
                      backgroundColor: theme.colors.divider,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.Text_7f,
                      { color: theme.colors.background_inverse },
                    ]}
                  >
                    {'MLB'}
                  </Text>
                </View>
              </Touchable>

              <Touchable style={styles.Touchable_68}>
                <View
                  style={[
                    styles.Viewa3,
                    {
                      borderRadius: theme.roundness,
                      backgroundColor: theme.colors.divider,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.TextWT,
                      { color: theme.colors.background_inverse },
                    ]}
                  >
                    {'NHL'}
                  </Text>
                </View>
              </Touchable>

              <Touchable style={styles.TouchableO0}>
                <View
                  style={[
                    styles.View_3V,
                    {
                      borderRadius: theme.roundness,
                      backgroundColor: theme.colors.divider,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.TextS7,
                      { color: theme.colors.background_inverse },
                    ]}
                  >
                    {'UFC'}
                  </Text>
                </View>
              </Touchable>
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.ViewaI, { borderColor: theme.colors.divider }]}>
        <View style={styles.View_6Z}>
          <View style={styles.ViewPd}>
            <Text style={[styles.TextxT, { color: theme.colors.light }]}>
              {
                'We use this information to customize your experience. You can modify these preferences later in Settings.'
              }
            </Text>
          </View>

          <View style={styles.ViewBr}>
            <ButtonOutline
              onPress={() => {
                try {
                  navigation.navigate('Welcome_Stack', {
                    screen: 'CreateProfile2TeamsScreen',
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonOutline_0M,
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
  Viewaz: {
    minWidth: '33%',
    maxWidth: '34%',
    alignItems: 'flex-start',
  },
  View_6n: {
    alignContent: 'center',
    justifyContent: 'center',
    minWidth: '33%',
    maxWidth: '34%',
    maxHeight: 50,
  },
  ViewCh: {
    minWidth: '33%',
    maxWidth: '34%',
    alignItems: 'flex-end',
  },
  Viewh1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewRL: {
    justifyContent: 'center',
  },
  TextcB: {
    textAlign: 'left',
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextV7: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Viewvl: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableXD: {
    marginTop: 8,
  },
  Textlv: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewOm: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableNn: {
    marginTop: 8,
  },
  TextZX: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewCJ: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableWA: {
    marginTop: 8,
  },
  TextCv: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewzG: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableAJ: {
    marginTop: 8,
  },
  Text_7f: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewOn: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchable_9o: {
    marginTop: 8,
  },
  TextWT: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Viewa3: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchable_68: {
    marginTop: 8,
  },
  TextS7: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
  },
  View_3V: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableO0: {
    marginTop: 8,
  },
  Viewjq: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 26,
  },
  ViewcH: {
    minHeight: 50,
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingTop: '4%',
    paddingBottom: '4%',
  },
  Viewa1: {
    minHeight: 50,
  },
  ViewUh: {
    minHeight: 50,
  },
  TextxT: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 10,
    textAlign: 'center',
  },
  ViewPd: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  ButtonOutline_0M: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 16,
    minHeight: 54,
  },
  ViewBr: {
    minHeight: 50,
    paddingLeft: 34,
    paddingRight: 34,
    marginTop: 16,
  },
  View_6Z: {
    justifyContent: 'center',
  },
  ViewaI: {
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

export default withTheme(CreateProfile1LeaguesScreen);
