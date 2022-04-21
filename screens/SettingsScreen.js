import React from 'react';
import {
  Divider,
  Icon,
  ScreenContainer,
  SwitchRow,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import * as WebBrowser from 'expo-web-browser';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

const SettingsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  const [switchBetGradedNotification, setSwitchBetGradedNotification] =
    React.useState(false);
  const [switchBetSuggestionNotification, setSwitchBetSuggestionNotification] =
    React.useState(false);
  const [switchConfigureBetNotification, setSwitchConfigureBetNotification] =
    React.useState(false);
  const [switchFollowedGameLineShift, setSwitchFollowedGameLineShift] =
    React.useState(false);
  const [switchGameStartNotification, setSwitchGameStartNotification] =
    React.useState(false);
  const [switchInGameTrendNotification, setSwitchInGameTrendNotification] =
    React.useState(false);
  const [switchPinTouchFaceId, setSwitchPinTouchFaceId] = React.useState(false);
  const [switchPlayerAlertsNotification, setSwitchPlayerAlertsNotification] =
    React.useState(false);
  const [
    switchStrategySuggestionNotification,
    setSwitchStrategySuggestionNotification,
  ] = React.useState(false);
  const [switchTrendNotification, setSwitchTrendNotification] =
    React.useState(false);

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <ScrollView
        style={styles.ScrollViewTO}
        contentContainerStyle={styles.ScrollViewTOContent}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        <View pointerEvents={'auto'}>
          <View>
            <View>
              <View style={styles.ViewXN}>
                <Text
                  style={[
                    styles.Textvj,
                    { color: theme.colors.background_inverse },
                  ]}
                >
                  {'Notifications'}
                </Text>
              </View>

              <View style={styles.ViewZR} pointerEvents={'auto'}>
                <Divider
                  style={styles.DividerzY}
                  color={theme.colors.divider}
                  height={1}
                />
              </View>

              <View style={styles.Viewav} pointerEvents={'auto'}>
                <SwitchRow
                  onValueChange={newSwitchRowValue => {
                    const switchTrendNotification = newSwitchRowValue;
                    try {
                      setSwitchTrendNotification(switchTrendNotification);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.SwitchRowfe,
                    { color: theme.colors.background_inverse },
                  ]}
                  label={'Overall trends'}
                  value={switchTrendNotification}
                />
                <Text style={[styles.Text_6x, { color: theme.colors.light }]}>
                  {'You are 13-5-1 (72.2%) betting on NFL Totals this season.'}
                </Text>
              </View>

              <View style={styles.Vieww8} pointerEvents={'auto'}>
                <SwitchRow
                  onValueChange={newSwitchRowValue => {
                    const switchInGameTrendNotification = newSwitchRowValue;
                    try {
                      setSwitchInGameTrendNotification(
                        switchInGameTrendNotification
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.SwitchRowEV,
                    { color: theme.colors.background_inverse },
                  ]}
                  label={'In-game trends'}
                  value={switchInGameTrendNotification}
                />
                <Text style={[styles.TextlO, { color: theme.colors.light }]}>
                  {
                    'You are 24-19 (55.8%) when teams are down in the first half.'
                  }
                </Text>
              </View>

              <View style={styles.ViewcR} pointerEvents={'auto'}>
                <Divider
                  style={styles.Divider_7y}
                  color={theme.colors.divider}
                  height={1}
                />
              </View>

              <View style={styles.ViewlM} pointerEvents={'auto'}>
                <SwitchRow
                  onValueChange={newSwitchRowValue => {
                    const switchBetSuggestionNotification = newSwitchRowValue;
                    try {
                      setSwitchBetSuggestionNotification(
                        switchBetSuggestionNotification
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.SwitchRowE6,
                    { color: theme.colors.background_inverse },
                  ]}
                  label={'Bet suggestions'}
                  value={switchBetSuggestionNotification}
                />
                <Text style={[styles.Textak, { color: theme.colors.light }]}>
                  {
                    'Your most profitable team (12.3% ROI) is playing tonight. Place your bet now! '
                  }
                </Text>
              </View>

              <View style={styles.Viewzw} pointerEvents={'auto'}>
                <SwitchRow
                  onValueChange={newSwitchRowValue => {
                    const switchStrategySuggestionNotification =
                      newSwitchRowValue;
                    try {
                      setSwitchStrategySuggestionNotification(
                        switchStrategySuggestionNotification
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.SwitchRowe9,
                    { color: theme.colors.background_inverse },
                  ]}
                  label={'Strategy suggestions'}
                  value={switchStrategySuggestionNotification}
                />
                <Text style={[styles.Textds, { color: theme.colors.light }]}>
                  {'You chased losses 3X last month. Stay consistent with...'}
                </Text>
              </View>

              <View style={styles.ViewWT} pointerEvents={'auto'}>
                <Divider
                  style={styles.DividerkK}
                  color={theme.colors.divider}
                  height={1}
                />
              </View>

              <View style={styles.Viewsq} pointerEvents={'auto'}>
                <SwitchRow
                  onValueChange={newSwitchRowValue => {
                    const switchConfigureBetNotification = newSwitchRowValue;
                    try {
                      setSwitchConfigureBetNotification(
                        switchConfigureBetNotification
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.SwitchRowb3,
                    { color: theme.colors.background_inverse },
                  ]}
                  label={'Configure recent bets'}
                  value={switchConfigureBetNotification}
                />
                <Text style={[styles.TextfQ, { color: theme.colors.light }]}>
                  {'You placed a bet on DraftKings. Configure it in Vault now!'}
                </Text>
              </View>

              <View style={styles.ViewdY} pointerEvents={'auto'}>
                <Divider
                  style={styles.DividerGD}
                  color={theme.colors.divider}
                  height={1}
                />
              </View>

              <View style={styles.ViewiC} pointerEvents={'auto'}>
                <SwitchRow
                  onValueChange={newSwitchRowValue => {
                    const switchFollowedGameLineShift = newSwitchRowValue;
                    try {
                      setSwitchFollowedGameLineShift(
                        switchFollowedGameLineShift
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.SwitchRowNO,
                    { color: theme.colors.background_inverse },
                  ]}
                  label={'Line shift alert'}
                  value={switchFollowedGameLineShift}
                />
                <Text style={[styles.Texty4, { color: theme.colors.light }]}>
                  {"A line shifted for a game you're following."}
                </Text>
              </View>

              <View style={styles.View_7a} pointerEvents={'auto'}>
                <SwitchRow
                  onValueChange={newSwitchRowValue => {
                    const switchPlayerAlertsNotification = newSwitchRowValue;
                    try {
                      setSwitchPlayerAlertsNotification(
                        switchPlayerAlertsNotification
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.SwitchRowG0,
                    { color: theme.colors.background_inverse },
                  ]}
                  label={'League, team, or player alert'}
                  value={switchPlayerAlertsNotification}
                />
                <Text style={[styles.Textf3, { color: theme.colors.light }]}>
                  {'A player you bet on is out with an injury.'}
                </Text>
              </View>

              <View style={styles.View_4D} pointerEvents={'auto'}>
                <SwitchRow
                  onValueChange={newSwitchRowValue => {
                    const switchGameStartNotification = newSwitchRowValue;
                    try {
                      setSwitchGameStartNotification(
                        switchGameStartNotification
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.SwitchRowc7,
                    { color: theme.colors.background_inverse },
                  ]}
                  label={'Game started alert'}
                  value={switchGameStartNotification}
                />
                <Text style={[styles.TextIr, { color: theme.colors.light }]}>
                  {'A game you bet on just started.'}
                </Text>
              </View>

              <View style={styles.View_3M} pointerEvents={'auto'}>
                <SwitchRow
                  onValueChange={newSwitchRowValue => {
                    const switchBetGradedNotification = newSwitchRowValue;
                    try {
                      setSwitchBetGradedNotification(
                        switchBetGradedNotification
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.SwitchRows7,
                    { color: theme.colors.background_inverse },
                  ]}
                  label={'Bet graded alert'}
                  value={switchBetGradedNotification}
                />
                <Text style={[styles.TextBW, { color: theme.colors.light }]}>
                  {'MIL -3.5 bet won! Final score MIL 130 - MIA 126.'}
                </Text>
              </View>
              <Divider
                style={styles.DividerVT}
                color={theme.colors.background_inverse}
              />
            </View>
          </View>

          <View style={styles.ViewmP}>
            <View>
              <View style={styles.ViewpT}>
                <Text
                  style={[
                    styles.TextuC,
                    { color: theme.colors.background_inverse },
                  ]}
                >
                  {'Account Settings'}
                </Text>
              </View>
              <SwitchRow
                onValueChange={newSwitchRowValue => {
                  const switchPinTouchFaceId = newSwitchRowValue;
                  try {
                    setSwitchPinTouchFaceId(switchPinTouchFaceId);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.SwitchRowa0,
                  { color: theme.colors.background_inverse },
                ]}
                label={'Require PIN / Touch ID / Face ID'}
                value={switchPinTouchFaceId}
              />
              <View style={styles.ViewgJ} pointerEvents={'auto'}>
                <Divider
                  style={styles.Divider_8J}
                  color={theme.colors.divider}
                  height={1}
                />
                <Touchable>
                  <View style={styles.View_2V} pointerEvents={'auto'}>
                    <Text style={{ color: theme.colors.background_inverse }}>
                      {'Modify your preferences'}
                    </Text>
                    <Icon
                      name={'Ionicons/ios-chevron-forward'}
                      color={theme.colors.background_inverse}
                      size={24}
                    />
                  </View>
                </Touchable>
                <Divider
                  style={styles.Divider_2w}
                  color={theme.colors.divider}
                  height={1}
                />
              </View>

              <View style={styles.ViewLg} pointerEvents={'auto'}>
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('FeaturenotavailableScreen');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View style={styles.ViewYs} pointerEvents={'auto'}>
                    <Text style={{ color: theme.colors.background_inverse }}>
                      {'Import bet data from spreadsheet'}
                    </Text>
                    <Icon
                      name={'Ionicons/ios-chevron-forward'}
                      color={theme.colors.background_inverse}
                      size={24}
                    />
                  </View>
                </Touchable>
                <Divider
                  style={styles.DividerK9}
                  color={theme.colors.divider}
                  height={1}
                />
              </View>

              <View style={styles.ViewRX} pointerEvents={'auto'}>
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('FeaturenotavailableScreen');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View style={styles.View_51} pointerEvents={'auto'}>
                    <Text style={{ color: theme.colors.background_inverse }}>
                      {'Responsible gambler settings'}
                    </Text>
                    <Icon
                      name={'Ionicons/ios-chevron-forward'}
                      color={theme.colors.background_inverse}
                      size={24}
                    />
                  </View>
                </Touchable>
                <Divider
                  style={styles.DividerTh}
                  color={theme.colors.divider}
                  height={1}
                />
              </View>

              <View style={styles.ViewZD} pointerEvents={'auto'}>
                <Touchable>
                  <View style={styles.ViewYx} pointerEvents={'auto'}>
                    <Text style={{ color: theme.colors.background_inverse }}>
                      {'Sign out of your Vault account'}
                    </Text>
                    <Icon
                      name={'Ionicons/ios-chevron-forward'}
                      color={theme.colors.background_inverse}
                      size={24}
                    />
                  </View>
                </Touchable>
                <Divider
                  style={styles.Dividered}
                  color={theme.colors.divider}
                  height={1}
                />
              </View>

              <View style={styles.ViewVk} pointerEvents={'auto'}>
                <Touchable>
                  <View style={styles.Viewtc} pointerEvents={'auto'}>
                    <Text style={{ color: theme.colors.error }}>
                      {'Delete your Vault account'}
                    </Text>
                    <Icon
                      name={'Ionicons/ios-chevron-forward'}
                      color={theme.colors.error}
                      size={24}
                    />
                  </View>
                </Touchable>
                <Divider
                  style={styles.Divideroq}
                  color={theme.colors.divider}
                  height={1}
                />
              </View>
            </View>
          </View>

          <View style={styles.View_0x}>
            <View>
              <View style={styles.ViewRt}>
                <Text
                  style={[
                    styles.Textpd,
                    { color: theme.colors.background_inverse },
                  ]}
                >
                  {'Subscription'}
                </Text>
              </View>

              <Text
                style={[
                  styles.TextFL,
                  { color: theme.colors.background_inverse },
                ]}
              >
                {
                  'Vault is in Beta mode. There are no subscriptions available at this time.'
                }
              </Text>
              <Divider
                style={styles.DividerOT}
                color={theme.colors.background_inverse}
              />
            </View>
          </View>

          <View style={styles.ViewQl}>
            <View>
              <View style={styles.ViewAn}>
                <Text
                  style={[
                    styles.Textgu,
                    { color: theme.colors.background_inverse },
                  ]}
                >
                  {'About\n'}
                </Text>
              </View>

              <View style={styles.ViewvF} pointerEvents={'auto'}>
                <Divider
                  style={styles.Divider_0l}
                  color={theme.colors.divider}
                  height={1}
                />
                <Touchable>
                  <View style={styles.ViewTb} pointerEvents={'auto'}>
                    <Text style={{ color: theme.colors.background_inverse }}>
                      {'FAQ & Help'}
                    </Text>
                    <Icon
                      name={'Ionicons/ios-chevron-forward'}
                      color={theme.colors.background_inverse}
                      size={24}
                    />
                  </View>
                </Touchable>
                <Divider
                  style={styles.DividerPV}
                  color={theme.colors.divider}
                  height={1}
                />
              </View>

              <View style={styles.Viewi9} pointerEvents={'auto'}>
                <Touchable
                  onPress={async () => {
                    try {
                      await WebBrowser.openBrowserAsync(
                        'https://www.vaultsportshq.com/contact'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View style={styles.ViewrU} pointerEvents={'auto'}>
                    <Text style={{ color: theme.colors.background_inverse }}>
                      {'Contact support'}
                    </Text>
                    <Icon
                      name={'Ionicons/ios-chevron-forward'}
                      color={theme.colors.background_inverse}
                      size={24}
                    />
                  </View>
                </Touchable>
                <Divider
                  style={styles.Divider_0g}
                  color={theme.colors.divider}
                  height={1}
                />
              </View>

              <View style={styles.Viewqp} pointerEvents={'auto'}>
                <Touchable>
                  <View style={styles.Viewu4} pointerEvents={'auto'}>
                    <Text style={{ color: theme.colors.background_inverse }}>
                      {'Share Vault'}
                    </Text>
                    <Icon
                      name={'Ionicons/ios-chevron-forward'}
                      color={theme.colors.background_inverse}
                      size={24}
                    />
                  </View>
                </Touchable>
                <Divider
                  style={styles.DividerOo}
                  color={theme.colors.divider}
                  height={1}
                />
              </View>

              <View style={styles.ViewtT} pointerEvents={'auto'}>
                <Touchable>
                  <View style={styles.View_0J} pointerEvents={'auto'}>
                    <Text style={{ color: theme.colors.background_inverse }}>
                      {'Rate and review us'}
                    </Text>
                    <Icon
                      name={'Ionicons/ios-chevron-forward'}
                      color={theme.colors.background_inverse}
                      size={24}
                    />
                  </View>
                </Touchable>
                <Divider
                  style={styles.DividerX1}
                  color={theme.colors.divider}
                  height={1}
                />
              </View>

              <View style={styles.ViewOU} pointerEvents={'auto'}>
                <Touchable
                  onPress={async () => {
                    try {
                      await WebBrowser.openBrowserAsync(
                        'https://www.vaultsportshq.com/'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View style={styles.Viewkw} pointerEvents={'auto'}>
                    <Text style={{ color: theme.colors.background_inverse }}>
                      {'Visit our website'}
                    </Text>
                    <Icon
                      name={'Ionicons/ios-chevron-forward'}
                      color={theme.colors.background_inverse}
                      size={24}
                    />
                  </View>
                </Touchable>
                <Divider
                  style={styles.DividerdD}
                  color={theme.colors.divider}
                  height={1}
                />
              </View>

              <View style={styles.Viewbp} pointerEvents={'auto'}>
                <Touchable
                  onPress={async () => {
                    try {
                      await WebBrowser.openBrowserAsync(
                        'https://www.vaultsportshq.com/terms-of-service'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View style={styles.View_1T} pointerEvents={'auto'}>
                    <Text style={{ color: theme.colors.background_inverse }}>
                      {'Terms of service'}
                    </Text>
                    <Icon
                      name={'Ionicons/ios-chevron-forward'}
                      color={theme.colors.background_inverse}
                      size={24}
                    />
                  </View>
                </Touchable>
                <Divider
                  style={styles.DividerIG}
                  color={theme.colors.divider}
                  height={1}
                />
              </View>

              <View style={styles.ViewIp} pointerEvents={'auto'}>
                <Touchable
                  onPress={async () => {
                    try {
                      await WebBrowser.openBrowserAsync(
                        'https://www.vaultsportshq.com/privacy'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View style={styles.View_9L} pointerEvents={'auto'}>
                    <Text style={{ color: theme.colors.background_inverse }}>
                      {'Privacy policy'}
                    </Text>
                    <Icon
                      name={'Ionicons/ios-chevron-forward'}
                      color={theme.colors.background_inverse}
                      size={24}
                    />
                  </View>
                </Touchable>
                <Divider
                  style={styles.DividerIY}
                  color={theme.colors.divider}
                  height={1}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.Viewty}>
          <Touchable style={styles.TouchableMs}>
            <View style={styles.Viewjh} pointerEvents={'auto'}>
              <Text style={[styles.TextnQ, { color: theme.colors.light }]}>
                {'Sign Out'}
              </Text>
            </View>
          </Touchable>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textvj: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  ViewXN: {
    opacity: 1,
    marginTop: 18,
    marginLeft: '4%',
    marginRight: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  DividerzY: {
    height: 1,
  },
  ViewZR: {
    marginTop: 10,
    marginLeft: '4%',
    marginRight: '4%',
  },
  SwitchRowfe: {
    marginLeft: '4%',
    marginRight: '4%',
  },
  Text_6x: {
    fontSize: 10,
    marginLeft: '4%',
    marginRight: '4%',
    paddingRight: '25%',
  },
  Viewav: {
    marginTop: 28,
  },
  SwitchRowEV: {
    marginLeft: '4%',
    marginRight: '4%',
  },
  TextlO: {
    fontSize: 10,
    marginLeft: '4%',
    marginRight: '4%',
    paddingRight: '25%',
  },
  Vieww8: {
    marginTop: 14,
  },
  Divider_7y: {
    height: 1,
  },
  ViewcR: {
    marginTop: 32,
    marginLeft: '4%',
    marginRight: '4%',
  },
  SwitchRowE6: {
    marginLeft: '4%',
    marginRight: '4%',
  },
  Textak: {
    fontSize: 10,
    marginLeft: '4%',
    marginRight: '4%',
    paddingRight: '25%',
  },
  ViewlM: {
    marginTop: 28,
  },
  SwitchRowe9: {
    marginLeft: '4%',
    marginRight: '4%',
  },
  Textds: {
    fontSize: 10,
    marginLeft: '4%',
    marginRight: '4%',
    paddingRight: '25%',
  },
  Viewzw: {
    marginTop: 14,
  },
  DividerkK: {
    height: 1,
  },
  ViewWT: {
    marginTop: 32,
    marginLeft: '4%',
    marginRight: '4%',
  },
  SwitchRowb3: {
    marginLeft: '4%',
    marginRight: '4%',
  },
  TextfQ: {
    fontSize: 10,
    marginLeft: '4%',
    marginRight: '4%',
    paddingRight: 25,
  },
  Viewsq: {
    marginTop: 28,
  },
  DividerGD: {
    height: 1,
  },
  ViewdY: {
    marginTop: 32,
    marginLeft: '4%',
    marginRight: '4%',
  },
  SwitchRowNO: {
    marginLeft: '4%',
    marginRight: '4%',
  },
  Texty4: {
    fontSize: 10,
    marginLeft: '4%',
    marginRight: '4%',
    paddingRight: '25%',
  },
  ViewiC: {
    marginTop: 28,
  },
  SwitchRowG0: {
    marginLeft: '4%',
    marginRight: '4%',
  },
  Textf3: {
    fontSize: 10,
    marginLeft: '4%',
    marginRight: '4%',
    paddingRight: '25%',
  },
  View_7a: {
    marginTop: 14,
  },
  SwitchRowc7: {
    marginLeft: '4%',
    marginRight: '4%',
  },
  TextIr: {
    fontSize: 10,
    marginLeft: '4%',
    marginRight: '4%',
    paddingRight: '25%',
  },
  View_4D: {
    marginTop: 14,
  },
  SwitchRows7: {
    marginLeft: '4%',
    marginRight: '4%',
  },
  TextBW: {
    fontSize: 10,
    marginLeft: '4%',
    marginRight: '4%',
    paddingRight: '25%',
  },
  View_3M: {
    marginTop: 14,
  },
  DividerVT: {
    marginTop: 32,
    height: 1,
    marginLeft: '4%',
    marginRight: '4%',
  },
  TextuC: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  ViewpT: {
    opacity: 1,
    marginTop: 12,
    marginLeft: '4%',
    marginRight: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  SwitchRowa0: {
    marginTop: 18,
    marginLeft: '4%',
    marginRight: '4%',
  },
  Divider_8J: {
    height: 1,
  },
  View_2V: {
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Divider_2w: {
    height: 1,
  },
  ViewgJ: {
    marginTop: 14,
    marginLeft: '4%',
    marginRight: '4%',
  },
  ViewYs: {
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  DividerK9: {
    height: 1,
  },
  ViewLg: {
    marginLeft: '4%',
    marginRight: '4%',
  },
  View_51: {
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  DividerTh: {
    height: 1,
  },
  ViewRX: {
    marginLeft: '4%',
    marginRight: '4%',
  },
  ViewYx: {
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Dividered: {
    height: 1,
  },
  ViewZD: {
    marginLeft: '4%',
    marginRight: '4%',
  },
  Viewtc: {
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Divideroq: {
    height: 1,
  },
  ViewVk: {
    marginLeft: '4%',
    marginRight: '4%',
  },
  ViewmP: {
    marginTop: 40,
  },
  Textpd: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  ViewRt: {
    opacity: 1,
    marginTop: 12,
    marginLeft: '4%',
    marginRight: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextFL: {
    marginTop: 18,
    marginLeft: '4%',
    marginRight: '4%',
  },
  DividerOT: {
    marginTop: 32,
    height: 1,
    marginLeft: '4%',
    marginRight: '4%',
  },
  View_0x: {
    marginTop: 40,
  },
  Textgu: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  ViewAn: {
    opacity: 1,
    marginTop: 12,
    marginLeft: '4%',
    marginRight: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Divider_0l: {
    height: 1,
  },
  ViewTb: {
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  DividerPV: {
    height: 1,
  },
  ViewvF: {
    marginLeft: '4%',
    marginRight: '4%',
  },
  ViewrU: {
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Divider_0g: {
    height: 1,
  },
  Viewi9: {
    marginLeft: '4%',
    marginRight: '4%',
  },
  Viewu4: {
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  DividerOo: {
    height: 1,
  },
  Viewqp: {
    marginLeft: '4%',
    marginRight: '4%',
  },
  View_0J: {
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  DividerX1: {
    height: 1,
  },
  ViewtT: {
    marginLeft: '4%',
    marginRight: '4%',
  },
  Viewkw: {
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  DividerdD: {
    height: 1,
  },
  ViewOU: {
    marginLeft: '4%',
    marginRight: '4%',
  },
  View_1T: {
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  DividerIG: {
    height: 1,
  },
  Viewbp: {
    marginLeft: '4%',
    marginRight: '4%',
  },
  View_9L: {
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  DividerIY: {
    height: 1,
  },
  ViewIp: {
    marginLeft: '4%',
    marginRight: '4%',
  },
  ViewQl: {
    marginTop: 40,
  },
  TextnQ: {
    fontFamily: 'System',
    fontWeight: '700',
    alignSelf: 'center',
  },
  Viewjh: {
    justifyContent: 'center',
    minHeight: 50,
  },
  TouchableMs: {
    width: '60%',
  },
  Viewty: {
    marginTop: 44,
    paddingTop: 14,
    paddingBottom: 34,
    paddingRight: 32,
    paddingLeft: 32,
    alignItems: 'center',
  },
  ScrollViewTO: {
    flexGrow: 1,
  },
  ScrollViewTOContent: {
    justifyContent: 'space-between',
  },
});

export default withTheme(SettingsScreen);
