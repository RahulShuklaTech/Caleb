import React from 'react';
import Images from '../config/Images';
import {
  ButtonOutline,
  ScreenContainer,
  Swiper,
  SwiperItem,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';

const Welcome1Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <ScreenContainer
      style={styles.screen}
      hasSafeArea={true}
      scrollable={false}
    >
      <View style={[styles.Viewc7, { borderRadius: 0 }]}>
        <View style={styles.ViewPs} pointerEvents={'auto'}>
          <View style={[styles.ViewCn, { borderRadius: 0 }]} />
          <View style={styles.ViewJC}>
            <Image
              style={styles.Image_7T}
              resizeMode={'contain'}
              source={Images.VaultLogoLightFontClearBackground}
            />
          </View>
          <View style={[styles.View_06, { borderRadius: 0 }]} />
        </View>
      </View>

      <Swiper
        style={styles.Swiper_3x}
        dotsTouchable={true}
        dotActiveColor={theme.colors.primary}
        dotColor={theme.colors.divider}
      >
        <SwiperItem style={styles.SwiperItemLO}>
          <Text
            style={[styles.Textm5, { color: theme.colors.background_inverse }]}
          >
            {'Sync Your Sportsbooks'}
          </Text>

          <View pointerEvents={'auto'}>
            <Image
              style={styles.ImageOk}
              source={Images._11}
              resizeMode={'contain'}
            />
          </View>
        </SwiperItem>

        <SwiperItem style={styles.SwiperItembj}>
          <Text
            style={[styles.Textiu, { color: theme.colors.background_inverse }]}
          >
            {'Bets Automatically Tracked'}
          </Text>

          <View pointerEvents={'auto'}>
            <Image
              style={styles.ImageU9}
              source={Images._12}
              resizeMode={'contain'}
            />
          </View>
        </SwiperItem>

        <SwiperItem style={styles.SwiperItembN}>
          <Text
            style={[styles.TextbN, { color: theme.colors.background_inverse }]}
          >
            {'Track Your Stats'}
          </Text>

          <View pointerEvents={'auto'}>
            <Image
              style={styles.ImagetN}
              source={Images._13}
              resizeMode={'contain'}
            />
          </View>
        </SwiperItem>

        <SwiperItem style={styles.SwiperItemfr}>
          <Text
            style={[styles.Textt9, { color: theme.colors.background_inverse }]}
          >
            {'Follow Your Money'}
          </Text>

          <View pointerEvents={'auto'}>
            <Image
              style={styles.Images8}
              source={Images._14}
              resizeMode={'contain'}
            />
          </View>
        </SwiperItem>

        <SwiperItem style={styles.SwiperItemot}>
          <Text
            style={[styles.Texthg, { color: theme.colors.background_inverse }]}
          >
            {'Find The Best Line'}
          </Text>

          <View pointerEvents={'auto'}>
            <Image
              style={styles.Image_1o}
              resizeMode={'contain'}
              source={Images._15}
            />
          </View>
        </SwiperItem>
      </Swiper>

      <View
        style={[styles.Viewzw, { borderColor: theme.colors.divider }]}
        pointerEvents={'auto'}
      >
        <View style={styles.ViewkU}>
          <ButtonOutline
            onPress={() => {
              try {
                navigation.navigate('Welcome_Stack', {
                  screen: 'SignUpScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonOutlinelZ,
              {
                color: theme.colors.strong,
                backgroundColor: theme.colors.primary,
              },
            ]}
            title={'Sign Up'}
            loading={false}
          />
          <View style={styles.Viewh2}>
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Welcome_Stack', {
                    screen: 'LogInScreen',
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.Touchablerr}
            >
              <Text style={[styles.Textwg, { color: theme.colors.light }]}>
                {'Log In'}
              </Text>
            </Touchable>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ViewCn: {
    width: '33%',
  },
  Image_7T: {
    opacity: 1,
    height: 50,
    width: 125,
  },
  ViewJC: {
    alignContent: 'center',
    justifyContent: 'center',
    height: 50,
    alignItems: 'center',
  },
  View_06: {
    width: '33%',
  },
  ViewPs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Viewc7: {
    justifyContent: 'center',
  },
  Textm5: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
    marginBottom: 28,
    marginTop: 10,
  },
  ImageOk: {
    width: 325,
    height: 325,
  },
  SwiperItemLO: {
    alignItems: 'center',
  },
  Textiu: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
    marginBottom: 28,
    marginTop: 10,
  },
  ImageU9: {
    width: 325,
    height: 325,
  },
  SwiperItembj: {
    alignItems: 'center',
  },
  TextbN: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
    marginBottom: 28,
    marginTop: 10,
  },
  ImagetN: {
    width: 325,
    height: 325,
  },
  SwiperItembN: {
    alignItems: 'center',
  },
  Textt9: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
    marginBottom: 28,
    marginTop: 10,
  },
  Images8: {
    width: 325,
    height: 325,
  },
  SwiperItemfr: {
    alignItems: 'center',
  },
  Texthg: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
    marginBottom: 28,
    marginTop: 10,
  },
  Image_1o: {
    width: 325,
    height: 325,
  },
  SwiperItemot: {
    alignItems: 'center',
  },
  Swiper_3x: {
    height: 425,
    width: '100%',
  },
  ButtonOutlinelZ: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 16,
    minHeight: 54,
  },
  Textwg: {
    fontFamily: 'System',
    fontWeight: '700',
    marginBottom: 6,
    marginTop: 6,
  },
  Touchablerr: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  Viewh2: {
    marginTop: 14,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ViewkU: {
    width: '100%',
    marginTop: 14,
  },
  Viewzw: {
    width: '100%',
    paddingLeft: 34,
    paddingRight: 34,
    paddingBottom: '4%',
    borderTopWidth: 1,
  },
  screen: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default withTheme(Welcome1Screen);
