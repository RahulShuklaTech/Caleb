import React from 'react';
import {
  Icon,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const DashboardTrendsScreen = props => {
  const { theme } = props;

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <ScreenContainer scrollable={true} hasSafeArea={false}>
      <View style={styles.ViewBC}>
        <View style={styles.ViewXT}>
          <Text
            style={[styles.Textri, { color: theme.colors.background_inverse }]}
          >
            {'Negative Trend Recognized'}
          </Text>
        </View>

        <View style={styles.ViewKx}>
          <Touchable>
            <Surface
              style={{ backgroundColor: theme.colors.divider, borderRadius: 6 }}
              elevation={1}
            >
              <View
                style={[
                  styles.ViewcF,
                  {
                    backgroundColor: theme.colors.divider,
                    borderRadius: 6,
                    borderColor: theme.colors.divider,
                  },
                ]}
                collapsable={false}
              >
                <View style={styles.Viewpa}>
                  <Icon
                    size={32}
                    name={'Ionicons/ios-checkmark-circle-sharp'}
                    color={theme.colors.good}
                  />
                  <Icon
                    color={theme.colors.error}
                    name={'Ionicons/ios-close-circle-sharp'}
                    size={32}
                  />
                  <Icon
                    name={'Ionicons/ios-alert-circle'}
                    size={32}
                    color={theme.colors.fair}
                  />
                </View>

                <View style={styles.Viewc4}>
                  <Text
                    style={{ color: theme.colors.light }}
                    ellipsizeMode={'head'}
                  >
                    {
                      'You are 8-23-1 betting on NBA ML over the past 28 days. Consider modifying your strategy.'
                    }
                  </Text>
                </View>
              </View>
            </Surface>
          </Touchable>
        </View>
      </View>

      <View style={styles.Viewh0}>
        <View style={styles.ViewfZ}>
          <Text
            style={[styles.TexteI, { color: theme.colors.background_inverse }]}
          >
            {'Your Bets'}
          </Text>
        </View>

        <View style={styles.ViewE1}>
          <View style={styles.ViewkV} pointerEvents={'auto'}>
            <Surface
              style={{ backgroundColor: theme.colors.divider, borderRadius: 6 }}
            >
              <View
                style={[
                  styles.View_4i,
                  {
                    backgroundColor: theme.colors.divider,
                    borderRadius: 6,
                    borderColor: theme.colors.divider,
                  },
                ]}
                collapsable={false}
              >
                <View style={styles.View_2M}>
                  <View style={styles.ViewqO}>
                    <Icon
                      name={'Ionicons/ios-radio-button-on-sharp'}
                      size={20}
                      color={theme.colors.light}
                    />
                    <Icon
                      name={'Ionicons/ios-close-circle-sharp'}
                      size={20}
                      color={theme.colors.error}
                    />
                    <Icon
                      name={'Ionicons/ios-checkmark-circle-sharp'}
                      size={20}
                      color={theme.colors.good}
                    />
                    <Icon
                      name={'Ionicons/ios-remove-circle-sharp'}
                      size={20}
                      color={theme.colors.light}
                    />
                    <Icon
                      name={'Ionicons/ios-arrow-undo-circle-sharp'}
                      size={20}
                      color={theme.colors.fair}
                    />
                  </View>

                  <View style={styles.ViewuS}>
                    <Text
                      style={[
                        styles.Texttj,
                        { color: theme.colors.background_inverse },
                      ]}
                      ellipsizeMode={'tail'}
                      numberOfLines={2}
                    >
                      {
                        'POR -7 (+130) (First Half) asdf;adsf ;kj dj k j djk dk l dk l dfk jl;dfas kjldsafkjl kjl asdfk ja kldf ask jl df jdfk j daak dfs'
                      }
                    </Text>

                    <View style={styles.ViewaQ} pointerEvents={'auto'}>
                      <View style={styles.ViewYn}>
                        <Icon
                          name={'Ionicons/ios-radio-button-on-sharp'}
                          size={12}
                          color={theme.colors.light}
                        />
                        <Icon
                          name={'Ionicons/ios-close-circle-sharp'}
                          size={12}
                          color={theme.colors.error}
                        />
                        <Icon
                          name={'Ionicons/ios-checkmark-circle-sharp'}
                          size={12}
                          color={theme.colors.good}
                        />
                        <Icon
                          name={'Ionicons/ios-remove-circle-sharp'}
                          size={12}
                          color={theme.colors.light}
                        />
                        <Icon
                          name={'Ionicons/ios-arrow-undo-circle-sharp'}
                          size={12}
                          color={theme.colors.fair}
                        />
                      </View>

                      <View style={styles.ViewUt} pointerEvents={'auto'}>
                        <Text
                          style={[styles.Textmb, { color: theme.colors.light }]}
                          ellipsizeMode={'tail'}
                          numberOfLines={2}
                        >
                          {
                            'CLE +4.5 (-110) (First Half) asdfs dakjldsf  f fdjkdfak fds kl kk lfkjdsafkjldafs kl dfk d kl dfskj fkj fsa'
                          }
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={styles.ViewQb}>
                  <View style={styles.Viewkq}>
                    <Text
                      style={[
                        styles.TextQx,
                        { color: theme.colors.background_inverse },
                      ]}
                      ellipsizeMode={'tail'}
                      numberOfLines={1}
                    >
                      {'$100'}
                    </Text>

                    <Text
                      style={[styles.TextPl, { color: theme.colors.light }]}
                      ellipsizeMode={'tail'}
                      numberOfLines={1}
                    >
                      {'Risk'}
                    </Text>

                    <Text
                      style={[styles.TextCx, { color: theme.colors.error }]}
                      ellipsizeMode={'tail'}
                      numberOfLines={1}
                    >
                      {'-$100'}
                    </Text>

                    <Text
                      style={[styles.Textt5, { color: theme.colors.good }]}
                      ellipsizeMode={'tail'}
                      numberOfLines={1}
                    >
                      {'$100'}
                    </Text>

                    <Text
                      style={[
                        styles.TextNL,
                        { color: theme.colors.background_inverse },
                      ]}
                      ellipsizeMode={'tail'}
                      numberOfLines={1}
                    >
                      {'$0'}
                    </Text>

                    <Text
                      style={[styles.Textqk, { color: theme.colors.fair }]}
                      ellipsizeMode={'tail'}
                      numberOfLines={1}
                    >
                      {'-$50'}
                    </Text>
                  </View>
                </View>
              </View>
            </Surface>
          </View>

          <View style={styles.Viewv6} pointerEvents={'auto'}>
            <Surface
              style={{ backgroundColor: theme.colors.divider, borderRadius: 6 }}
            >
              <View
                style={[
                  styles.Viewgt,
                  {
                    backgroundColor: theme.colors.divider,
                    borderRadius: 6,
                    borderColor: theme.colors.divider,
                  },
                ]}
                collapsable={false}
              >
                <View style={styles.ViewiU}>
                  <View style={styles.View_8r}>
                    <Icon
                      name={'Ionicons/ios-radio-button-on-sharp'}
                      size={20}
                      color={theme.colors.light}
                    />
                    <Icon
                      name={'Ionicons/ios-close-circle-sharp'}
                      size={20}
                      color={theme.colors.error}
                    />
                    <Icon
                      name={'Ionicons/ios-checkmark-circle-sharp'}
                      size={20}
                      color={theme.colors.good}
                    />
                    <Icon
                      name={'Ionicons/ios-remove-circle-sharp'}
                      size={20}
                      color={theme.colors.light}
                    />
                    <Icon
                      name={'Ionicons/ios-arrow-undo-circle-sharp'}
                      size={20}
                      color={theme.colors.fair}
                    />
                  </View>

                  <View style={styles.ViewlT}>
                    <Text
                      style={[
                        styles.Textxq,
                        { color: theme.colors.background_inverse },
                      ]}
                      ellipsizeMode={'tail'}
                      numberOfLines={2}
                    >
                      {
                        'POR -7 (+130) (First Half) asdf;adsf ;kj dj k j djk dk l dk l dfk jl;dfas kjldsafkjl kjl asdfk ja kldf ask jl df jdfk j daak dfs'
                      }
                    </Text>

                    <View style={styles.ViewMy} pointerEvents={'auto'}>
                      <View style={styles.ViewRY}>
                        <Icon
                          name={'Ionicons/ios-radio-button-on-sharp'}
                          size={12}
                          color={theme.colors.light}
                        />
                        <Icon
                          name={'Ionicons/ios-close-circle-sharp'}
                          size={12}
                          color={theme.colors.error}
                        />
                        <Icon
                          name={'Ionicons/ios-checkmark-circle-sharp'}
                          size={12}
                          color={theme.colors.good}
                        />
                        <Icon
                          name={'Ionicons/ios-remove-circle-sharp'}
                          size={12}
                          color={theme.colors.light}
                        />
                        <Icon
                          name={'Ionicons/ios-arrow-undo-circle-sharp'}
                          size={12}
                          color={theme.colors.fair}
                        />
                      </View>

                      <View style={styles.Viewf7} pointerEvents={'auto'}>
                        <Text
                          style={[styles.TextSH, { color: theme.colors.light }]}
                          ellipsizeMode={'tail'}
                          numberOfLines={2}
                        >
                          {
                            'CLE +4.5 (-110) (First Half) asdfs dakjldsf  f fdjkdfak fds kl kk lfkjdsafkjldafs kl dfk d kl dfskj fkj fsa'
                          }
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={styles.ViewwM}>
                  <View style={styles.ViewV3}>
                    <Text
                      style={[
                        styles.TextPW,
                        { color: theme.colors.background_inverse },
                      ]}
                      ellipsizeMode={'tail'}
                      numberOfLines={1}
                    >
                      {'$100'}
                    </Text>

                    <Text
                      style={[styles.Texte3, { color: theme.colors.light }]}
                      ellipsizeMode={'tail'}
                      numberOfLines={1}
                    >
                      {'Risk'}
                    </Text>

                    <Text
                      style={[styles.Textob, { color: theme.colors.error }]}
                      ellipsizeMode={'tail'}
                      numberOfLines={1}
                    >
                      {'-$100'}
                    </Text>

                    <Text
                      style={[styles.TextGM, { color: theme.colors.good }]}
                      ellipsizeMode={'tail'}
                      numberOfLines={1}
                    >
                      {'$100'}
                    </Text>

                    <Text
                      style={[
                        styles.TextGR,
                        { color: theme.colors.background_inverse },
                      ]}
                      ellipsizeMode={'tail'}
                      numberOfLines={1}
                    >
                      {'$0'}
                    </Text>

                    <Text
                      style={[styles.TextxQ, { color: theme.colors.fair }]}
                      ellipsizeMode={'tail'}
                      numberOfLines={1}
                    >
                      {'-$50'}
                    </Text>
                  </View>
                </View>
              </View>
            </Surface>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textri: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  ViewXT: {
    opacity: 1,
    marginTop: 18,
    marginLeft: '4%',
    marginRight: '4%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewpa: {
    alignContent: 'center',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Viewc4: {
    flex: 1,
    justifyContent: 'center',
  },
  ViewcF: {
    paddingLeft: 12,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  ViewKx: {
    marginLeft: '4%',
    marginTop: 10,
    marginRight: '4%',
  },
  ViewBC: {
    minHeight: 50,
  },
  TexteI: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  ViewfZ: {
    opacity: 1,
    marginLeft: '4%',
    marginRight: '4%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28,
  },
  ViewqO: {
    alignContent: 'center',
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Texttj: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 12,
  },
  ViewYn: {
    alignContent: 'center',
    marginRight: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Textmb: {
    fontSize: 10,
  },
  ViewUt: {
    flex: 1,
    justifyContent: 'center',
  },
  ViewaQ: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewuS: {
    marginRight: 6,
    justifyContent: 'center',
    flex: 1,
  },
  View_2M: {
    flexDirection: 'row',
    width: '75%',
  },
  TextQx: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 12,
  },
  TextPl: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 8,
  },
  TextCx: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 12,
  },
  Textt5: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 12,
  },
  TextNL: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 12,
  },
  Textqk: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 12,
  },
  Viewkq: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
  },
  ViewQb: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '20%',
  },
  View_4i: {
    paddingLeft: 3,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 3,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewkV: {
    marginTop: 2,
  },
  View_8r: {
    alignContent: 'center',
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Textxq: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 12,
  },
  ViewRY: {
    alignContent: 'center',
    marginRight: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextSH: {
    fontSize: 10,
  },
  Viewf7: {
    flex: 1,
    justifyContent: 'center',
  },
  ViewMy: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewlT: {
    marginRight: 6,
    justifyContent: 'center',
    flex: 1,
  },
  ViewiU: {
    flexDirection: 'row',
    width: '75%',
  },
  TextPW: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 12,
  },
  Texte3: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 8,
  },
  Textob: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 12,
  },
  TextGM: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 12,
  },
  TextGR: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 12,
  },
  TextxQ: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 12,
  },
  ViewV3: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
  },
  ViewwM: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '20%',
  },
  Viewgt: {
    paddingLeft: 3,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 3,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Viewv6: {
    marginTop: 2,
  },
  ViewE1: {
    marginLeft: '4%',
    marginRight: '4%',
    marginTop: 8,
  },
  Viewh0: {
    paddingBottom: 18,
  },
});

export default withTheme(DashboardTrendsScreen);
