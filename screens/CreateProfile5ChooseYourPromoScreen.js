import React from 'react';
import Images from '../config/Images';
import {
  Icon,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import * as WebBrowser from 'expo-web-browser';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const CreateProfile5ChooseYourPromoScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  const [clickedPromo, setClickedPromo] = React.useState(false);

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      <View style={[styles.ViewcO, { borderRadius: 0 }]}>
        <View style={styles.Viewb4} pointerEvents={'auto'}>
          <View style={[styles.ViewSl, { borderRadius: 0 }]}>
            <Touchable
              onPress={() => {
                try {
                  navigation.goBack();
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles.ViewI8}>
                <Icon
                  name={'Ionicons/ios-chevron-back'}
                  size={32}
                  color={theme.colors.background_inverse}
                />
                <Text
                  style={[
                    styles.TextnC,
                    { color: theme.colors.background_inverse },
                  ]}
                >
                  {'Back'}
                </Text>
              </View>
            </Touchable>
          </View>
          <View style={styles.ViewKz} />
          <View style={[styles.View_7S, { borderRadius: 0 }]} />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.ScrollViewzYContent}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewP1}>
          <Text
            style={[styles.Text_7s, { color: theme.colors.background_inverse }]}
          >
            {'Choose your welcome promo 💰'}
          </Text>
        </View>

        <View style={styles.ViewWc} pointerEvents={'auto'}>
          <View
            style={[styles.Viewlf, { borderRadius: 6 }]}
            pointerEvents={'auto'}
          >
            <Touchable
              onPress={async () => {
                try {
                  setClickedPromo(true);
                  await WebBrowser.openBrowserAsync(
                    'https://mediaserver.betmgmpartners.com/renderBanner.do?zoneId=1666694'
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[styles.Touchablec9, { borderRadius: 6 }]}
            >
              <Surface
                style={[
                  styles.SurfacerT,
                  { backgroundColor: theme.colors.divider, borderRadius: 6 },
                ]}
              >
                <View
                  style={[styles.ViewTt, { borderRadius: 6 }]}
                  pointerEvents={'auto'}
                >
                  <Image
                    style={styles.ImagexC}
                    source={Images.BetMGMWelcomePromo}
                    resizeMode={'cover'}
                  />
                </View>
              </Surface>
            </Touchable>
          </View>

          <View
            style={[styles.ViewVF, { borderRadius: 6 }]}
            pointerEvents={'auto'}
          >
            <Touchable
              onPress={async () => {
                try {
                  setClickedPromo(true);
                  await WebBrowser.openBrowserAsync(
                    'https://prizepicks.com/welcome?invite_code=vault'
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[styles.Touchablevs, { borderRadius: 6 }]}
            >
              <Surface
                style={[
                  styles.Surfacel2,
                  { backgroundColor: theme.colors.divider, borderRadius: 6 },
                ]}
              >
                <View
                  style={[styles.ViewjR, { borderRadius: 6 }]}
                  pointerEvents={'auto'}
                >
                  <Image
                    style={styles.ImageRe}
                    source={Images.PrizePicksWelcomePromo}
                    resizeMode={'cover'}
                  />
                </View>
              </Surface>
            </Touchable>
          </View>

          <View
            style={[styles.ViewgQ, { borderRadius: 6 }]}
            pointerEvents={'auto'}
          >
            <Touchable
              onPress={async () => {
                try {
                  setClickedPromo(true);
                  await WebBrowser.openBrowserAsync(
                    'https://wlkindred.adsrv.eacdn.com/C.ashx?btag=a_2165b_334c_&affid=76&siteid=2165&adid=334&c=[acid]'
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[styles.Touchable_2Z, { borderRadius: 6 }]}
            >
              <Surface
                style={[
                  styles.SurfaceI0,
                  { backgroundColor: theme.colors.divider, borderRadius: 6 },
                ]}
              >
                <View
                  style={[styles.View_5e, { borderRadius: 6 }]}
                  pointerEvents={'auto'}
                >
                  <Image
                    style={styles.ImageVb}
                    source={Images.UnibetWelcomePromo}
                    resizeMode={'cover'}
                  />
                </View>
              </Surface>
            </Touchable>
          </View>

          <View
            style={[styles.View_2b, { borderRadius: 6 }]}
            pointerEvents={'auto'}
          >
            <Touchable
              onPress={async () => {
                try {
                  setClickedPromo(true);
                  await WebBrowser.openBrowserAsync(
                    'https://winview.onelink.me/2157567806/f08b653'
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[styles.TouchableSA, { borderRadius: 6 }]}
            >
              <Surface
                style={[
                  styles.Surfacebo,
                  { backgroundColor: theme.colors.divider, borderRadius: 6 },
                ]}
              >
                <View
                  style={[styles.ViewrS, { borderRadius: 6 }]}
                  pointerEvents={'auto'}
                >
                  <Image
                    style={styles.ImageBa}
                    source={Images.WinViewPromoScreen}
                    resizeMode={'cover'}
                  />
                </View>
              </Surface>
            </Touchable>
          </View>

          <View
            style={[styles.View_3M, { borderRadius: 6 }]}
            pointerEvents={'auto'}
          >
            <Touchable
              onPress={async () => {
                try {
                  setClickedPromo(true);
                  await WebBrowser.openBrowserAsync(
                    'https://www.vaultsportshq.com/betrivers'
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[styles.Touchable_4p, { borderRadius: 6 }]}
            >
              <Surface
                style={[
                  styles.SurfacePQ,
                  { backgroundColor: theme.colors.divider, borderRadius: 6 },
                ]}
              >
                <View
                  style={[styles.ViewuG, { borderRadius: 6 }]}
                  pointerEvents={'auto'}
                >
                  <Image
                    style={styles.Imagen7}
                    source={Images.BetRiversWelcomePromo}
                    resizeMode={'cover'}
                  />
                </View>
              </Surface>
            </Touchable>
          </View>

          <View style={styles.Viewdg} pointerEvents={'auto'}>
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('CreateProfile6ViewSyncedBooksScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles.View_77} pointerEvents={'auto'}>
                <>
                  {clickedPromo ? null : (
                    <Text
                      style={[styles.Textkz, { color: theme.colors.light }]}
                    >
                      {'Skip this for now'}
                    </Text>
                  )}
                </>
                <>
                  {!clickedPromo ? null : (
                    <Text
                      style={[styles.TextI5, { color: theme.colors.light }]}
                    >
                      {'Next'}
                    </Text>
                  )}
                </>
              </View>
            </Touchable>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextnC: {
    fontSize: 18,
  },
  ViewI8: {
    alignItems: 'center',
    paddingRight: 16,
    flexDirection: 'row',
    height: 50,
  },
  ViewSl: {
    minWidth: '33%',
    maxWidth: '34%',
    alignItems: 'flex-start',
  },
  ViewKz: {
    alignContent: 'center',
    justifyContent: 'center',
    minWidth: '33%',
    maxWidth: '34%',
    maxHeight: 50,
  },
  View_7S: {
    minWidth: '33%',
    maxWidth: '34%',
    alignItems: 'flex-end',
  },
  Viewb4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewcO: {
    justifyContent: 'center',
  },
  Text_7s: {
    textAlign: 'left',
    fontSize: 28,
    fontFamily: 'System',
    fontWeight: '700',
    paddingTop: 10,
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  ViewP1: {
    minHeight: 50,
  },
  ImagexC: {
    width: 325,
    height: 130,
  },
  ViewTt: {
    width: 325,
    height: 130,
    overflow: 'hidden',
  },
  SurfacerT: {
    flex: 1,
    width: 325,
    height: 130,
  },
  Touchablec9: {
    width: 325,
    height: 130,
  },
  Viewlf: {
    marginBottom: 28,
  },
  ImageRe: {
    width: 325,
    height: 130,
  },
  ViewjR: {
    width: 325,
    height: 130,
    overflow: 'hidden',
  },
  Surfacel2: {
    flex: 1,
    width: 325,
    height: 130,
  },
  Touchablevs: {
    width: 325,
    height: 130,
  },
  ViewVF: {
    marginBottom: 28,
  },
  ImageVb: {
    width: 325,
    height: 130,
  },
  View_5e: {
    width: 325,
    height: 130,
    overflow: 'hidden',
  },
  SurfaceI0: {
    flex: 1,
    width: 325,
    height: 130,
  },
  Touchable_2Z: {
    width: 325,
    height: 130,
  },
  ViewgQ: {
    marginBottom: 28,
  },
  ImageBa: {
    width: 325,
    height: 130,
  },
  ViewrS: {
    width: 325,
    height: 130,
    overflow: 'hidden',
  },
  Surfacebo: {
    flex: 1,
    width: 325,
    height: 130,
  },
  TouchableSA: {
    width: 325,
    height: 130,
  },
  View_2b: {
    marginBottom: 28,
  },
  Imagen7: {
    width: 325,
    height: 130,
  },
  ViewuG: {
    width: 325,
    height: 130,
    overflow: 'hidden',
  },
  SurfacePQ: {
    flex: 1,
    width: 325,
    height: 130,
  },
  Touchable_4p: {
    width: 325,
    height: 130,
  },
  View_3M: {
    marginBottom: 28,
  },
  Textkz: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextI5: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 16,
  },
  View_77: {
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 16,
    paddingRight: 16,
  },
  Viewdg: {
    marginTop: 10,
  },
  ViewWc: {
    paddingLeft: '4%',
    paddingRight: '4%',
    marginTop: 48,
    alignItems: 'center',
  },
  ScrollViewzYContent: {
    paddingBottom: 48,
  },
});

export default withTheme(CreateProfile5ChooseYourPromoScreen);
